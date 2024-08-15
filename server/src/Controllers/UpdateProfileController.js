const Jimp = require("jimp");
const bcrypt = require("bcrypt"); // Make sure bcrypt is required
const Users = require("../models/users");

const UpdateProfileController = async (req, res) => {
  console.log("Received request body:", req.body);
  console.log("Received files:", req.files);
  console.log("Received user ID:", req.body.id);
  const {
    id,
    firstName,
    lastName,
    dateOfBirth,
    idCardNumber,
    telephone,
    email,
    password,
    address,
  } = req.body;
  console.log(req.body);
  try {
    // Ensure the user ID is provided
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }

    // Find the user in the database
    console.log("User ID:", id);
    const user = await Users.findOne({ where: { id } });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let profilePicPath = user.profile_pic;
    if (req.file && req.file.path) {
      // Process the uploaded image
      const image = await Jimp.read(req.file.path);
      await image.resize(300, Jimp.AUTO); // Resize to a width of 300 pixels, maintaining aspect ratio
      await image.quality(90); // Set image quality to 90 (adjust as needed)
      await image.writeAsync(req.file.path); // Save the modified image
      profilePicPath = req.file.path;
    }

    let hashedPassword = user.password;
    if (password && user.password !== password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    const updatedData = {
      firstName: firstName || user.firstName,
      lastName: lastName || user.lastName,
      dateOfBirth: dateOfBirth || user.dateOfBirth,
      idCardNumber: idCardNumber || user.idCardNumber,
      telephone: telephone || user.telephone,
      email: email || user.email,
      password: hashedPassword,
      address: address || user.address,
      profile_pic: profilePicPath,
    };

    // Update the user record
    await Users.update(updatedData, { where: { id } });
    const updatedUser = await Users.findByPk(id);
    console.log("Updated user:", updatedUser);
    return res.status(200).json({ success: true, updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { UpdateProfileController };
