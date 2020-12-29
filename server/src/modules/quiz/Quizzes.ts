import { Quiz } from '../../entity/Quiz';
import { Arg, Int, Query, Resolver } from 'type-graphql';

// @ObjectType()
// class PaginatedQuizzes {
// 	@Field(() => [Quiz])
// 	posts: Quiz[];
// 	@Field()
// 	hasMore: boolean;
// }

@Resolver()
export class PaginatedQuizzesResolver {
	@Query(() => [Quiz])
	async quizzes(
		@Arg('limit', () => Int) limit: number
		// @Arg('cursor', () => String, { nullable: true }) cursor: string | null
	): Promise<Quiz[]> {
		const realLimit = Math.min(10, limit);
		// const realLimitPlusOne = realLimit + 1;

		const quizzes = await Quiz.find({
			relations: ['author', 'questions'],
			order: {
				created_at: 'DESC',
			},
			take: realLimit,
		});

		return quizzes;
	}
}
