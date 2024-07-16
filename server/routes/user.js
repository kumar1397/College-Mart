const express = require("express");
const router = express.Router();

const { signin, signup } = require("../controllers/Auth");
// const {forget_password}= require("../controllers/Resetpassword")

router.post("/signup", signup);

router.post("/signin", signin);
// router.post('/forget_password', forget_password);

module.exports = router;
