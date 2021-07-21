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
import { createAuthorLoader } from "./utils/createAuthorLoader";
import { createBookmarkLoader } from "./utils/createBookmarkLoader";
import { createLikeLoader } from "./utils/createLikeLoader";
import { createSubscriptionLoader } from "./utils/createSubscriptionLoader";
import {
  Question,
  Quiz,
  User,
  Like,
  Bookmark,
  Tag,
  Result,
  Comment,
  Subscription,
} from "./entity";

require("dotenv").config();

async function dropDatabase() {
  return;

  await Quiz.delete({});
  await Question.delete({});
  await User.delete({});
  await Like.delete({});
  await Bookmark.delete({});
  await Tag.delete({});
  await Result.delete({});
  await Comment.delete({});
  await Subscription.delete({});
}

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

    dropDatabase();

    const apolloServer = await new ApolloServer({
      schema: await buildSchema({
        resolvers: [__dirname + "/resolvers/**/*.ts"],
      }),
      context: ({ req, res }) => {
        return {
          likeLoader: createLikeLoader(),
          bookmarkLoader: createBookmarkLoader(),
          authorLoader: createAuthorLoader(),
          subscriptionLoader: createSubscriptionLoader(),
          req,
          res,
        };
      },
    });

    const app = express();

    const RedisStore = connectRedis(session);

    const redis = new Redis();

    const oneWeekInMs = 1000 * 60 * 60 * 24 * 7;

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
          maxAge: oneWeekInMs,
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
