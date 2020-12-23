import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Comment } from '../../entity/Comment';
import { Quiz } from '../../entity/Quiz';

@Resolver()
export class deleteCommentResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteComment(
		@Arg('quizId') quizId: number,
		@Arg('commentId') commentId: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		const quiz = await Quiz.findOne({ id: quizId });

		if (!quiz) {
			throw new Error('Quiz not found');
		}

		await Comment.delete({
			id: commentId,
			author: req.session.userId,
			quiz,
		});

		return 'DELETED';
	}
}
