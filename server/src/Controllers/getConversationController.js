const Converstation = require("../models/conversation");

const getConversationController = async (req, res) => {
  try {
    const { tripId } = req.params;

    if (!tripId) {
      return res.status(400).json({ error: "tripId is required" });
    }

    // Fetching all conversations for the given tripId
    const conversations = await Converstation.findAll({
      where: { tripId },
      order: [["createdAt", "ASC"]],
    });

    if (conversations.length > 0) {
      res.status(200).json(conversations);
    } else {
      res.status(404).json({ message: "No conversations found for this trip" });
    }
  } catch (error) {
    console.error("Error while fetching chat: ", error);
    res.status(500).json({ error: "Failed to fetch conversations" });
  }
};

module.exports = { getConversationController };
