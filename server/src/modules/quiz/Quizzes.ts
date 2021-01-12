import {
	Arg,
	Ctx,
	Field,
	FieldResolver,
	Int,
	ObjectType,
	Query,
	Resolver,
	Root,
} from 'type-graphql';
import { FindManyOptions, LessThan } from 'typeorm';
import { Quiz } from '../../entity/Quiz';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { UseMiddleware } from 'type-graphql';

@ObjectType()
class PaginatedQuizzes {
	@Field(() => [Quiz])
	quizzes: Quiz[];
	@Field()
	hasMore: boolean;
}

@Resolver(Quiz)
export class QuizzesResolver {
	@FieldResolver(() => Boolean)
	isLiked(@Root() quiz: Quiz, @Ctx() { req }: MyContext) {
		const isLiked =
			quiz.likes.filter((like) => like.author_id === req.session.user_id)
				.length > 0;
		if (isLiked) {
			return true;
		}
		return false;
	}

	@FieldResolver(() => Int)
	likesCount(@Root() quiz: Quiz) {
		return quiz.likes.length;
	}

	@FieldResolver(() => Int)
	commentsCount(@Root() quiz: Quiz) {
		return quiz.comments.length;
	}

	@UseMiddleware(isAuthenticated)
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
				relations: ['author', 'questions', 'likes', 'comments'],
				order: {
					created_at: 'DESC',
				},
				take: realLimitPlusOne,
				where: { created_at: LessThan(new Date(parseInt(cursor))) },
			};
		} else {
			findOption = {
				relations: ['author', 'questions', 'likes', 'comments'],
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
