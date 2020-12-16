import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';

require('dotenv').config();

const main = async () => {
	@Resolver()
	class HelloResover {
		@Query(() => String)
		async helloWord() {
			return 'Hello world';
		}
	}

	const schema = await buildSchema({
		resolvers: [HelloResover],
	});

	const apolloServer = new ApolloServer({ schema });

	const app = express();

	apolloServer.applyMiddleware({ app });

	app.listen(process.env.PORT || 4000, () =>
		console.log(`Server running on http://localhost:4000/graphql 🚀 `)
	);
};

main();
