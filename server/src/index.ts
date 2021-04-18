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
const GoogleStrategy = require("passport-google-oauth20").Strategy;

require("dotenv").config();

const main = async () => {
  try {
    const connection = await createConnection({
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
          maxAge: 1000 * 60 * 60 * 24 * 365, // one year
        },
      })
    );

    app.use(
      cors({
        credentials: true,
        origin: process.env.CORS_ORIGIN,
      })
    );

    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SERCRET,
          callbackURL: "http://localhost:4000/auth/google/callback",
        },
        // @ts-ignore
        async (_, __, profile, done) => {
          const { id, displayName, name, emails, photos } = profile;

          const existedUser = await connection
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.googleId = :id", { id });

          let email: string | null = null;

          if (emails) {
            email = emails[0].value;
            existedUser.orWhere("user.email = :email", { email });
          }

          let user = await existedUser.getOne();

          if (!user) {
            user = await User.create({
              googleId: id,
              username: displayName,
              firstName: name.givenName,
              lastName: name.familyName,
              email: emails[0].value,
              avatar: photos[0].value,
            }).save();
          } else if (!user.googleId) {
            user.googleId = id;
            await user.save();
          } else {
            // we have google id
            // login
          }

          return done(null, { id: user.id });
        }
      )
    );

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
