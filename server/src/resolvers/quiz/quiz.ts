import {
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} from "apollo-server-express";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
  Root,
  UseMiddleware,
} from "type-graphql";
import { Brackets, getConnection } from "typeorm";
import { Bookmark, Like, Quiz, User, Score } from "../../entity";
import { isAuthenticated } from "../../middleware";
import { IContext } from "../../types";
import {
  SubmitAnswersInput,
  GetTakersInput,
  QuizInput,
  QuizzesInput,
} from "./quiz.inputs";
import { PaginatedQuizzes, PaginatedTakers } from "./quiz.types";

@Resolver(Quiz)
export class QuizResolver implements ResolverInterface<Quiz> {
  @FieldResolver(() => Boolean)
  isMine(@Root() quiz: Quiz, @Ctx() ctx: IContext) {
    return quiz.authorId === ctx.req.session.userId;
  }

  @FieldResolver(() => Boolean)
  async isLiked(@Root() quiz: Quiz, @Ctx() ctx: IContext) {
    const likeStatus = await ctx.likeLoader.load(quiz.id);
    return quiz.id === likeStatus?.quizId;
  }

  @FieldResolver(() => Boolean)
  async isBookmarked(@Root() quiz: Quiz, @Ctx() ctx: IContext) {
    const bookmarkStatus = await ctx.bookmarkLoader.load(quiz.id);
    return quiz.id === bookmarkStatus?.quizId;
  }

  @FieldResolver(() => User)
  async author(@Root() quiz: Quiz, @Ctx() ctx: IContext) {
    return ctx.authorLoader.load(quiz.authorId);
  }

  @Query(() => PaginatedQuizzes)
  async getQuizzes(
    @Arg("quizzesInput") quizzesInput: QuizzesInput,
    @Arg("isPublished") isPublished: Boolean,
    @Arg("isMine") isMine: Boolean,
    @Ctx() ctx: IContext
  ): Promise<PaginatedQuizzes> {
    const { limit, search, cursor } = quizzesInput;
    const limitPlusOne = limit + 1;

    let quizzes = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.questions", "questions")
      .leftJoinAndSelect("quiz.results", "results")
      .leftJoinAndSelect("quiz.tags", "tags")
      .where("quiz.isPublished = :isPublished", { isPublished });

    if (search) {
      quizzes = quizzes.andWhere(
        new Brackets((qb) => {
          qb.where("quiz.title ilike :search", {
            search: `%${search}%`,
          }).orWhere("quiz.description ilike :search", {
            search: `%${search}%`,
          });
        })
      );
    }

    if (isMine) {
      quizzes = quizzes.andWhere("quiz.authorId = :authorId", {
        authorId: ctx.req.session.userId,
      });
    }

    if (cursor) {
      quizzes = quizzes.andWhere("quiz.createdAt < :cursor", {
        cursor: new Date(Number(cursor) - 1),
      });
    }

    const results = await quizzes
      .orderBy("quiz.createdAt", "DESC")
      .take(limitPlusOne)
      .getMany();

    const quizzesRes = results.slice(0, limit);

    return {
      quizzes: quizzesRes,
      pageInfo: {
        endCursor: quizzesRes[quizzesRes.length - 1].createdAt,
        hasNextPage: results.length === limitPlusOne,
      },
    };
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async saveQuiz(
    @Arg("input") input: QuizInput,
    @Ctx() ctx: IContext,
    @Arg("quizId", { nullable: true }) quizId?: string
  ): Promise<Quiz> {
    const authorId = ctx.req.session.userId;
    const questionCount = input.questions.length;

    let newQuiz: Quiz;

    if (quizId) {
      const quiz = await Quiz.findOne({ id: quizId });
      let updated = Object.assign(quiz, { ...input, questionCount });
      newQuiz = await Quiz.save(updated);
    } else {
      newQuiz = await Quiz.create({ ...input, questionCount, authorId }).save();
    }

    return newQuiz;
  }

  @UseMiddleware(isAuthenticated)
  @Query(() => Quiz)
  async getQuiz(
    @Arg("quizId") quizId: string,
    @Arg("isInput") isInput: boolean,
    @Ctx() ctx: IContext
  ): Promise<Quiz> {
    const authorId = ctx.req.session.userId;

    const quiz = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
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
  @Mutation(() => Boolean)
  async deleteQuiz(
    @Arg("quizId") quizId: string,
    @Ctx() ctx: IContext
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
    @Ctx() ctx: IContext
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
    @Ctx() ctx: IContext
  ): Promise<Quiz> {
    const userId = ctx.req.session.userId;

    let quiz = await Quiz.findOne({ id: quizId });

    if (!quiz) {
      throw new Error("Quiz not found");
    }

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
    @Ctx() ctx: IContext
  ): Promise<Quiz> {
    const userId = ctx.req.session.userId;

    let quiz = await Quiz.findOneOrFail({ id: quizId });
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

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Score)
  async submitAnswers(
    @Arg("input") input: SubmitAnswersInput,
    @Ctx() ctx: IContext
  ): Promise<Score> {
    const takerId = ctx.req.session.userId;
    const { quizId, answers } = input;

    const quiz = await Quiz.findOne(quizId, { relations: ["questions"] });

    if (!quiz) {
      throw new Error("There is an error.");
    }

    const { questions, questionCount } = quiz;

    const answeredCorrect = questions.reduce((total, question) => {
      if (question.answer === answers[question.id]) {
        return (total += 1);
      }
      return total;
    }, 0);

    const score = await Score.create({
      takerId,
      quizId,
      totalItems: questionCount,
      score: answeredCorrect,
      quizAuthorId: quiz.authorId,
    }).save();

    quiz.takerCount++;

    quiz.save();

    return score;
  }

  @Query(() => PaginatedTakers)
  async getTakers(
    @Arg("input") input: GetTakersInput,
    @Arg("quizId") quizId: string,
    @Ctx() ctx: IContext
  ): Promise<PaginatedTakers> {
    const authorId = ctx.req.session.userId;

    const { limit, search, cursor } = input;
    const limitPlusOne = limit + 1;

    let takers = await getConnection()
      .getRepository(Score)
      .createQueryBuilder("score")
      .leftJoinAndSelect("score.taker", "taker")
      .where("score.quizId = :quizId", { quizId })
      .andWhere("score.quizAuthorId = :authorId", { authorId });

    if (search) {
      takers = takers.andWhere(
        new Brackets((qb) => {
          qb.where("taker.firstName ilike :search", {
            search: `%${search}%`,
          })
            .orWhere("taker.lastName ilike :search", {
              search: `%${search}%`,
            })
            .orWhere("taker.username ilike :search", {
              search: `%${search}%`,
            })
            .orWhere("taker.email ilike :search", {
              search: `%${search}%`,
            });
        })
      );
    }

    if (cursor) {
      takers = takers.andWhere("score.answered < :cursor", {
        cursor: new Date(Number(cursor) - 1),
      });
    }

    const results = await takers
      .orderBy("score.answered", "DESC")
      .take(limitPlusOne)
      .getMany();

    const takersRes = results.slice(0, limit);

    return {
      takers: takersRes,
      pageInfo: {
        endCursor: takersRes[takersRes.length - 1].answered,
        hasNextPage: results.length === limitPlusOne,
      },
    };
  }
}
