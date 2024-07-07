const express = require("express")
const router = express.Router()

const {fileUpload} = require('../controllers/Form') 

router.post('/fileupload',fileUpload);

module.exports = router