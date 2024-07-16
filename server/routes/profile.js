const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const auth = require("../middleware/auth");
const {
  singleUploadMiddleware,
  multipleUploadMiddleware,
} = require("../middleware/multer");

// Route for getting profile
router.get("/profile", auth, getProfile);

// Route for updating profile with single avatar upload
router.post("/profile", auth, singleUploadMiddleware, updateProfile);

// Route for updating profile with multiple images upload
router.post("/profile/images", auth, multipleUploadMiddleware, updateProfile);

module.exports = router;
