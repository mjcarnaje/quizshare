import {
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} from "apollo-server-express";
import { Bookmark, Like } from "../../entity";
// import { User } from "../../entity/User";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Quiz } from "../../entity/Quiz";
import { isAuthenticated } from "../../middleware/isAuthenticated";
import { MyContext } from "../../types/types";
import { PaginatedQuizzes, QuizzesInput, QuizInput } from "./quizInput";

@Resolver(Quiz)
export class QuizResolver {
  @FieldResolver(() => Boolean)
  isMine(@Root() quiz: Quiz, @Ctx() ctx: MyContext) {
    return quiz.authorId === ctx.req.session.userId;
  }

  @FieldResolver(() => Boolean)
  async isLiked(@Root() quiz: Quiz, @Ctx() ctx: MyContext) {
    const likeStatus = await ctx.likeLoader.load(quiz.id);
    return quiz.id === likeStatus?.quizId;
  }

  @FieldResolver(() => Boolean)
  async isBookmarked(@Root() quiz: Quiz, @Ctx() ctx: MyContext) {
    const bookmarkStatus = await ctx.bookmarkLoader.load(quiz.id);
    return quiz.id === bookmarkStatus?.quizId;
  }

  @Query(() => PaginatedQuizzes)
  async getPublishedQuizzes(
    @Arg("quizzesInput") quizzesInput: QuizzesInput
  ): Promise<PaginatedQuizzes> {
    const { limit, query, cursor } = quizzesInput;
    const limitPlusOne = limit + 1;

    let quizzes = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.author", "author")
      .leftJoinAndSelect("quiz.questions", "questions")
      .leftJoinAndSelect("quiz.results", "results")
      .leftJoinAndSelect("quiz.tags", "tags")
      .andWhere("quiz.isPublished = :isPublished", { isPublished: true });

    if (query) {
      quizzes = quizzes
        .andWhere("quiz.title ilike :title", {
          title: `%${query}%`,
        })
        .andWhere("quiz.description ilike :description", {
          description: `%${query}%`,
        });
    }

    if (cursor) {
      quizzes = quizzes.andWhere("quiz.createdAt > :cursor", {
        cursor: new Date(parseInt(cursor)),
      });
    }

    const results = await quizzes
      .orderBy("quiz.createdAt", "DESC")
      .take(limitPlusOne)
      .getMany();

    return {
      quizzes: results.slice(0, limit),
      hasMore: results.length === limitPlusOne,
    };
  }

  @Query(() => PaginatedQuizzes)
  async getMyQuizzes(
    @Arg("quizzesInput") quizzesInput: QuizzesInput,
    @Ctx() ctx: MyContext
  ): Promise<PaginatedQuizzes> {
    const { limit, query, cursor, isPublished } = quizzesInput;
    const limitPlusOne = limit + 1;

    let quizzes = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.author", "author")
      .leftJoinAndSelect("quiz.questions", "questions")
      .leftJoinAndSelect("quiz.results", "results")
      .leftJoinAndSelect("quiz.tags", "tags")
      .andWhere("quiz.authorId = :authorId", {
        authorId: ctx.req.session.userId,
      })
      .andWhere("quiz.isPublished = :isPublished", {
        isPublished,
      });

    if (query) {
      quizzes = quizzes
        .andWhere("quiz.title ilike :title", {
          title: `%${query}%`,
        })
        .andWhere("quiz.description ilike :description", {
          description: `%${query}%`,
        });
    }

    if (cursor) {
      quizzes = quizzes.andWhere("quiz.createdAt > :cursor", {
        cursor: new Date(parseInt(cursor)),
      });
    }

    const results = await quizzes
      .orderBy("quiz.createdAt", "DESC")
      .take(limitPlusOne)
      .getMany();

    return {
      quizzes: results.slice(0, limit),
      hasMore: results.length === limitPlusOne,
    };
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async saveQuiz(
    @Arg("quizInput") quizInput: QuizInput,
    @Ctx() ctx: MyContext,
    @Arg("quizId", { nullable: true }) quizId?: string
  ): Promise<Quiz> {
    let newQuiz: Quiz;

    if (quizId) {
      const toUpdate = await Quiz.findOne({ id: quizId });
      let updated = Object.assign(toUpdate, {
        ...quizInput,
        questionCount: quizInput.questions.length,
      });
      newQuiz = await Quiz.save(updated);
    } else {
      newQuiz = await Quiz.create({
        ...quizInput,
        questionCount: quizInput.questions.length,
        authorId: ctx.req.session.userId,
      }).save();
    }

    return newQuiz;
  }

  @UseMiddleware(isAuthenticated)
  @Query(() => Quiz)
  async getQuiz(
    @Arg("quizId") quizId: string,
    @Arg("isInput") isInput: boolean,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const authorId = ctx.req.session.userId;

    const quiz = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.author", "author")
      .leftJoinAndSelect("quiz.questions", "questions")
      .leftJoinAndSelect("quiz.results", "results")
      .leftJoinAndSelect("quiz.tags", "tags")
      .andWhere("quiz.id = :quizId", { quizId })
      .getOne();

    if (!quiz) {
      throw new UserInputError("Quiz does not exist");
    }

    if (isInput && authorId !== quiz.authorId) {
      throw new ForbiddenError("You are not the owner of the quiz");
    }

    return quiz;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async editQuiz(
    // @Arg("quizId") quizId: string,
    @Arg("quizInput") quizInput: QuizInput,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const newQuiz = await Quiz.create({
      ...quizInput,
      questionCount: quizInput.questions.length,
      authorId: ctx.req.session.userId,
    }).save();

    return newQuiz;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Boolean)
  async deleteQuiz(
    @Arg("quizId") quizId: string,
    @Ctx() ctx: MyContext
  ): Promise<boolean> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Quiz)
      .andWhere("id = :quizId", { quizId })
      .andWhere("authorId = :authorId", { authorId: ctx.req.session.userId })
      .execute();

    return true;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async publishQuiz(
    @Arg("quizId") quizId: string,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const quiz = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.questions", "questions")
      .where("quiz.id = :quizId", { quizId })
      .getOne();

    if (!quiz) {
      throw new Error("No quiz no found");
    }

    if (quiz.authorId !== ctx.req.session.userId) {
      throw new AuthenticationError("You are not the author of this quiz");
    }

    if (quiz.questions.length === 0) {
      throw new Error("Cannot published if there is no question");
    }

    const updatedQuiz = await getConnection()
      .createQueryBuilder()
      .update(Quiz)
      .set({ isPublished: true })
      .where("id = :quizId", { quizId })
      .returning("*")
      .execute();

    return updatedQuiz.raw[0];
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async toggleLike(
    @Arg("quizId") quizId: string,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const userId = ctx.req.session.userId;

    let quiz = await Quiz.findOneOrFail(
      { id: quizId },
      { relations: ["author"] }
    );
    const liked = await Like.findOne({ userId, quizId });

    if (liked) {
      quiz.likeCount--;
      await Like.delete({ userId, quizId });
    } else {
      quiz.likeCount++;
      await Like.create({ userId, quizId }).save();
    }

    quiz = await Quiz.save(quiz);

    return quiz;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async toggleBookmark(
    @Arg("quizId") quizId: string,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const userId = ctx.req.session.userId;

    let quiz = await Quiz.findOneOrFail(
      { id: quizId },
      { relations: ["author"] }
    );
    const liked = await Bookmark.findOne({ userId, quizId });

    if (liked) {
      quiz.bookmarkCount--;
      await Bookmark.delete({ userId, quizId });
    } else {
      quiz.bookmarkCount++;
      await Bookmark.create({ userId, quizId }).save();
    }

    quiz = await Quiz.save(quiz);

    return quiz;
  }
}
