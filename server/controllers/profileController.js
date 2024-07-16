const Profile = require("../models/Profile");
const User = require("../models/User");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

async function folderExists(folderName) {
  try {
    const rootFolders = await cloudinary.api.root_folders();
    const subFolders = await cloudinary.api.sub_folders("root");

    // Check in root folders
    if (rootFolders.folders.some((folder) => folder.name === folderName)) {
      return true;
    }

    // Check in sub folders
    if (subFolders.folders.some((folder) => folder.name === folderName)) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error checking if folder exists on Cloudinary:", error);
    return false;
  }
}

async function uploadToCloudinary(fileBuffer, fileName, folder) {
  const options = {
    resource_type: "auto",
    folder: folder,
    public_id: fileName,
  };

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
}

exports.getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "email"]
    );

    if (!profile) {
      const user1 = await User.findById(req.user.id);
      if (!user1) {
        return res.status(404).json({ msg: "User not found" });
      }

      profile = new Profile({
        user: user1.id,
        avatar: "", // Default or initial avatar value
        // Add default or initial profile fields here if needed
      });
      await profile.save();
    }

    res.json(profile);
  } catch (err) {
    console.error("Error fetching profile:", err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { bio, hall_of_residence, room_number } = req.body;
    let profileFields = {};

    if (req.file) {
      const fileBuffer = req.file.buffer;
      const fileName = req.file.originalname.split(".")[0];
      const result = await uploadToCloudinary(
        fileBuffer,
        fileName,
        process.env.FOLDER_NAME
      );
      profileFields.avatar = result.secure_url;
    }

    let images = [];

    if (req.files && req.files.images) {
      const supportedTypes = ["jpg", "jpeg", "png"];

      for (let file of req.files.images) {
        const filetype = file.originalname.split(".").pop().toLowerCase();
        if (!supportedTypes.includes(filetype)) {
          return res.status(415).json({
            success: false,
            message: `File format not supported. Allowable formats are png, jpg, and jpeg`,
          });
        }

        const fileBuffer = file.buffer;
        const fileName = file.originalname.split(".")[0];
        const result = await uploadToCloudinary(
          fileBuffer,
          fileName,
          process.env.FOLDER_NAME
        );
        images.push({ url: result.secure_url });
      }
    }

    if (bio) profileFields.bio = bio;
    if (hall_of_residence) profileFields.hall_of_residence = hall_of_residence;
    if (room_number) profileFields.room_number = room_number;

    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: { ...profileFields, images } },
        { new: true }
      );
    } else {
      profileFields.user = req.user.id;
      profileFields.images = images;
      profile = new Profile(profileFields);
      await profile.save();
    }

    profile = await Profile.findOne({ user: req.user.id }).populate("user", [
      "name",
      "email",
    ]);
    res.json({
      success: true,
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
