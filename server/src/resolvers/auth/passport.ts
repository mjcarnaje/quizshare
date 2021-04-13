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
      async (
        _accessToken: any,
        _refreshToken: any,
        profile: any,
        done: any
      ) => {
        console.log(profile);
        const oldUser = await User.findOne({ googleId: profile.id });

        if (oldUser) {
          return done(null, oldUser);
        } else {
          const newUser = await User.create({
            googleId: profile.id,
            username: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          }).save();

          return done(null, newUser);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ where: { id } });
    done(null, user);
  });
};

export default GoogleAuth;
