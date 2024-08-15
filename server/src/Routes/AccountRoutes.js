const express = require("express");
const multer = require("multer");
const {
  signUpController,
  signinController,
  getUserLoggedIn,
  LicenseImageController,
  ProfilePicController,

  CnicFrontImageControler,
  CnicBackImageControler,
  VehicleRegistrationImageController,
  VehicleImageController,
  logoutController,
  UpdateProfileController,
  RiderTripDetailController,
  getTripRequestController,
  UpdateTripStatusController,
  getUserByIdController,
  setUserOnlineStatusController,
  ConverstationController,
  getConversationController,
} = require("../Controllers");

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
router.post("/driver-signup", signUpController);
router.post("/rider-signup", signUpController);
router.post("/login", signinController);
router.get("/get-user", getUserLoggedIn);
router.get("/logout", logoutController);
router.post(
  "/update-user-profile",
  upload.single("profile_pic"),
  UpdateProfileController
);
router.post(
  "/add-license-image",
  upload.single("license_image"),
  LicenseImageController
);
router.post(
  "/add-profile-image",
  upload.single("profile_pic"),
  ProfilePicController
);
router.post(
  "/add-cnic-front-image",
  upload.single("cnic_front"),
  CnicFrontImageControler
);
router.post(
  "/add-cnic-back-image",
  upload.single("cnic_back"),
  CnicBackImageControler
);
router.post(
  "/add-vehicle-registration-image",
  upload.single("vehicle_registration_image"),
  VehicleRegistrationImageController
);
router.post(
  "/add-vehicle-image",
  upload.single("vehicle_image"),
  VehicleImageController
);
router.post("/save-trip-request", RiderTripDetailController);
router.get("/get-trip-request:tripId", getTripRequestController);
router.put("/update-trip-status/:tripId", UpdateTripStatusController);
router.get("/get-user-by-id/:userId", getUserByIdController);
router.post("/set-user-online-status", setUserOnlineStatusController);
router.post("/save-conversation", ConverstationController);
router.get("/get-conversation/:tripId", getConversationController);
module.exports = router;
