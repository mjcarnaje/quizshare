import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Comment } from '../../entity/Comment';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

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

		const comment = await Comment.create({
			author: user,
			quizId,
			text,
		}).save();

		return comment;
	}
}
