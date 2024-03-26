const express = require("express");
const {
  DriverSignUpController,
} = require("../Controllers/DriverSignUpController/DriverSignUpController");
const router = express.Router();

router.post("/driver-signup", DriverSignUpController);

module.exports = router;
