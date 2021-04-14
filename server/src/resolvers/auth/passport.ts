import passport from "passport";
import { User } from "../../entity/User";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GoogleAuth = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "316858224159-0gha9ls9bp32srveo92agk6lkn6anlrh.apps.googleusercontent.com",
        clientSecret: "qoCXd2yxocWJjGysx-GD3xpF",
        callbackURL: "http://localhost:4000/google/callback",
      },
      async (_: any, __: any, profile: any, done: any) => {
        const { id, displayName, name, emails, photos } = profile;

        const oldUser = await User.findOne({ googleId: id });

        if (oldUser) {
          return done(null, oldUser);
        } else {
          const newUser = await User.create({
            googleId: id,
            username: displayName,
            firstName: name.givenName,
            lastName: name.familyName,
            email: emails[0].value,
            avatar: photos[0].value,
          }).save();

          return done(null, { userId: newUser.id });
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, { userId: user.id });
  });

  passport.deserializeUser(async (userId, done) => {
    const user = await User.findOne({ where: { id: userId } });
    done(null, user);
  });
};

export default GoogleAuth;
