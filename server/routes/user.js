const express = require("express")
const router = express.Router()

const { signin,signup} = require("../controllers/Auth")
const {resetPasswordToken,resetPassword} = require("../controllers/Resetpassword")
// const {forget_password}= require("../controllers/Resetpassword")

router.post('/signup', signup)

router.post('/signin',signin)
// router.post('/forget_password', forget_password);


// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)
module.exports = router