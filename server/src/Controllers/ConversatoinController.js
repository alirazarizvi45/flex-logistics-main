const Converstation = require("../models/conversation");

const ConverstationController = async (req, res) => {
  try {
    const { tripId, senderId, receiverId, role, text, profilePic } = req.body;
    const chat = new Converstation({
      tripId,
      senderId,
      receiverId,
      role,
      text,
      profilePic,
    });
    const saveChat = await chat.save();
    res.status(200).json(saveChat);
    // console.log("save Chat is ", JSON.stringify(saveChat));
  } catch (error) {
    console.log("Error while saving chat: ", error);
    res.status(500).json({ error: "Failed to save chat" });
  }
};

module.exports = { ConverstationController };
