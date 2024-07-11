const express = require("express")
const router = express.Router()

const {fileUpload,updateProduct,deleteProduct} = require('../controllers/Form') 

router.post('/fileupload',fileUpload);
router.post('/updateProduct',updateProduct);
router.post('/deleteProduct',deleteProduct);

module.exports = router