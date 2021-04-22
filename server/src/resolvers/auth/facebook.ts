import { getConnection } from "typeorm";
import { User } from "../../entity/User";
const FacebookStrategy = require("passport-facebook").Strategy;

export const facebookAuth = () =>
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:4000/auth/facebook/callback",
      profileFields: ["id", "displayName", "name", "photos", "email"],
    },
    // @ts-ignore
    async (_, __, profile, done) => {
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
        user = await User.create({
          facebookId: id,
          username: displayName,
          firstName: name.givenName,
          lastName: name.familyName,
          email: emails[0].value,
          avatar: photos[0].value,
        }).save();
      } else if (!user.facebookId) {
        user.facebookId = id;
        await user.save();
      } else {
        // we have facebook id
        // login
      }

      return done(null, { id: user.id });
    }
  );
