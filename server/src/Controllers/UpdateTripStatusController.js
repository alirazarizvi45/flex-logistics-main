const RiderTripDetails = require("../models/ridertripdetails");

const UpdateTripStatusController = async (req, res) => {
  try {
    const { tripId } = req.params;
    const { status, driverId } = req.body;

    if (!tripId || !status) {
      return res.status(400).json({
        success: false,
        message: "Trip ID and status are required",
      });
    }

    const updatedTrip = await RiderTripDetails.findOne({ where: { tripId } });

    if (!updatedTrip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    updatedTrip.status = status;
    if (driverId) {
      updatedTrip.driverId = driverId;
    }

    await updatedTrip.save();
    // console.log("Updated Trip", updatedTrip);
    res.status(200).json({
      success: true,
      message: "Trip status updated successfully",
      data: updatedTrip,
    });
  } catch (error) {
    console.log("Error in UpdateTripStatusController:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { UpdateTripStatusController };
