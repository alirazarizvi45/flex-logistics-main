const Users = require("../models/users");

const getUserOnlineStatus = async (userId) => {
  try {
    const user = await Users.findOne({
      where: { id: userId },
      attributes: ["isOnline"],
    });
    return user ? user.isOnline : null;
  } catch (error) {
    console.error("Error fetching user online status:", error);
    return null;
  }
};
module.exports = { getUserOnlineStatus };
