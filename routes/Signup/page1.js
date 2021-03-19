const express = require("express");
const User = require("../../Models/User");
const localStorage = require("local-storage");
const router = express.Router();

router.get("/", (req, res) => {
  //for clearing all users
  // User.deleteMany({},(err) => User.count((err,num) => console.log(num)));
  res.render("./Signup/page1");
});

router.post("/", (req, res) => {
  const { name, number, account } = req.body;
  let errors = [];
  if (!name || !number || !account) {
    errors.push({ msg: "Please fill all the details" });
  }
  if (number.length != 10) {
    errors.push({
      msg: "Please enter valid mobile number(without country code or 0)",
    });
  }
  if (account.length != 10) {
    errors.push({
      msg: "Please enter 10 digit account number",
    });
  }
  if (errors.length > 0) {
    res.render("Signup/page1", { errors, name, number, account });
    console.log(errors);
  } else {
    User.findOne({ account }).then((user) => {
      if (user) {
        if (user.username) {
          errors.push({ msg: "You have already registered please login" });
          res.render("Signup/page1", { errors });
        } else {
          if (user.number == number && user.name == name) {
            errors.push({ msg: "OTP is sent on your mobile number" });
            res.render("Signup/page2", { errors });
          } else {
            if (user.name != name) {
              errors.push({
                msg: "Name is incorrect",
              });
              res.render("Signup/page1", { errors, account, name, number });
            } else {
              errors.push({
                msg:
                  "This Mobile number is not registered with your bank account",
              });
              res.render("Signup/page1", { errors, account, name, number });
            }
          }
        }
      } else {
        errors.push({ msg: "Account number is incorrect" });
        res.render("Signup/page1", { errors, account, name, number });
      }
    });
  }
});
module.exports = router;
