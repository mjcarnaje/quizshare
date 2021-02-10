import {
	Arg,
	Ctx,
	Field,
	FieldResolver,
	InputType,
	Mutation,
	Resolver,
	Root,
} from 'type-graphql';
import { Quiz } from '../../entity/Quiz';
import { Score } from '../../entity/Score';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';

@InputType()
export class UsersAnswer {
	@Field()
	question_id: string;

	@Field()
	choice_id: string;
}

@InputType()
export class ChecksAnswerInput {
	@Field()
	quiz_id: number;

	@Field(() => [UsersAnswer])
	users_answer: UsersAnswer[];
}

@Resolver(Score)
export class CheckAnswerResolver {
	@FieldResolver(() => User)
	async taker(@Root() scores: Score) {
		const taker = await User.findOne({ where: { id: scores.taker_id } });
		return taker;
	}

	@Mutation(() => Score, { nullable: true })
	async checkAnswer(
		@Arg('data')
		{ quiz_id, users_answer }: ChecksAnswerInput,
		@Ctx() { req }: MyContext
	): Promise<Score | null> {
		let score: number = 0;

		const quiz = await Quiz.findOne(quiz_id, { relations: ['questions'] });

		if (!quiz) {
			return null;
		}

		for (const usersans of users_answer) {
			for (const correctans of quiz.questions) {
				if (usersans.choice_id === correctans.answer) {
					score += 1;
				}
			}
		}

		const result = await Score.create({
			quiz_id,
			score,
			taker_id: req.session.user_id,
			current_total_questions: quiz.questions.length,
		}).save();

		return result;
	}
}
