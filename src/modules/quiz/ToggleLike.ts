import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Like } from '../../entity/Like';
import { User } from '../../entity/User';

@Resolver()
export class toggleLikeResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async toggleLike(
		@Arg('quizId') quizId: number,
		@Ctx() { req }: MyContext
	): Promise<string> {
		const user = await User.findOneOrFail({ id: req.session.userId });

		const quiz = await Quiz.findOneOrFail({ id: quizId });

		const isLike = await Like.findOne({ author: user, quiz });

		if (isLike) {
			await Like.remove(isLike);
			return 'UNLIKED QUIZ';
		}

		await Like.create({ author: user, quiz }).save();

		return 'LIKED QUIZ';
	}
}
