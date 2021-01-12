import {
	Arg,
	Ctx,
	Mutation,
	Resolver,
	UseMiddleware,
	Root,
	FieldResolver,
} from 'type-graphql';
import { Comment } from '../../entity/Comment';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { User } from '../../entity/User';

@Resolver(() => Comment)
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
}
