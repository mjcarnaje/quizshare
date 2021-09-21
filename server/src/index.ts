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

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      url: __PROD__
        ? process.env.DATABASE_URL_PROD
        : process.env.DATABASE_URL_DEV,
      ssl: __PROD__ ? { rejectUnauthorized: false } : false,
      synchronize: true,
      logging: __PROD__ ? false : true,
      entities: [__dirname + "/entity/**/*.ts"],
    });

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

    const pgSession = connectPgSimple(session);

    const oneWeekInMs = 1000 * 60 * 60 * 24 * 7;

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
