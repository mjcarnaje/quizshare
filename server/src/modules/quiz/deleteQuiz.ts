import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Quiz } from '../../entity/Quiz';
import { AuthenticationError } from 'apollo-server-express';

@Resolver()
export class DeleteQuizResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteQuiz(
		@Arg('quiz_id') quiz_id: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		const quiz = await Quiz.findOneOrFail({ id: quiz_id });

		if (!quiz) {
			throw new Error('Quiz not found');
		}

		if (quiz.author_id !== req.session.user_id) {
			throw new AuthenticationError('Action not allowed');
		}

		await quiz.remove();

		return 'DELETED';
	}
}
