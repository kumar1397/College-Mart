const express = require("express")
const router = express.Router()

const {localFileUpload,fileUpload} = require('../controllers/Form') 

router.post('/fileupload',fileUpload);

module.exports = router