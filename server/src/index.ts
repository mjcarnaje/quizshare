import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import passport from "passport";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { facebookPassport } from "./resolvers/auth/facebook";
import { googlePassport } from "./resolvers/auth/google";
import { Question, Quiz, User } from "./entity";

require("dotenv").config();

const main = async () => {
  try {
    await createConnection({
      name: "default",
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      synchronize: true,
      logging: true,
      entities: ["src/entity/*.*"],
    });

    await Question.delete({});
    await Quiz.delete({});
    await User.delete({});

    const apolloServer = await new ApolloServer({
      schema: await buildSchema({
        resolvers: [__dirname + "/resolvers/**/*.ts"],
      }),
      context: ({ req, res }) => ({ req, res }),
    });

    const app = express();

    const RedisStore = connectRedis(session);

    const redis = new Redis();

    app.use(
      session({
        name: process.env.SESSION_NAME,
        store: new RedisStore({
          client: redis,
        }),
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 1000 * 60 * 60 * 24, // one day
        },
      })
    );

    app.use(
      cors({
        credentials: true,
        origin: process.env.CORS_ORIGIN,
      })
    );

    app.use(passport.initialize());

    googlePassport(app);
    facebookPassport(app);

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(process.env.PORT, () =>
      console.log(
        `Server running on http://localhost:${process.env.PORT}/graphql 🚀`
      )
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main();
