import { Arg, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { QuizInput } from './createQuiz/CreateQuizInput';

@Resolver(Quiz)
export class createQuizResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => Quiz)
	async updateQuiz(
		@Arg('quizId') quizId: number,
		@Arg('inputs') inputs: QuizInput
	): Promise<Quiz> {
		const quiz = await Quiz.findOneOrFail(quizId, { relations: ['questions'] });

		quiz.title = inputs.title || quiz.title;
		quiz.description = inputs.description || quiz.description;
		quiz.quizPhoto = inputs?.quizPhoto || quiz.quizPhoto;

		const newQuestions: any = {};

		inputs.questions.forEach(
			(question) =>
				(newQuestions[question.id ? question.id : 'unknown'] = question)
		);

		quiz.questions.map((q: any) => {
			const newQues = newQuestions[q.id];
			if (newQues) {
				for (const key in newQues) {
					q[key] = newQues[key];
				}
			}
			return q;
		});

		await quiz.save();

		return quiz;
	}
}
