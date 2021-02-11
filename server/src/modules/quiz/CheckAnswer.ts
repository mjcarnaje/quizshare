import {
	Arg,
	Ctx,
	Field,
	FieldResolver,
	InputType,
	Int,
	Mutation,
	ObjectType,
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
	@Field(() => Int)
	quiz_id: number;

	@Field(() => [UsersAnswer])
	users_answer: UsersAnswer[];
}

@ObjectType()
class ResultProps {
	@Field()
	result_id: string;
	@Field()
	title: string;
	@Field({ nullable: true })
	result_photo?: string;
	@Field()
	minimum_percentage: number;
	@Field()
	description: string;
}
@ObjectType()
class CheckAnswerResult {
	@Field(() => Score)
	score: Score;

	@Field(() => Int)
	percentage: number;

	@Field(() => ResultProps, { nullable: true })
	result?: {
		result_id: string;
		title: string;
		result_photo?: string;
		minimum_percentage: number;
		description: string;
	};
}

@Resolver(Score)
export class CheckAnswerResolver {
	@FieldResolver(() => User)
	async taker(@Root() scores: Score) {
		const taker = await User.findOne({ where: { id: scores.taker_id } });
		return taker;
	}

	@Mutation(() => CheckAnswerResult)
	async checkAnswer(
		@Arg('data')
		{ quiz_id, users_answer }: ChecksAnswerInput,
		@Ctx() { req }: MyContext
	): Promise<CheckAnswerResult> {
		let computed_score: number = 0;

		const quiz = await Quiz.findOneOrFail(quiz_id, {
			relations: ['questions'],
		});

		for (const usersans of users_answer) {
			for (const correctans of quiz.questions) {
				if (usersans.choice_id === correctans.answer) {
					computed_score += 1;
				}
			}
		}

		const score = await Score.create({
			quiz_id,
			score: computed_score,
			taker_id: req.session.user_id,
			current_total_questions: quiz.questions.length,
		}).save();

		let percentage = Math.round(
			(score.score / score.current_total_questions) * 100
		);

		const reversedOrder = [...quiz.results].reverse();

		let result = reversedOrder.find(
			(res) => res.minimum_percentage < percentage
		);

		return { score, percentage, result };
	}
}
