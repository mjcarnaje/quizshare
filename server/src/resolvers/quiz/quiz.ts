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
  CreateQuizInput,
  PaginatedQuizzes,
  QueryQuizzesInput,
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
      .leftJoinAndSelect("quiz.questions", "questions");

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
  @Mutation(() => Quiz)
  async createQuiz(
    @Arg("createQuizInput") createQuizInput: CreateQuizInput,
    @Ctx() ctx: MyContext
  ): Promise<Quiz> {
    const newQuiz = await Quiz.create({
      ...createQuizInput,
      authorId: ctx.req.session.userId,
    }).save();

    return newQuiz;
  }
}
