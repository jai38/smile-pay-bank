const express = require("express");
const User = require("../../Models/User");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Main/MainPage");
  // let allUsers = [];
  // User.find().then((users) => {
  //   users.forEach((c) => {
  //     let currentUser = {
  //       customerID: c.customerID,
  //       account: c.account,
  //       name: c.name,
  //       gender: c.gender,
  //       DOB: c.DOB,
  //       email: c.email,
  //       aadhar: c.aadhar,
  //       pan: c.pan,
  //       balance: c.totalAmount,
  //     };
  //     allUsers.push(currentUser);
  //   });
  //   allUsers = JSON.stringify(allUsers);
  //   res.render("./Main/MainPage", { allUsers });
  // });
});
module.exports = router;
