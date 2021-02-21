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
import { FindManyOptions, LessThan, Raw } from 'typeorm';
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
	is_liked(@Root() quiz: Quiz, @Ctx() { req }: MyContext) {
		const is_liked =
			quiz.likes.filter((like) => like.author_id === req.session.user_id)
				.length > 0;
		if (is_liked) {
			return true;
		}
		return false;
	}

	@FieldResolver(() => Boolean)
	is_taken(@Root() quiz: Quiz, @Ctx() { req }: MyContext) {
		const is_taken =
			quiz.scores.filter((taker) => taker.taker_id === req.session.user_id)
				.length > 0;
		if (is_taken) {
			return true;
		}
		return false;
	}

	@FieldResolver(() => Int)
	likes_count(@Root() quiz: Quiz) {
		return quiz.likes.length;
	}

	@FieldResolver(() => Int)
	comments_count(@Root() quiz: Quiz) {
		return quiz.comments.length;
	}

	@FieldResolver(() => Int)
	questionsCount(@Root() quiz: Quiz) {
		return quiz.questions.length;
	}

	@FieldResolver(() => Int)
	scores_count(@Root() quiz: Quiz) {
		return quiz.scores.length;
	}

	@UseMiddleware(isAuthenticated)
	@Query(() => PaginatedQuizzes)
	async quizzes(
		@Arg('limit', () => Int) limit: number,
		@Arg('cursor', () => String, { nullable: true }) cursor: string | null,
		@Arg('query', () => String, { nullable: true }) query: string | null
	): Promise<PaginatedQuizzes> {
		const realLimit = Math.min(20, limit);
		const realLimitPlusOne = realLimit + 1;

		let findOptionsInitial: FindManyOptions = {
			relations: [
				'author',
				'author.profile',
				'questions',
				'likes',
				'comments',
				'tags',
				'scores',
			],
			order: {
				created_at: 'DESC',
			},
			take: realLimitPlusOne,
		};

		let findOptions: FindManyOptions;

		if (cursor && query) {
			const formattedQuery = query.trim().replace(/ /g, ' <-> ');

			findOptions = {
				...findOptionsInitial,
				where: [
					{
						description: Raw(
							(description) =>
								`to_tsvector('simple', ${description}) @@ to_tsquery('simple', :query)`,
							{
								query: formattedQuery,
							}
						),
						created_at: LessThan(new Date(parseInt(cursor))),
					},
					{
						title: Raw(
							(title) =>
								`to_tsvector('simple', ${title}) @@ to_tsquery('simple', :query)`,
							{
								query: formattedQuery,
							}
						),
						created_at: LessThan(new Date(parseInt(cursor))),
					},
				],
			};
		} else if (cursor) {
			findOptions = {
				...findOptionsInitial,
				where: {
					created_at: LessThan(new Date(parseInt(cursor))),
				},
			};
		} else if (query) {
			const formattedQuery = query.trim().replace(/ /g, ' <-> ');

			findOptions = {
				...findOptionsInitial,
				where: [
					{
						description: Raw(
							(description) =>
								`to_tsvector('simple', ${description}) @@ to_tsquery('simple', :query)`,
							{
								query: formattedQuery,
							}
						),
					},
					{
						title: Raw(
							(title) =>
								`to_tsvector('simple', ${title}) @@ to_tsquery('simple', :query)`,
							{
								query: formattedQuery,
							}
						),
					},
				],
			};
		} else {
			findOptions = findOptionsInitial;
		}

		const quizzes = await Quiz.find(findOptions as FindManyOptions);

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
		const realLimit = Math.min(50, limit);
		const realLimitPlusOne = realLimit + 1;

		let findOptions: FindManyOptions;

		if (cursor) {
			findOptions = {
				relations: ['author', 'questions', 'likes', 'comments', 'scores'],
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
			findOptions = {
				relations: ['author', 'questions', 'likes', 'comments', 'scores'],
				order: {
					created_at: 'DESC',
				},
				take: realLimitPlusOne,
				where: { author_id: req.session.user_id },
			};
		}

		const quizzes = await Quiz.find(findOptions);

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
			relations: ['likes', 'comments', 'questions', 'author', 'scores'],
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

		let findOptions: FindManyOptions;

		if (cursor) {
			findOptions = {
				take: realLimitPlusOne,
				where: {
					quiz_id: quiz_id,
					created_at: LessThan(new Date(parseInt(cursor))),
				},
				order: {
					created_at: 'DESC',
				},
			};
		} else {
			findOptions = {
				where: { quiz_id: quiz_id },
				take: realLimitPlusOne,
				order: {
					created_at: 'DESC',
				},
			};
		}

		const comments = await Comment.find(findOptions);

		if (!comments) {
			return null;
		}

		return {
			comments: (comments as [Comment]).slice(0, realLimit),
			hasMore: (comments as [Comment]).length === realLimitPlusOne,
		};
	}
}
