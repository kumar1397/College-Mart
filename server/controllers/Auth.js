const bcrypt = require('bcrypt');
const User = require('../models/User');
require('dotenv').config();

exports.signup = async (req, res) => {
  try {
    // Get all the data
    const { name, phone, email, password, cpassword } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(422).json({
        success: false,
        message: 'User already exists',
      });
    }

    // Check if passwords match
    if (password !== cpassword) {
      return res.status(421).json({
        success: false,
        message: 'Confirm password is different',
      });
    }

    // Hash the password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      console.error('Password hashing failed', error);
      return res.status(500).json({
        success: false,
        message: 'Password hashing failed',
      });
    }

    // Create the user
    const user = await User.create({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: 'User created successfully',
    });
  } catch (error) {
    console.error('User registration failed', error);
    return res.status(400).json({
      success: false,
      message: 'User cannot be registered, please try later',
    });
  }
};


const jwt = require('jsonwebtoken');

exports.signin = async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill up all the required fields',
      });
    }

    // Find user with provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User is not registered with us. Please sign up to continue',
      });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: 'Password is incorrect',
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Save token to user document in database (if required)
    user.token = token;
    await user.save();

    // Set cookie for token and return success response
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.cookie('token', token, options).status(200).json({
      success: true,
      token,
      user,
      message: 'User login success',
    });
  } catch (error) {
    console.error('Login failure', error);
    return res.status(500).json({
      success: false,
      message: 'Login failure, please try again',
    });
  }
};
