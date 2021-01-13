import { Arg, Mutation, Resolver, UseMiddleware, Ctx } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { QuizInput } from './createQuiz/CreateQuizInput';
import { QuestionInput } from './createQuiz/QuestionInput';
import { MyContext } from '../../types/MyContext';

@Resolver(Quiz)
export class UpdateQuiz {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => Quiz)
	async updateQuiz(
		@Arg('quiz_id') quiz_id: number,
		@Arg('inputs') inputs: QuizInput,
		@Ctx() { req }: MyContext
	): Promise<Quiz | null> {
		const quiz = await Quiz.findOneOrFail(quiz_id, {
			relations: ['questions'],
		});

		if (quiz.author_id !== req.session.user_id) {
			return null;
		}

		quiz.title = inputs.title || quiz.title;
		quiz.description = inputs.description || quiz.description;
		quiz.quiz_photo = inputs?.quiz_photo || undefined;

		const hashKey: Record<number, QuestionInput> = {};

		inputs.questions.forEach((q: QuestionInput) => {
			hashKey[parseInt(q.question_id!)] = q;
		});

		quiz.questions.map((q: any) => {
			const newQues: any = hashKey[parseInt(q.question_id!)]; // to update / replace through id in hashKey
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
