const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const profile = require("./routes/profile");
const user = require("./routes/user");
const formdata = require("./routes/formdata");
const PORT = process.env.PORT || 5000;
const multer = require("multer");
const bodyParser = require("body-parser");

// Configure multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Use CORS middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "UPDATE", "DELETE"],
  })
);

// Middleware to handle file uploads
// const fileUpload = require("express-fileupload");
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: '/tmp/'
// }));

// fileupload(app);

// Parse JSON data
app.use(express.json());

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Parse URL-encoded data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Import and mount routes
app.use("/", user);
app.use("/upload", formdata);
app.use("/home", profile);

// Start the server
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>hello</h1>`);
});
