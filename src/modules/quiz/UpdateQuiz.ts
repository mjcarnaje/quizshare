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
		@Arg('forUpdateInputs') forUpdateInputs: QuizInput
	): Promise<Quiz> {
		const quiz = await Quiz.findOneOrFail(quizId, { relations: ['questions'] });

		quiz.title = forUpdateInputs.title || quiz.title;
		quiz.description = forUpdateInputs.description || quiz.description;
		quiz.quizPhoto = forUpdateInputs?.quizPhoto || quiz.quizPhoto;

		const newQuestions: any = {};

		forUpdateInputs.questions.forEach(
			(question) =>
				(newQuestions[question.id ? question.id : 'unknown'] = question)
		);

		const updatedQuestions = quiz.questions.map((q: any) => {
			const newQues = newQuestions[q.id];
			console.log(newQues);
			console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
			if (newQues) {
				for (const key in newQues) {
					q[key] = newQues[key];
				}
			}

			return q;
		});

		console.log(forUpdateInputs.questions);
		console.log('=============================');
		console.log(updatedQuestions);

		await quiz.save();

		return quiz;
	}
}
