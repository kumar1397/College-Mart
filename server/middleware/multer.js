const multer = require("multer");
require("dotenv").config();

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const singleUploadMiddleware = upload.single("avatar");
const multipleUploadMiddleware = upload.single("images"); // Limit to 10 files

module.exports = {
  singleUploadMiddleware,
  multipleUploadMiddleware,
};
