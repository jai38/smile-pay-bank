const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  adminUser: {
    type: String,
  },
  adminsPass: {
    type: String,
  },
  name: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  gender: {
    type: String,
  },
  email: {
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
  username: {
    type: String,
  },
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
  mobileNo: {
    type: Number,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
