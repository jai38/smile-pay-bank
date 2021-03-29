const express = require("express");
const User = require("../../Models/User");
const localStorage = require("local-storage");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const fs = require("fs");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
const router = express.Router();
const generateOTP = () => {
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
};
router.get("/", (req, res) => {
  //for clearing all users
  // User.deleteMany({},(err) => User.count((err,num) => console.log(num)));
  res.render("./Signup/page1");
});

router.post("/", (req, res) => {
  const { name, email, account } = req.body;
  let errors = [];
  if (!name || !email || !account) {
    errors.push({ msg: "Please fill all the details" });
  }
  if (account.length != 10) {
    errors.push({
      msg: "Please enter 10 digit account number",
    });
  }
  if (errors.length > 0) {
    res.render("Signup/page1", { errors, name, email, account });
    console.log(errors);
  } else {
    User.findOne({ account }).then((user) => {
      if (user) {
        if (user.username) {
          errors.push({ msg: "You have already registered please login" });
          res.render("Signup/page1", { errors });
        } else {
          if (user.email == email && user.name == name) {
            let OTP = generateOTP();
            fs.writeFileSync(`${account}.txt`, OTP.toString(16));
            let mailOptions = {
              from: process.env.user,
              to: email,
              subject: "Smile Pay",
              text: `Your OTP for registeration is ${OTP} please do not share this with anyone. \nThank you for using Smile-pay`,
            };
            transporter.sendMail(mailOptions, (err, info) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Email Sent: " + info.response);
              }
            });
            errors.push({ msg: "OTP is sent on your registered Email ID" });
            res.render("Signup/page2", { errors });
          } else {
            if (user.name != name) {
              errors.push({
                msg: "Name is incorrect",
              });
              res.render("Signup/page1", { errors, account, name, email });
            } else {
              errors.push({
                msg:
                  "This Email address is not registered with your bank account",
              });
              res.render("Signup/page1", { errors, account, name, email });
            }
          }
        }
      } else {
        errors.push({ msg: "Account number is incorrect" });
        res.render("Signup/page1", { errors, account, name, email });
      }
    });
  }
});
module.exports = router;
