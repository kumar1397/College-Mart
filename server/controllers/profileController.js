const Profile = require("../models/Profile");
const User = require("../models/User");
const Product = require("../models/Product");
const bcrypt = require("bcrypt");

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
      ["name", "email", "phone"]
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

    // console.log('req.body:', req.body);
    // console.log('req.files:', req.files);

    const { bio, hall_of_residence, room_number, password, phone } = req.body;
    let profileFields = {};

    // Retrieve user from database
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Wrong Password !!",
      });
    }

    // Process files if present
    if (req.files && req.files.avatar && req.files.avatar.length > 0) {
      const supportedTypes = ["jpg", "jpeg", "png"];
      for (let file of req.files.avatar) {
        const filetype = file.originalname.split(".").pop().toLowerCase();
        if (!supportedTypes.includes(filetype)) {
          return res.status(415).json({
            success: false,
            message: `File format not supported. Allowable formats are png, jpg, and jpeg`,
          });
        }

        const avatarFile = req.files.avatar[0];
        console.log('Uploaded avatar file:', avatarFile);
        const fileBuffer = avatarFile.buffer;
        const fileName = avatarFile.originalname.split(".")[0];
        const result = await uploadToCloudinary(
          fileBuffer,
          fileName,
          process.env.FOLDER_NAME
        );
        if (result) {
          profileFields.avatar = result.secure_url;
        }
      }
    }

    // Update fields
    if (bio) profileFields.bio = bio;
    if (hall_of_residence) profileFields.hall_of_residence = hall_of_residence;
    if (room_number) profileFields.room_number = room_number;

    // Update profile document
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    // Update user fields
    let userFields = {};
    if (phone) userFields.phone = phone;

    if (Object.keys(userFields).length > 0) {
      await User.findByIdAndUpdate(
        req.user.id,
        { $set: userFields },
        { new: true }
      );
    }

    // Populate the user fields in profile
    profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      'name phone'
    );

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


exports.getUserProducts = async (req, res) => {
  console.log("Fetching user's product ", { userId: req.user.id, query: req.query });
  try {
    const userId = req.user.id;

    const searchTerm = req.query.search || '';
    const onlySold = req.query.sold === 'true';
    const onlyUnsold = req.query.unsold === 'true';
    const sortCriteria = req.query.sort || '';

    const query = { user: userId };

    if (onlySold) {
      query.sold = true;
    } else if (onlyUnsold) {
      query.sold = false;
    }

    if (searchTerm) {
      query.$or = [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ];
    }

    let sort = {};
    if (sortCriteria === "price") {
      sort.price = 1;
    } else if (sortCriteria === "date") {
      sort.date = -1;
    } else if (sortCriteria === "sold") {
      sort.sold = 1;
    } else if (sortCriteria === "unsold") {
      sort.sold = -1; // Adjust if needed
    } else if (sortCriteria) {
      // Handle invalid sort criteria
      return res.status(400).json({
        success: false,
        message: "Invalid sort criteria",
      });
    }

    const userProducts = await Product.find(query).sort(sort).populate("user", "name email");

    res.status(200).json({
      success: true,
      products: userProducts,
    });
  } catch (error) {
    console.error("Error fetching user's products:", error.stack);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user's products",
    });
  }
};

exports.updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  console.log("3");
  try {
    const user = await User.findById(req.user.id); // Use User model instead of Profile
    console.log("4");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log("5");
    // Compare old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }
    console.log("6");
    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    console.log("7");
    // Update password
    user.password = hashedPassword;
    await user.save();
    console.log("8");
    res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.log("9");
    console.error("Error updating password:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

