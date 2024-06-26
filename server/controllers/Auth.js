const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true,
}));

exports.signup = async (req, res) => {
    try {
        const { name, phone, email, password, cpassword } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log(`User already exists`);
            return res.status(422).json({
                success: false,
                message: `User already exists`
            });
        }

        if (password !== cpassword) {
            return res.status(421).json({
                success: false,
                message: `Confirm password is different`
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, phone, email, password: hashedPassword
        });

        return res.status(200).json({
            success: true,
            message: `User created successfully`,
        });
    } catch (error) {
        console.log(`User not registered`);
        return res.status(400).json({
            success: false,
            message: `User cannot be registered, please try later`
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
