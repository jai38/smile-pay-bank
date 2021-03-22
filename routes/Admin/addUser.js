const express = require("express");
const User = require("../../Models/User");
const router = express.Router();
let errors = [];
router.get("/", (req, res) => {
  res.render("./Admin/addUser");
});
router.post("/", (req, res) => {
  const {
    customerID,
    name,
    email,
    aadhar,
    pan,
    account,
    totalAmount,
    gender,
    DOB,
  } = req.body;
  getData = () => {
    return {
      customerID,
      name,
      email,
      aadhar,
      pan,
      account,
      totalAmount,
      gender,
      DOB,
      errors,
    };
  };
  if (aadhar.length != 12) {
    errors.push({ msg: "Aadhar should be of 12 digit" });
    res.render("./Admin/addUser", getData());
  } else if (pan.length != 10) {
    errors.push({ msg: "Pan should be of 10 digit" });
    res.render("./Admin/addUser", getData());
  } else if (account.length != 10) {
    errors.push({ msg: "Account should be of 10 digit" });
    res.render("./Admin/addUser", getData());
  } else if (gender != "M" || gender != "F") {
    errors.push({ msg: "Gender should be M or F" });
    res.render("./Admin/addUser", getData());
  } else if (DOB.length != 10) {
    errors.push({ msg: "date should be in format of dd-mm-yyyy" });
    res.render("./Admin/addUser", getData());
  } else if (totalAmount <= 0) {
    errors.push({ msg: "balance cannot be 0 or negative" });
    res.render("./Admin/addUser", getData());
  }
  User.findOne({ account }).then((user) => {
    if (user) {
      errors.push({ msg: "Account number is already in our database" });
      res.render("./Admin/addUser", getData());
    } else {
      const user = new User({
        customerID,
        name,
        email,
        aadhar,
        pan,
        account,
        totalAmount,
        gender,
        DOB,
      });
      user.save().then(() => {
        errrors.push({ msg: "User added successfully" });
        res.render("./Admin/addUser", { errrors });
      });
    }
  });
});
module.exports = router;
