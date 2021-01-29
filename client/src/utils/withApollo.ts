import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import {
	PaginatedComments,
	PaginatedMeQuizzes,
	PaginatedQuizzes,
} from '../generated/graphql';
import { createWithApollo } from './createWithApollo';
import { isServer } from './isServer';

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
							keyArgs: [],
							merge(
								existing: PaginatedQuizzes | undefined,
								incoming: PaginatedQuizzes
							): PaginatedQuizzes {
								return {
									...incoming,
									quizzes: [...(existing?.quizzes || []), ...incoming.quizzes],
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
