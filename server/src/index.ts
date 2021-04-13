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
import { User } from "./entity/User";
import { UserResolver } from "./resolvers/auth/auth";
import GoogleAuth from "./resolvers/auth/passport";

require("dotenv").config();

const main = async () => {
  try {
    await createConnection({
      name: "default",
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "admin",
      database: process.env.DATABASE,
      synchronize: true,
      logging: true,
      entities: [User],
    });

    GoogleAuth();

    const app = express();

    const RedisStore = connectRedis(session);

    const redis = new Redis();

    app.use(
      cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      })
    );

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
          maxAge: 1000 * 60 * 60 * 24 * 365, // one year
        },
      })
    );

    app.use(passport.initialize());

    app.use(passport.session());

    app.get(
      "/google",
      passport.authenticate("google", {
        scope: ["profile", "email"],
      })
    );

    app.get(
      "/google/callback",
      passport.authenticate("google", {
        successRedirect: "http://localhost:4000/graphql",
        failureRedirect: "/failed",
      })
    );

    const apolloServer = await new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver],
        validate: false,
      }),
      context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(process.env.PORT, () =>
      console.log(
        `Server running on http://localhost:${process.env.PORT}/graphql 🚀`
      )
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};

main();
