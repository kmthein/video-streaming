const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: process.env.ClientID,
    clientSecret: process.env.ClientSecret,
    callbackURL: process.env.CallbackURL,
    scope: ["profile", "email", "https://www.googleapis.com/auth/youtube"],
  },
  function(accessToken, refreshToken, profile, callback) {
    callback(null, { accessToken, refreshToken, profile });
  }
));

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});