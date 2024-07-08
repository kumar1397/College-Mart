const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/User");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    credentials: true,
  })
);

const mailSender = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

exports.signup = async (req, res) => {
  try {
    const { name, phone, email, password, cpassword } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log(`User already exists`);
      return res.status(422).json({
        success: false,
        message: `User already exists`,
      });
    }

    if (password !== cpassword) {
      return res.status(421).json({
        success: false,
        message: `Confirm password is different`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: `User created successfully`,
    });
  } catch (error) {
    console.log(`User not registered`);
    return res.status(400).json({
      success: false,
      message: `User cannot be registered, please try later`,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please fill up all the required fields`,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not registered with us. Please sign up to continue`,
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
        message: `User login success`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login failure. Please try again`,
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `This Email: ${email} is not Registered With Us. Enter a Valid Email.`,
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    await User.findOneAndUpdate(
      { email },
      {
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 3600000, // 1 hour
      },
      { new: true }
    );

    const url = `http://localhost:3000/reset-password/${token}`;

    await mailSender(
      email,
      "Password Reset",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    );

    res.json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Some Error in Sending the Reset Message`,
      error: error.message,
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Do Not Match",
      });
    }

    const userDetails = await User.findOne({ resetPasswordToken: token });

    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      });
    }

    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { resetPasswordToken: token },
      { password: encryptedPassword, resetPasswordToken: null, resetPasswordExpires: null },
      { new: true }
    );

    res.json({
      success: true,
      message: `Password Reset Successful`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Some Error in Updating the Password`,
      error: error.message,
    });
  }
};

// Routes
app.post("/signup", exports.signup);
app.post("/signin", exports.signin);
app.post("/forgot-password", exports.forgotPassword);
app.post("/reset-password", exports.resetPassword);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
