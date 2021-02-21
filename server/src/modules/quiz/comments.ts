import {
	Arg,
	Ctx,
	FieldResolver,
	Int,
	Mutation,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import { Comment } from '../../entity/Comment';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { AuthenticationError } from 'apollo-server-express';

@Resolver(Comment)
export class CreateCommentResolver {
	@FieldResolver(() => User)
	async author(@Root() comment: Comment) {
		const user = await User.findOne({ where: { id: comment.author_id } });
		return user;
	}

	@UseMiddleware(isAuthenticated)
	@Mutation(() => Comment)
	async createComment(
		@Arg('quiz_id') quiz_id: number,
		@Arg('text') text: string,
		@Ctx() { req }: MyContext
	): Promise<Comment> {
		const comment = await Comment.create({
			author_id: req.session.user_id,
			quiz_id,
			text,
		}).save();

		return comment;
	}

	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteComment(
		@Arg('quiz_id', () => Int) quiz_id: number,
		@Arg('comment_id', () => Int) comment_id: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		const comment = await Comment.findOneOrFail({
			id: comment_id,
			quiz_id,
		});

		if (comment.author_id !== req.session.user_id) {
			throw new AuthenticationError('Action not allowed');
		}

		await comment.remove();

		return 'DELETED COMMENT';
	}
}
