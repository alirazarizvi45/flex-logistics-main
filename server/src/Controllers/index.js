const { CnicBackImageControler } = require("./CnicBackImageController");
const { CnicFrontImageControler } = require("./CnicImageControler");
const { ConverstationController } = require("./ConversatoinController");
const { getConversationController } = require("./getConversationController");
const { getTripRequestController } = require("./getTripRequestController");
const { getUserByIdController } = require("./getUserByIdController");
const { getUserLoggedIn } = require("./getUserLoggedIn");
const { getUserOnlineStatus } = require("./getUserOnlineStatus");
const { LicenseImageController } = require("./LicenseImageController");
const { logoutController } = require("./logoutController");
const { ProfilePicController } = require("./ProfilePicController");
const { RiderTripDetailController } = require("./RiderTripDetailController");
const {
  setUserOnlineStatusController,
} = require("./setUserOnlineStatusController");
const { signinController } = require("./signinController");
const { signUpController } = require("./signUpController");
const { UpdateProfileController } = require("./UpdateProfileCOntroller");
const { UpdateTripStatusController } = require("./UpdateTripStatusController");
const { VehicleImageController } = require("./VehicleImageController");
const {
  VehicleRegistrationImageController,
} = require("./VehicleRegistrationImageController");

module.exports = {
  // signUpController
  signUpController,
  //   signinController
  signinController,

  // getUserLoggedIn
  getUserLoggedIn,

  //logoutController
  logoutController,

  // LicenseImageController
  LicenseImageController,

  //ProfilePicController
  ProfilePicController,

  // CnicFrontImageControler
  CnicFrontImageControler,

  //CnicBackImageControler
  CnicBackImageControler,

  // VehicleRegistrationImageController
  VehicleRegistrationImageController,

  //VehicleImageController
  VehicleImageController,

  //UpdateProfileController
  UpdateProfileController,

  //RiderTripDetailController
  RiderTripDetailController,

  //getTripRequestController
  getTripRequestController,
  //UpdateTripStatusController
  UpdateTripStatusController,
  //setUserOnlineStatusController
  setUserOnlineStatusController,
  //getUserByIdController
  getUserByIdController,

  //ConverstationController
  ConverstationController,
  // getUserOnlineStatus
  getUserOnlineStatus,

  // getConversationController
  getConversationController,
};
