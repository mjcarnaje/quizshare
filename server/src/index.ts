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
import { facebookPassport } from "./resolvers/auth/facebook";
import { googlePassport } from "./resolvers/auth/google";
import {
  createAuthorLoader,
  createBookmarkLoader,
  createLikeLoader,
  createSubscriptionLoader,
  __PROD__,
} from "./utils";

const main = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      url: __PROD__
        ? process.env.DATABASE_URL_PROD
        : process.env.DATABASE_URL_DEV,
      synchronize: !__PROD__,
      logging: !__PROD__,
      entities: [path.join(__dirname, "./entity/*.ts")],
      migrations: [path.join(__dirname, "./migration/*.ts")],
    });

    await connection.runMigrations();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [path.join(__dirname, "./resolvers/*.ts")],
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
          maxAge: 1000 * 60 * 60 * 24 * 7,
          domain: __PROD__ ? ".quizshare.me" : undefined,
          sameSite: "none",
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
