import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Quiz } from "../../entity/Quiz";
import { isAuthenticated } from "../../middleware/isAuthenticated";
import { MyContext } from "../../types/types";
import {
  PaginatedQuizzes,
  QueryQuizzesInput,
  QuestionInput,
} from "./quizInput";

@Resolver(Quiz)
export class QuizResolver {
  @Query(() => PaginatedQuizzes)
  async quizzes(
    @Arg("queryQuizzesInput") queryQuizzesInput: QueryQuizzesInput
  ): Promise<PaginatedQuizzes> {
    const { limit } = queryQuizzesInput;

    let quizzesDB = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.author", "author")
      .leftJoinAndSelect("quiz.questions", "questions")
      .leftJoinAndSelect("quiz.results", "results")
      .leftJoinAndSelect("quiz.tags", "tags");

    if (queryQuizzesInput.query) {
      quizzesDB = quizzesDB
        .andWhere("quiz.title ilike :title", {
          title: `%${queryQuizzesInput.query}%`,
        })
        .orWhere("quiz.description ilike :description", {
          description: `%${queryQuizzesInput.query}%`,
        });
    }

    if (queryQuizzesInput.cursor) {
      quizzesDB = quizzesDB.andWhere("quiz.createdAt > :cursor", {
        cursor: new Date(parseInt(queryQuizzesInput.cursor)),
      });
    }

    const results = await quizzesDB.take(limit + 1).getMany();

    return {
      quizzes: results.slice(0, limit),
      hasMore: results.length === limit + 1,
    };
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async createQuiz(
    @Arg("title") title: string,
    @Arg("description") description: string,
    @Ctx() ctx: MyContext
  ): Promise<string> {
    const newQuiz = await Quiz.create({
      title,
      description,
      authorId: ctx.req.session.userId,
    }).save();

    return newQuiz.id;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Boolean)
  async addQuestion(
    @Arg("quizId") quizId: string,
    @Arg("data") data: QuestionInput
  ): Promise<boolean> {
    await getConnection()
      .createQueryBuilder()
      .relation(Quiz, "questions")
      .of(quizId)
      .add(data);

    return true;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Boolean)
  async deleteQuiz(
    @Arg("id") id: string,
    @Ctx() ctx: MyContext
  ): Promise<boolean> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Quiz)
      .where("id = :id", { id })
      .andWhere("authorId = :authorId", { authorId: ctx.req.session.userId })
      .execute();

    return true;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Quiz)
  async publishQuiz(
    @Arg("id") id: string,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const quiz = await getConnection()
      .getRepository(Quiz)
      .createQueryBuilder("quiz")
      .leftJoinAndSelect("quiz.questions", "questions")
      .where("quiz.id = :id", { id })
      .getOne();

    if (!quiz) {
      throw new Error("No quiz no found");
    }

    if (quiz.authorId !== ctx.req.session.userId) {
      throw new Error("You are not the author of this quiz");
    }

    if (quiz.questions.length === 0) {
      throw new Error("Cannot published if there is no question");
    }

    const updatedQuiz = await getConnection()
      .createQueryBuilder()
      .update(Quiz)
      .set({ isPublished: true })
      .where("id = :id", { id })
      .returning("*")
      .execute();

    return updatedQuiz.raw[0];
  }
}
