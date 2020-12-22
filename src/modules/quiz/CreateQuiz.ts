import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { MyContext } from '../../types/MyContext';
import { QuizInput } from './createQuiz/CreateQuizInput';
import { User } from '../../entity/User';
import { isAuthenticated } from '../middleware/isAuthenticated';

@Resolver(Quiz)
export class createQuizResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => Quiz)
	async createQuiz(
		@Arg('data') data: QuizInput,
		@Ctx() { req }: MyContext
	): Promise<Quiz> {
		const user = await User.findOne({ id: req.session.userId });
		const newQuiz = await Quiz.create({
			...data,
			author: user,
		}).save();

		return newQuiz;
	}
}
