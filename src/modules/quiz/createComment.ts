import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Comment } from '../../entity/Comment';
import { User } from '../../entity/User';
import { Quiz } from '../../entity/Quiz';

@Resolver()
export class createCommentResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => Comment)
	async createComment(
		@Arg('quizId') quizId: number,
		@Arg('text') text: string,
		@Ctx() { req }: MyContext
	): Promise<Comment> {
		const user = await User.findOne({ id: req.session.userId });

		const quiz = await Quiz.findOne({ id: quizId });

		if (!quiz) {
			throw new Error('Quiz not found');
		}

		const comment = await Comment.create({
			author: user,
			quiz,
			text,
		}).save();

		return comment;
	}
}
