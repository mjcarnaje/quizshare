import { ApolloServer } from "apollo-server-express";
import connectPgSimple from "connect-pg-simple";
import cors from "cors";
import "dotenv/config";
import express from "express";
import session from "express-session";
import passport from "passport";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import {
  Bookmark,
  Comment,
  Question,
  Quiz,
  Like,
  Result,
  Score,
  Tag,
  User,
  Follow,
} from "./entity";
import { AuthResolver } from "./resolvers/auth/auth";
import { facebookPassport } from "./resolvers/auth/facebook";
import { googlePassport } from "./resolvers/auth/google";
import { CommentResolver } from "./resolvers/comment/comment";
import { QuizResolver } from "./resolvers/quiz/quiz";
import { TagResolver } from "./resolvers/tag/tag";
import { UserResolver } from "./resolvers/user/user";
import {
  createAuthorLoader,
  createBookmarkLoader,
  createLikeLoader,
  createFollowLoader,
  __PROD__,
} from "./utils";

const main = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      url: __PROD__
        ? process.env.DATABASE_URL_PROD
        : process.env.DATABASE_URL_DEV,
      synchronize: false,
      logging: !__PROD__,
      entities: [
        Bookmark,
        Comment,
        Like,
        Question,
        Quiz,
        Result,
        Score,
        Follow,
        Tag,
        User,
      ],
      dropSchema: false,
      migrations: [path.join(__dirname, "./migration/*.ts")],
    });

    await connection.runMigrations();

    const app = express();

    app.set("trust proxy", 1);

    const pgSession = connectPgSimple(session);

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
          maxAge: 1000 * 60 * 60 * 24 * 7,
          domain: __PROD__ ? ".quizshare.me" : undefined,
          sameSite: "none",
        },
      })
    );

    app.use(passport.initialize());

    googlePassport(app);
    facebookPassport(app);

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          AuthResolver,
          CommentResolver,
          QuizResolver,
          TagResolver,
          UserResolver,
        ],
        dateScalarMode: "timestamp",
      }),
      context: ({ req, res }) => {
        return {
          likeLoader: createLikeLoader(),
          bookmarkLoader: createBookmarkLoader(),
          authorLoader: createAuthorLoader(),
          subscriptionLoader: createFollowLoader(),
          req,
          res,
        };
      },
      playground: true,
      introspection: true,
    });

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
