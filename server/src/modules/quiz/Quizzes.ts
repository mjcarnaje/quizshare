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
	UseMiddleware,
} from 'type-graphql';
import { FindManyOptions, LessThan, MoreThan } from 'typeorm';
import { Comment } from '../../entity/Comment';
import { Question } from '../../entity/Question';
import { Quiz } from '../../entity/Quiz';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

@ObjectType()
class PaginatedQuizzes {
	@Field(() => [Quiz])
	quizzes: Quiz[];
	@Field()
	hasMore: boolean;
}
@ObjectType()
class PaginatedMeQuizzes {
	@Field(() => [Quiz])
	meQuizzes: Quiz[];
	@Field()
	meHasMore: boolean;
}
@ObjectType()
class PaginatedComments {
	@Field(() => [Comment])
	comments: Comment[];
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

	@FieldResolver(() => Int)
	questionsCount(@Root() quiz: Quiz) {
		return quiz.questions.length;
	}

	@FieldResolver(() => Int)
	resultsCount(@Root() quiz: Quiz) {
		return quiz.results.length;
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
			quizzes: (quizzes as [Quiz]).slice(0, realLimit),
			hasMore: (quizzes as [Quiz]).length === realLimitPlusOne,
		};
	}

	@UseMiddleware(isAuthenticated)
	@Query(() => PaginatedMeQuizzes)
	async meQuizzes(
		@Arg('limit', () => Int) limit: number,
		@Arg('cursor', () => String, { nullable: true }) cursor: string | null,
		@Ctx() { req }: MyContext
	): Promise<PaginatedMeQuizzes> {
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
				where: {
					author_id: req.session.user_id,
					created_at: LessThan(new Date(parseInt(cursor))),
				},
			};
		} else {
			findOption = {
				relations: ['author', 'questions', 'likes', 'comments'],
				order: {
					created_at: 'DESC',
				},
				take: realLimitPlusOne,
				where: { author_id: req.session.user_id },
			};
		}

		const quizzes = await Quiz.find(findOption);

		return {
			meQuizzes: (quizzes as [Quiz]).slice(0, realLimit),
			meHasMore: (quizzes as [Quiz]).length === realLimitPlusOne,
		};
	}

	@UseMiddleware(isAuthenticated)
	@Query(() => Quiz)
	async quizToUpdate(
		@Arg('quiz_id', () => Int) quiz_id: number,
		@Ctx() { req }: MyContext
	): Promise<Quiz | null> {
		const quiz = await Quiz.findOne(quiz_id, { relations: ['questions'] });
		if (!quiz) {
			return null;
		}
		if (quiz.author_id !== req.session.user_id) {
			return null;
		}
		return quiz;
	}

	@UseMiddleware(isAuthenticated)
	@Query(() => Quiz, { nullable: true })
	async singleQuiz(
		@Arg('quiz_id', () => Int) quiz_id: number
	): Promise<Quiz | null> {
		const quiz = await Quiz.findOne(quiz_id, {
			relations: ['likes', 'comments', 'questions', 'author'],
		});
		if (!quiz) {
			return null;
		}
		return quiz;
	}

	@UseMiddleware(isAuthenticated)
	@Query(() => [Question], { nullable: true })
	async questions(
		@Arg('quiz_id', () => Int) quiz_id: number
	): Promise<Question[] | null> {
		const questions = await Question.find({ where: { quiz_id } });
		if (!questions) {
			return null;
		}
		return questions;
	}

	@UseMiddleware(isAuthenticated)
	@Query(() => PaginatedComments, { nullable: true })
	async comments(
		@Arg('quiz_id', () => Int) quiz_id: number,
		@Arg('limit', () => Int) limit: number,
		@Arg('cursor', () => String, { nullable: true }) cursor: string | null
	): Promise<PaginatedComments | null> {
		const realLimit = Math.min(10, limit);
		const realLimitPlusOne = realLimit + 1;

		let findOption: FindManyOptions;

		if (cursor) {
			findOption = {
				take: realLimitPlusOne,
				where: {
					quiz_id: quiz_id,
					created_at: MoreThan(new Date(parseInt(cursor))),
				},
			};
		} else {
			findOption = {
				where: { quiz_id: quiz_id },
				take: realLimitPlusOne,
			};
		}

		const comments = await Comment.find(findOption);

		if (!comments) {
			return null;
		}

		return {
			comments: (comments as [Comment]).slice(0, realLimit),
			hasMore: (comments as [Comment]).length === realLimitPlusOne,
		};
	}
}
