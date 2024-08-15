const bcrypt = require("bcrypt");
const Users = require("../models/users");

const signUpController = async (req, res, next) => {
  try {
    let {
      email,
      password,
      role,
      telephone,
      firstName,
      lastName,
      dateOfBirth,
      idCardNumber,
      address,
    } = req.body;
    console.log("Request Body:", req.body);

    if (!role) {
      return res
        .status(400)
        .json({ success: false, message: "Role is required" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const strippedNumber = telephone.replace(/\D/g, "");

    const [existingEmailUser, existingPhoneNumberUser] = await Promise.all([
      Users.findOne({ where: { email } }),

      Users.findOne({
        where: { phoneNumber: strippedNumber },
      }),
    ]);

    if (existingEmailUser) {
      return res.status(400).json({
        success: false,
        message: "Account with this email address already exists.",
      });
    }

    if (existingPhoneNumberUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this phone number already exists.",
      });
    }
    const newUser = await Users.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      phoneNumber: strippedNumber,
      firstName,
      lastName,
      dateOfBirth,
      idCardNumber,
      address,
      role,
    });
    req.login(newUser, (err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.status(201).json({
        success: true,
        user: newUser,
        message: "Account Successfully created.",
      });
    });
  } catch (error) {
    console.log("An error occurred while creating the account.", error);
    next(error);
  }
};

module.exports = { signUpController };
