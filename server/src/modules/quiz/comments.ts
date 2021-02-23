import {
	Arg,
	Ctx,
	FieldResolver,
	Int,
	Mutation,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import { Comment } from '../../entity/Comment';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { AuthenticationError } from 'apollo-server-express';
import { FindManyOptions, LessThan } from 'typeorm';
import { ObjectType, Field, Query } from 'type-graphql';

@ObjectType()
class PaginatedComments {
	@Field(() => [Comment])
	comments: Comment[];
	@Field()
	has_more: boolean;
}

@Resolver(Comment)
export class CreateCommentResolver {
	@FieldResolver(() => User)
	async author(@Root() comment: Comment) {
		const user = await User.findOne({ where: { id: comment.author_id } });
		return user;
	}

	@UseMiddleware(isAuthenticated)
	@Mutation(() => Comment)
	async createComment(
		@Arg('quiz_id') quiz_id: number,
		@Arg('text') text: string,
		@Ctx() { req }: MyContext
	): Promise<Comment> {
		const comment = await Comment.create({
			author_id: req.session.user_id,
			quiz_id,
			text,
		}).save();

		return comment;
	}

	@UseMiddleware(isAuthenticated)
	@Mutation(() => String)
	async deleteComment(
		@Arg('quiz_id', () => Int) quiz_id: number,
		@Arg('comment_id', () => Int) comment_id: number,
		@Ctx() { req }: MyContext
	): Promise<String> {
		const comment = await Comment.findOneOrFail({
			id: comment_id,
			quiz_id,
		});

		if (comment.author_id !== req.session.user_id) {
			throw new AuthenticationError('Action not allowed');
		}

		await comment.remove();

		return 'DELETED COMMENT';
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
			has_more: (comments as [Comment]).length === realLimitPlusOne,
		};
	}
}
