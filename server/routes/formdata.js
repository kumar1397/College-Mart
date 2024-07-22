const express = require("express");
const router = express.Router();
const {
  singleUploadMiddleware,
  multipleUploadMiddleware,
} = require("../middleware/multer");

const {
  fileUpload,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
} = require("../controllers/Form");

router.post("/fileupload", multipleUploadMiddleware, fileUpload);
router.post("/updateProduct", multipleUploadMiddleware, updateProduct);
router.post("/deleteProduct", multipleUploadMiddleware, deleteProduct);
router.get("/getAllProduct", multipleUploadMiddleware, getAllProduct);
router.get("/getSingleProduct", multipleUploadMiddleware, getSingleProduct);

module.exports = router;










