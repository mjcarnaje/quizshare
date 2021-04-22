import { getConnection } from "typeorm";
import { User } from "../../entity/User";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

export const googleAuth = () =>
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SERCRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    // @ts-ignore
    async (_, __, profile, done) => {
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
  );
