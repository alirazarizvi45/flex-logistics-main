const passport = require("../config/passport");

const signinController = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(200).json({ success: false, message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({ success: true, user });
    });
  })(req, res, next);
};

module.exports = { signinController };
