import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
// session related
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { redis } from './redis';

require('dotenv').config();

const main = async () => {
	await createConnection();

	const schema = await buildSchema({
		resolvers: [__dirname + '/modules/**/*.ts'],
	});

	const apolloServer = new ApolloServer({
		schema,
		context: ({ req, res }: any) => ({ req, res }),
	});

	const app = express();

	const RedisStore = connectRedis(session);

	app.use(
		cors({
			credentials: true,
			origin: 'https://localhost:3000',
		})
	);

	app.use(
		session({
			store: new RedisStore({
				client: redis as any,
			}),
			name: process.env.SESSION_NAME as string,
			secret: process.env.SESSION_SECRET as string,
			resave: false,
			saveUninitialized: false,
			cookie: {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				maxAge: 1000 * 60 * 60 * 24 * 365,
			},
		})
	);

	apolloServer.applyMiddleware({ app });

	app.listen(process.env.PORT || 4000, () =>
		console.log(`Server running on http://localhost:4000/graphql 🚀 `)
	);
};

main();
