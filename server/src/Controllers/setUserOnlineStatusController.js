const Users = require("../models/users");

const setUserOnlineStatusController = async ({ userId, isOnline }) => {
  try {
    console.log(
      `Attempting to update user ${userId} online status to ${isOnline}`
    );
    const result = await Users.update({ isOnline }, { where: { id: userId } });
    console.log(`Update result:`, result);
    return result[0] > 0; // Returns true if at least one row was affected
  } catch (error) {
    console.log("Error updating user online status:", error);
    throw error;
  }
};

module.exports = { setUserOnlineStatusController };
