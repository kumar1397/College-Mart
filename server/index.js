const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const profile = require("./routes/profile");
const user = require("./routes/user");
const formdata = require("./routes/formdata");
const multer = require("multer");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

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

app.use(express.json());

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Socket.IO setup
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log("Message sent:", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

httpServer.listen(9000, () => {
  console.log("Socket.IO server is listening at port 9000");
});

// Cloudinary configuration
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Parse URL-encoded data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const Product = require("./models/Product");
// Import and mount routes
app.use("/", user);
app.use("/upload", formdata);
app.use("/home", profile);
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
