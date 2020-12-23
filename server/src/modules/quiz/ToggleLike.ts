import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Like } from '../../entity/Like';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

@Resolver()
export class toggleLikeResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async toggleLike(
		@Arg('quizId') quizId: number,
		@Ctx() { req }: MyContext
	): Promise<string> {
		const authorId = req.session.userId;

		const isLike = await Like.findOne({ authorId, quizId });

		if (isLike) {
			await Like.remove(isLike);
			return 'UNLIKED QUIZ';
		}

		await Like.create({ authorId, quizId }).save();

		return 'LIKED QUIZ';
	}
}
