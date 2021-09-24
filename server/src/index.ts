import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";
import connectPgSimple from "connect-pg-simple";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { facebookPassport } from "./resolvers/auth/facebook";
import { googlePassport } from "./resolvers/auth/google";
import {
  createAuthorLoader,
  createBookmarkLoader,
  createLikeLoader,
  createSubscriptionLoader,
  __PROD__,
} from "./utils";
import {
  Bookmark,
  Comment,
  Like,
  Question,
  Quiz,
  Result,
  Score,
  Subscription,
  Tag,
  User,
} from "./entity";
import { AuthResolver } from "./resolvers/auth/auth";
import { CommentResolver } from "./resolvers/comment/comment";
import { QuizResolver } from "./resolvers/quiz/quiz";
import { UserResolver } from "./resolvers/user/user";
import { TagResolver } from "./resolvers/tag/tag";
import path from "path";

const main = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      url: __PROD__
        ? process.env.DATABASE_URL_PROD
        : process.env.DATABASE_URL_DEV,
      synchronize: !__PROD__,
      logging: !__PROD__,
      entities: [
        Bookmark,
        Comment,
        Like,
        Question,
        Quiz,
        Result,
        Score,
        Subscription,
        Tag,
        User,
      ],
      migrations: [path.join(__dirname, "./migration/*")],
    });

    await connection.runMigrations();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          AuthResolver,
          CommentResolver,
          QuizResolver,
          TagResolver,
          UserResolver,
        ],
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
      playground: true,
      introspection: true,
    });

    const app = express();

    const pgSession = connectPgSimple(session);

    const oneWeekInMs = 1000 * 60 * 60 * 24 * 7;

    app.set("trust proxy", 1);

    app.use(
      cors({
        credentials: true,
        origin: __PROD__
          ? process.env.CORS_ORIGIN
          : process.env.CORS_ORIGIN_DEV,
      })
    );

    app.use(
      session({
        name: process.env.SESSION_NAME,
        store: new pgSession({
          conString: __PROD__
            ? process.env.DATABASE_URL_PROD
            : process.env.DATABASE_URL_DEV,
        }),
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: __PROD__,
          maxAge: oneWeekInMs,
          domain: __PROD__ ? ".quizshare.me" : undefined,
        },
      })
    );

    app.use(passport.initialize());

    googlePassport(app);
    facebookPassport(app);

    apolloServer.applyMiddleware({ app, cors: false });

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
      console.log(`Server running at ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main();
