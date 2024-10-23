// models/Profile.js
const mongoose = require("mongoose");
const user = require("../models/User");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  hall_of_residence: {
    type: String,
  },
  room_number: {
    type: String,
    default:null,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
