import { Arg, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { QuizInput } from './createQuiz/CreateQuizInput';
import { QuestionInput } from './createQuiz/QuestionInput';

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

		const hashKey: Record<number, QuestionInput> = {};

		inputs.questions.forEach((q: QuestionInput) => {
			hashKey[q.id!] = q;
		});

		quiz.questions.map((q: any) => {
			const newQues: any = hashKey[q.id]; // to update / replace through id in hashKey
			if (newQues) {
				for (const key in newQues) {
					q[key] = newQues[key]; // replace with the same key and merge the rest
				}
			}
			return q;
		});

		await quiz.save();

		return quiz;
	}
}
