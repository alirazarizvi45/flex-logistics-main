const getTripRequestController = async (req, res) => {
  const { tripId } = req.params;

  try {
    const tripInfo = await RiderTripDetails.findOne({
      where: { tripId, status: { [Op.ne]: "completed" } },
    });

    if (!tripInfo) {
      console.log("No active trip found for tripId:", tripId);
      return res.status(404).json({
        success: false,
        message: "No active trip request found",
      });
    }

    res.status(200).json({
      success: true,
      tripInfo,
    });
    // console.log("Found trip info:", tripInfo);
  } catch (error) {
    console.log("Error in getting Trip Request:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = { getTripRequestController };
