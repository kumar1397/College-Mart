const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
  getUserProducts,
  updatePassword
} = require("../controllers/profileController");
const auth = require("../middleware/auth");
const {
  // singleUploadMiddleware,
  uploadMiddleware,
  multipleUploadMiddleware,
} = require("../middleware/multer");

// Route for getting profile
router.get("/profile", auth, getProfile);

// Route for updating profile with single avatar upload
// router.post("/profile", auth, singleUploadMiddleware, updateProfile);
router.post("/profile", auth, uploadMiddleware, updateProfile);

// Route for updating profile with multiple images upload
router.post("/profile/images", auth, multipleUploadMiddleware, updateProfile);

// New Route for getting products uploaded by the authenticated user
router.get("/profile/products", auth, getUserProducts);  

// Route for updating user password
router.post("/profile/update-password", auth, updatePassword);

module.exports = router;
