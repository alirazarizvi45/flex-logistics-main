const Jimp = require("jimp");
const Users = require("../models/users");

const ProfilePicController = async (req, res) => {
  const { id } = req.body;
  try {
    console.log(req.file.path, id);
    const image = await Jimp.read(req.file.path);
    await image.resize(300, Jimp.AUTO); // Resize to a width of 300 pixels, maintaining aspect ratio
    await image.quality(90); // Set image quality to 90 (adjust as needed)
    await image.writeAsync(req.file.path); // Save the modified image

    // Save the image path to the database
    await Users.update({ profile_pic: req.file.path }, { where: { id } });

    return res.status(200).json({ success: true, profile_pic: req.file.path });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to upload image." });
  }
};

module.exports = { ProfilePicController };
