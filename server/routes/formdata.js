const express = require("express")
const router = express.Router()

const {fileUpload,updateProduct,deleteProduct,getAllProduct,getSingleProduct} = require('../controllers/Form') 

router.post('/fileupload',fileUpload);
router.post('/updateProduct',updateProduct);
router.post('/deleteProduct',deleteProduct);
router.get('/getAllProduct',getAllProduct);
router.get('/getSingleProduct',getSingleProduct);

module.exports = router