const Drivers = require("../../models/Drivers");
const bcrypt = require("bcrypt");

const DriverSignUpController = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      idCardNumber,
      telephone,
      email,
      password,
      address,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !telephone ||
      !email ||
      !password ||
      !address
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const strippedNumber = telephone.replace(/\D/g, "");

    const existingEmailDriver = await Drivers.findOne({ where: { email } });
    const existingPhoneNumberDriver = await Drivers.findOne({
      where: { phoneNumber: strippedNumber },
    });

    if (existingEmailDriver) {
      return res
        .status(400)
        .json({
          success: false,
          message: "An account with this email address already exists.",
        });
    }

    if (existingPhoneNumberDriver) {
      return res
        .status(400)
        .json({
          success: false,
          message: "An account with this phone number already exists.",
        });
    }

    const newDriver = await Drivers.create({
      firstName,
      lastName,
      dateOfBirth,
      idCardNumber,
      phoneNumber: strippedNumber,
      email,
      password: hashedPassword,
      address,
    });

    res.status(201).json({ success: true, driver: newDriver });
  } catch (error) {
    console.error("Error in DriverSignUpController:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while processing your request.",
      });
  }
};

module.exports = { DriverSignUpController };
