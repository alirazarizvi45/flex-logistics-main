const Users = require("../models/users");

const getUserByIdController = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await Users.findOne({
      where: { id: userId },
    });
    {
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
module.exports = { getUserByIdController };
