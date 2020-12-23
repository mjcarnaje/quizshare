import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Quiz } from '../../entity/Quiz';
import { AuthenticationError } from 'apollo-server-express';

@Resolver()
export class deleteQuizResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteQuiz(
		@Arg('quizId') quizId: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		const quiz = await Quiz.findOneOrFail({ id: quizId });

		if (!quiz) {
			throw new Error('Quiz not found');
		}

		if (quiz.authorId !== req.session.userId) {
			throw new AuthenticationError('Action not allowed');
		}

		await quiz.remove();

		return 'DELETED';
	}
}
