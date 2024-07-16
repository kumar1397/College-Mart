const express = require('express');
const router = express.Router();

const { signin, signup } = require('../controllers/Auth');
const { resetPasswordToken, resetPassword } = require('../controllers/Resetpassword');
const { sendMail } = require('../controllers/Mail');

// Route for user signup
router.post('/signup', signup);

// Route for user signin
router.post('/signin', signin);

// Route for sending mail
console.log("Defining /sendmail route");
router.post('/sendmail', sendMail);

// Route for generating a reset password token
router.post('/reset-password-token', resetPasswordToken);

// Route for resetting user's password after verification
router.post('/reset-password/:token', resetPassword);

module.exports = router;
