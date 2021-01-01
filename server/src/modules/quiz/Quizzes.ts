import { Arg, Field, Int, ObjectType, Query, Resolver } from 'type-graphql';
import { FindManyOptions, LessThan } from 'typeorm';
import { Quiz } from '../../entity/Quiz';

@ObjectType()
class PaginatedQuizzes {
	@Field(() => [Quiz])
	quizzes: Quiz[];
	@Field()
	hasMore: boolean;
}

@Resolver()
export class QuizzesResolver {
	@Query(() => PaginatedQuizzes)
	async quizzes(
		@Arg('limit', () => Int) limit: number,
		@Arg('cursor', () => String, { nullable: true }) cursor: string | null
	): Promise<PaginatedQuizzes> {
		const realLimit = Math.min(10, limit);
		const realLimitPlusOne = realLimit + 1;

		let findOption: FindManyOptions;

		if (cursor) {
			findOption = {
				relations: ['author', 'questions', 'likes'],
				order: {
					created_at: 'DESC',
				},
				take: realLimitPlusOne,
				where: { created_at: LessThan(new Date(parseInt(cursor))) },
			};
		} else {
			findOption = {
				relations: ['author', 'questions', 'likes'],
				order: {
					created_at: 'DESC',
				},
				take: realLimitPlusOne,
			};
		}

		const quizzes = await Quiz.find(findOption);

		return {
			quizzes: quizzes.slice(0, realLimit),
			hasMore: quizzes.length === realLimitPlusOne,
		};
	}
}
