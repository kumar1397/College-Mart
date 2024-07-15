const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

// Importing routes
const user = require('./routes/user');
const formdata = require('./routes/formdata');

// Define the port
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'UPDATE', 'DELETE']
}));

// Middleware to parse JSON data
app.use(express.json());

// Middleware to handle file uploads
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Connect to Cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Mount the routes
console.log("Mounting user routes");
app.use("/", user); // Mount user routes on the root path
app.use("/upload", formdata); // Mount formdata routes on the /upload path

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
