// controllers/userController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator")
const User = require("../models/User");
const OTP = require("../models/OTP")
const Profile = require("../models/Profile");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://college-mart.vercel.app"],
    credentials: true,
  })
);

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body
    const checkUserPresent = await User.findOne({ email })

    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      })
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    })
    const result = await OTP.findOne({ otp: otp })
    console.log("Result is Generate OTP Func")
    console.log("OTP", otp)
    console.log("Result", result)
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      })
    }
    const otpPayload = { email, otp }
    const otpBody = await OTP.create(otpPayload)
    console.log("OTP Body", otpBody)
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ success: false, error: error.message })
  }
}

exports.signup = async (req, res) => {
  try {
    const { name, phone, email, password, cpassword, otp } = req.body;

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(422).json({
        success: false,
        message: "User already exists",
      });
    }
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
    console.log(response)
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      })
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      })
    }

    // Check if password and confirm password match
    if (password !== cpassword) {
      console.log("Passwords do not match");
      return res.status(421).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Create a profile for the new user
    const profile = new Profile({
      user: user._id,
    });

    // Attempt to save the profile and verify success
    const savedProfile = await profile.save();
    if (!savedProfile) {
      // Optionally, delete the user if profile creation fails to maintain consistency
      await User.findByIdAndDelete(user._id);
      throw new Error("Failed to create profile for the user");
    } else {
      console.log(`Profile successfully created for user ID: ${user._id}`);
    }

    // Create a JWT payload
    const payload = {
      user: {
        id: user._id,
      },
    };

    // Sign the JWT and send it in the response
    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Use the secret key from environment variables
      { expiresIn: "1h" }, // Set token expiration time
      (err, token) => {
        if (err) {
          console.error("Error signing token:", err.message);
          return res.status(500).json({
            success: false,
            message: "Error generating token",
          });
        }

        console.log("User created successfully");
        return res.status(201).json({
          success: true,
          message: "User created successfully",
          token, // Include the token in the response
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "User cannot be registered, please try again later",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill up all the required fields",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered with us. Please sign up to continue",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User login success",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Login failure. Please try again",
    });
  }
};
