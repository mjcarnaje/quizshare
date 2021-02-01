import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import {
	PaginatedComments,
	PaginatedMeQuizzes,
	PaginatedQuizzes,
} from '../generated/graphql';
import { createWithApollo } from './createWithApollo';
import { isServer } from './isServer';
import { QuizzesResponseFragment } from '../generated/graphql';
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common';

function offsetFromCursor(
	items: QuizzesResponseFragment[],
	cursor: string,
	readField: ReadFieldFunction
) {
	for (let i = items.length - 1; i >= 0; --i) {
		const item = items[i];

		if (readField('id', item) === cursor) {
			return i + 1;
		}
	}
	return -1;
}

const createClient = (ctx: NextPageContext) =>
	new ApolloClient({
		uri: process.env.NEXT_PUBLIC_API_URL as string,
		credentials: 'include',
		headers: {
			cookie: (isServer() ? ctx?.req?.headers.cookie : undefined) || '',
		},
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						quizzes: {
							keyArgs: ['query'],
							merge(
								existing: PaginatedQuizzes | undefined,
								incoming: PaginatedQuizzes,
								{ args, readField }
							): PaginatedQuizzes {
								const merged = existing?.quizzes
									? existing.quizzes.slice(0)
									: [];
								let offset = offsetFromCursor(merged, args?.cursor, readField);

								if (offset < 0) offset = merged.length;

								for (let i = 0; i < incoming.quizzes.length; ++i) {
									merged[offset + i] = incoming.quizzes[i];
								}
								return {
									...incoming,
									quizzes: merged,
								};
							},
						},
						meQuizzes: {
							keyArgs: [],
							merge(
								existing: PaginatedMeQuizzes | undefined,
								incoming: PaginatedMeQuizzes
							): PaginatedMeQuizzes {
								return {
									...incoming,
									meQuizzes: [
										...(existing?.meQuizzes || []),
										...incoming.meQuizzes,
									],
								};
							},
						},
						comments: {
							keyArgs: ['quiz_id'],
							merge(
								existing: PaginatedComments | undefined,
								incoming: PaginatedComments
							): PaginatedComments {
								return {
									...incoming,
									comments: [
										...(existing?.comments ?? []),
										...incoming.comments,
									],
								};
							},
						},
					},
				},
			},
		}),
		connectToDevTools: true,
	});

export const withApollo = createWithApollo(createClient);
