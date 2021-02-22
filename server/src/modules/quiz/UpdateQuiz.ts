import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { QuizInput } from './createQuiz/CreateQuizInput';
@Resolver(Quiz)
export class UpdateQuiz {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => Quiz)
	async updateQuiz(
		@Arg('quiz_id') quiz_id: number,
		@Arg('inputs')
		{ title, description, quiz_photo, questions, results, tags }: QuizInput,
		@Ctx() { req }: MyContext
	): Promise<Quiz | null> {
		const quiz = await Quiz.findOneOrFail(quiz_id, {
			relations: ['questions'],
		});

		if (quiz.author_id !== req.session.user_id) {
			return null;
		}

		quiz.title = title ?? quiz.title;
		quiz.description = description ?? quiz.description;
		quiz.results = results ?? quiz.results;
		quiz.quiz_photo = quiz_photo;

		quiz.tags = tags?.map((item, i) =>
			Object.assign({}, item, quiz!.tags?.[i])
		);

		quiz.questions = questions.map((item, i) =>
			Object.assign({}, item, quiz.questions[i])
		);

		await quiz.save();

		return quiz;
	}
}
