
const express = require("express")
const router = express.Router()

const {login,signup} = require("../controllers/Auth")
const {Auth,isStudent,isAdmin} = require("../middlewares/Auth");


router.post('/login',login)
router.post('/signup',signup)

