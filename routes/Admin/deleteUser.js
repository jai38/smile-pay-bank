const express = require("express");
const User = require("../../Models/User");
const router = express.Router();
let errors = [];

router.get("/", (req, res) => {
  res.render("./Admin/deleteUser");
});

router.post("/", (req, res) => {
  let current = JSON.parse(req.body.currentDelete);
  User.findOneAndDelete({ account: current.account }).then((user) => {
    errors = [];
    errors.push({
      msg:
        "User Deleted Successfully, click on the Refresh Button to get the changes",
    });
    let allUsers = [];
    User.find().then((users) => {
      users.forEach((c) => {
        let currentUser = {
          customerID: c.customerID,
          account: c.account,
          name: c.name,
          gender: c.gender,
          DOB: c.DOB,
          email: c.email,
          aadhar: c.aadhar,
          pan: c.pan,
          mobileNo: c.mobileNo,
          balance: c.totalAmount,
        };
        allUsers.push(currentUser);
      });
      res.render("./Admin/deleteUser", {
        errors,
        allUsers: JSON.stringify(allUsers),
      });
    });
  });
});
module.exports = router;
