import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Like } from '../../entity/Like';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

@Resolver()
export class ToggleLikeResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async toggleLike(
		@Arg('quiz_id') quiz_id: number,
		@Ctx() { req }: MyContext
	): Promise<string> {
		const author_id = req.session.user_id;

		const isLike = await Like.findOne({ author_id, quiz_id });

		if (isLike) {
			await Like.remove(isLike);
			return 'UNLIKED QUIZ';
		}

		await Like.create({ author_id, quiz_id }).save();

		return 'LIKED QUIZ';
	}
}
