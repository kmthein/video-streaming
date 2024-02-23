const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "514057168896-vmhaa8b8ioo20jclala6hv6pj0jujtgu.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/auth/google/callback",
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