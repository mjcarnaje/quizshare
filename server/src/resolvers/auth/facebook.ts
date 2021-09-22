import * as core from "express-serve-static-core";
import passport from "passport";
import { getConnection } from "typeorm";
import { User } from "../../entity";
import { Request } from "../../types";
import { getRole, __PROD__ } from "../../utils";
import { Strategy } from "passport-facebook";

export const facebookPassport = (app: core.Express) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.FACEBOOK_APP_ID as string,
        clientSecret: process.env.FACEBOOK_APP_SECRET as string,
        callbackURL: __PROD__
          ? (process.env.FACEBOOK_CALLBACK as string)
          : "http://localhost:4000/auth/facebook/callback",
        profileFields: ["id", "displayName", "name", "photos", "email"],
      },
      async (_accessToken, _refreshToken, profile, done) => {
        const { id, displayName, name, emails, photos } = profile;

        console.log(profile);

        const existedUser = await getConnection()
          .getRepository(User)
          .createQueryBuilder("user")
          .where("user.facebookId = :id", { id });

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
            facebookId: id,
            username: displayName,
            firstName: name.givenName,
            lastName: name.familyName,
            email: emails[0].value,
            avatar: photos?.[0].value,
            role: getRole(emails[0].value),
          }).save();
        } else if (!user.facebookId) {
          user.facebookId = id;
          await user.save();
        }

        return done(null, user);
      }
    )
  );

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: "email" })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { session: false }),
    (req: Request, res: any) => {
      const user = req.user as User;

      req.session.userId = user.id;

      res.redirect("http://localhost:3000/");
    }
  );
};
