import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { QuizInput } from './createQuiz/CreateQuizInput';

@Resolver(Quiz)
export class CreateQuizResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => Quiz)
	async createQuiz(
		@Arg('data') data: QuizInput,
		@Ctx() { req }: MyContext
	): Promise<Quiz> {
		const newQuiz = await Quiz.create({
			...data,
			author_id: req.session.user_id,
		}).save();

		return newQuiz;
	}
}
