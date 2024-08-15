const RiderTripDetails = require("../models/ridertripdetails");
const Users = require("../models/users");

const RiderTripDetailController = async (req, res, next) => {
  try {
    const {
      tripId,
      riderId,
      travelType,
      pickupLocation,
      dropOffLocation,
      locationDistance,
      locationDuration,
      timeToPick,
      paymentMethod,
    } = req.body;
    if (
      !tripId ||
      !riderId ||
      !travelType ||
      !pickupLocation ||
      !dropOffLocation ||
      !locationDistance ||
      !locationDuration ||
      !timeToPick ||
      !paymentMethod
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const riderDetails = await Users.findOne({
      where: { id: riderId },
    });
    if (!riderDetails) {
      return res.status(404).json({
        success: false,
        message: "Rider not found",
      });
    }
    // console.log("rider deatail", riderDetails);
    const newTripDetail = await RiderTripDetails.create({
      tripId,
      riderId,
      travelType,
      pickupLocation,
      dropOffLocation,
      locationDistance,
      locationDuration,
      timeToPick,
      paymentMethod,
      status: "pending",
      riderFirstName: riderDetails.firstName,
      riderLastName: riderDetails.lastName,
      riderPhoneNumber: riderDetails.phoneNumber,
      riderEmail: riderDetails.email,
      riderPic: riderDetails.profile_pic,
    });

    // console.log(newTripDetail);
    res.status(200).json({
      success: true,
      message: "Trip details added successfully",
      data: { newTripDetail },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = { RiderTripDetailController };
