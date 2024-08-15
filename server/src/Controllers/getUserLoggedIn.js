const Users = require("../models/users");

const getUserLoggedIn = async (req, res, next) => {
  try {
    if (!req?.user) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    const user = await Users.findOne({
      where: { id: req.user.id },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const userObject = user.toJSON();
    console.log("userObject", userObject);
    return res
      .status(200)
      .json({ success: true, user: userObject, role: userObject.role });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = { getUserLoggedIn };
