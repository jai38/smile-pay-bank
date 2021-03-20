const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  DOB: {
    type: String,
  },
  gender: {
    type: String,
  },
  customerID: {
    type: String,
  },
  aadhar: {
    type: String,
  },
  pan: {
    type: String,
  },
  account: {
    type: String,
  },
  username: {},
  password: {
    type: String,
  },
  pin: {
    type: String,
  },
  totalAmount: {
    type: Number,
  },
  imgLink: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
