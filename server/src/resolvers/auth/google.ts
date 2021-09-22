import * as core from "express-serve-static-core";
import passport from "passport";
import { getConnection } from "typeorm";
import { User } from "../../entity";
import { Request } from "../../types";
import { getRole, __PROD__ } from "../../utils";
import { Strategy } from "passport-google-oauth20";

export const googlePassport = (app: core.Express) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SERCRET as string,
        callbackURL: __PROD__
          ? (process.env.GOOGLE_CALLBACK as string)
          : "https://api-quizshare.herokuapp.com/auth/google/callback",
      },
      async (_accessToken, _refreshToken, profile, done) => {
        const { id, displayName, name, emails, photos } = profile;

        const existedUser = await getConnection()
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
          if (!name || !emails) {
            throw new Error("There is an error");
          }
          user = await User.create({
            googleId: id,
            username: displayName,
            firstName: name.givenName,
            lastName: name.familyName,
            email: emails[0].value,
            avatar: photos?.[0].value,
            role: getRole(emails[0].value),
          }).save();
        } else if (!user.googleId) {
          user.googleId = id;
          await user.save();
        } else {
          // we have google id
          // login
        }

        return done(null, user);
      }
    )
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    (req: Request, res: any) => {
      const user = req.user as User;

      req.session.userId = user.id;

      res.redirect("http://localhost:3000/");
    }
  );
};
