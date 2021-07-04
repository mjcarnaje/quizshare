import { isAuthenticated } from "../../middleware/isAuthenticated";
import {
  Mutation,
  Resolver,
  UseMiddleware,
  Arg,
  Ctx,
  Query,
  FieldResolver,
  Root,
} from "type-graphql";
import { MyContext } from "../../types/types";
import { Comment, Quiz, User } from "../../entity";
import { PaginatedComment, CommentsInput } from "./quiz.types";
import { getConnection } from "typeorm";

@Resolver(Comment)
export class CommentResolver {
  @FieldResolver(() => User)
  async author(@Root() comments: Comment, @Ctx() ctx: MyContext) {
    return ctx.authorLoader.load(comments.authorId);
  }

  @Query(() => PaginatedComment)
  async getComments(
    @Arg("commentsInput") commentsInput: CommentsInput
  ): Promise<PaginatedComment> {
    const { quizId, limit, cursor } = commentsInput;
    const limitPlusOne = limit + 1;

    let comments = await getConnection()
      .getRepository(Comment)
      .createQueryBuilder("comment")
      .where("comment.quizId = :quizId", { quizId });

    if (cursor) {
      comments = comments.andWhere("comment.createdAt > :cursor", {
        cursor: new Date(parseInt(cursor)),
      });
    }

    const results = await comments
      .orderBy("comment.createdAt", "DESC")
      .take(limitPlusOne)
      .getMany();

    return {
      comments: results.slice(0, limit),
      hasMore: results.length === limitPlusOne,
    };
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => Comment)
  async addComment(
    @Arg("quizId") quizId: string,
    @Arg("text") text: string,
    @Ctx() ctx: MyContext
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
  @Mutation(() => Boolean)
  async deleteComment(
    @Arg("quizId") quizId: string,
    @Arg("commentId") commentId: string,
    @Ctx() ctx: MyContext
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
