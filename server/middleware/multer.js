const multer = require("multer");
require("dotenv").config();

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const singleUploadMiddleware = upload.single("avatar");
const uploadMiddleware = upload.fields([{ name: "avatar", maxCount: 1 }]);
const multipleUploadMiddleware = upload.array("filename", 10); // Limit to 10 files

module.exports = {
  singleUploadMiddleware,
  uploadMiddleware,
  multipleUploadMiddleware,
};
