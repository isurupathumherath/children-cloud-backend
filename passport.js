import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "./models/index.js";
import passport from "passport";

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, done) {
      //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // return cb(err, user);
      //});
      done(null, profile);
      console.log(accessToken);
      console.log(refreshToken);
    },
  ),
);
