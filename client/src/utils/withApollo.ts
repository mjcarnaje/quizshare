import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import { createWithApollo } from './createWithApollo';
import { isServer } from './isServer';

const createClient = (ctx: NextPageContext) =>
	new ApolloClient({
		uri: process.env.NEXT_PUBLIC_API_URL as string,
		credentials: 'include',
		headers: {
			cookie: (isServer() ? ctx.req?.headers.cookie : undefined) || '',
		},
		cache: new InMemoryCache(),
	});

export const withApollo = createWithApollo(createClient);
