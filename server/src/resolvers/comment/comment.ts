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
import { Comment, Quiz, User } from "../../entity";
import { isAuthenticated } from "../../middleware";
import { IContext } from "../../types";
import { PaginatedComment } from "./comments.types";

@Resolver(Comment)
export class CommentResolver {
  @FieldResolver(() => Boolean)
  isMine(@Root() comment: Comment, @Ctx() ctx: IContext) {
    return comment.authorId === ctx.req.session.userId;
  }

  @FieldResolver(() => User)
  async author(@Root() comments: Comment, @Ctx() ctx: IContext) {
    return ctx.authorLoader.load(comments.authorId);
  }

  @Query(() => PaginatedComment)
  async getComments(
    @Arg("quizId") quizId: string,
    @Arg("limit") limit: number,
    @Arg("cursor", { nullable: true }) cursor: string
  ): Promise<PaginatedComment> {
    const limitPlusOne = limit + 1;

    let comments = await getConnection()
      .getRepository(Comment)
      .createQueryBuilder("comment")
      .where("comment.quizId = :quizId", { quizId });

    if (cursor) {
      comments = comments.andWhere("comment.createdAt > :cursor", {
        cursor: new Date(Number(cursor) + 1),
      });
    }

    const results = await comments
      .orderBy("comment.createdAt", "ASC")
      .take(limitPlusOne)
      .getMany();

    const commentsRes = results.slice(0, limit);

    return {
      comments: commentsRes,
      pageInfo: {
        endCursor: commentsRes[commentsRes.length - 1].createdAt,
        hasNextPage: results.length === limitPlusOne,
      },
    };
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Comment)
  async addComment(
    @Arg("quizId") quizId: string,
    @Arg("text") text: string,
    @Ctx() ctx: IContext
  ): Promise<Comment> {
    const authorId = ctx.req.session.userId;

    let quiz = await Quiz.findOne({ id: quizId });

    if (!quiz) {
      throw new Error("Quiz not found");
    }

    const comment = await Comment.create({
      quizId,
      authorId,
      text,
    }).save();

    quiz.commentCount++;

    quiz = await Quiz.save(quiz);

    return comment;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Comment)
  async editComment(
    @Arg("quizId") quizId: string,
    @Arg("commentId") commentId: string,
    @Arg("text") text: string,
    @Ctx() ctx: IContext
  ): Promise<Comment> {
    const authorId = ctx.req.session.userId;

    const comment = await getConnection()
      .createQueryBuilder()
      .update(Comment)
      .set({ text })
      .where("quizId = :quizId", { quizId })
      .andWhere("id = :commentId", { commentId })
      .andWhere("authorId = :authorId", { authorId })
      .returning("*")
      .execute();

    return comment.raw[0];
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Boolean)
  async deleteComment(
    @Arg("quizId") quizId: string,
    @Arg("commentId") commentId: string,
    @Ctx() ctx: IContext
  ): Promise<boolean> {
    const authorId = ctx.req.session.userId;

    let quiz = await Quiz.findOne({ id: quizId });

    if (!quiz) {
      throw new Error("Quiz not found");
    }

    await Comment.delete({
      id: commentId,
      authorId,
    });

    quiz.commentCount--;

    quiz = await Quiz.save(quiz);

    return true;
  }
}
