import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Comment } from '../../entity/Comment';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

@Resolver()
export class deleteCommentResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteComment(
		@Arg('quizId') quizId: number,
		@Arg('commentId') commentId: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		await Comment.delete({
			id: commentId,
			quizId,
			authorId: req.session.userId,
		});

		return 'DELETED';
	}
}
