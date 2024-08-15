const logoutController = async (req, res, next) => {
  try {
    req.logout(function (err) {
      if (err) return next(err);
      res.status(200).json({ success: true, user: null });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { logoutController };
