import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Comment } from '../../entity/Comment';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

@Resolver()
export class DeleteCommentResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteComment(
		@Arg('quiz_id') quiz_id: number,
		@Arg('commentId') commentId: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		await Comment.delete({
			id: commentId,
			quiz_id,
			author_id: req.session.user_id,
		});

		return 'DELETED';
	}
}
