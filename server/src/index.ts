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
import { facebookAuth } from "./resolvers/auth/facebook";
import { googleAuth } from "./resolvers/auth/google";

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
      entities: [User],
    });

    const apolloServer = await new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver],
        validate: false,
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

    passport.use(googleAuth());

    passport.use(facebookAuth());

    app.use(passport.initialize());

    app.get(
      "/auth/google",
      passport.authenticate("google", {
        scope: ["profile", "email"],
      })
    );

    app.get(
      "/auth/google/callback",
      passport.authenticate("google", {
        session: false,
        scope: ["profile", "email"],
      }),
      (req, res) => {
        (req.session as any).userId = (req.user as any).id;

        // redirect to the front-end

        res.redirect("http://localhost:3000/");
      }
    );

    app.get("/auth/facebook", passport.authenticate("facebook"));

    app.get(
      "/auth/facebook/callback",
      passport.authenticate("facebook", {
        session: false,
      }),
      (req, res) => {
        (req.session as any).userId = (req.user as any).id;

        // redirect to the front-end

        res.redirect("http://localhost:3000/");
      }
    );

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
