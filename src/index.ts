import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

require('dotenv').config();

const main = async () => {
	await createConnection();

	const schema = await buildSchema({
		resolvers: [__dirname + '/modules/**/*.ts'],
	});

	const apolloServer = new ApolloServer({ schema });

	const app = express();

	apolloServer.applyMiddleware({ app });

	app.listen(process.env.PORT || 4000, () =>
		console.log(`Server running on http://localhost:4000/graphql 🚀 `)
	);
};

main();
