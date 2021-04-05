const express = require("express");
const User = require("../../Models/User");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const router = express.Router();
let errors = [];

router.get("/", (req, res) => {
  res.render("./Admin/addUser");
});
const sendEmail = (email, name) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  let mailOptions = {
    from: process.env.user,
    to: email,
    subject: "Welcome to Smile Pay",
    html: `
    <pre style='font-family: Arial, Helvetica, sans-serif;'>
You are successfully registered on Smile-Pay.
Thank you ${name}, for being a valued member of Smile Pay.
Please Sign Up to Connect to our website.
Link to our website : <a href="https://smile-pay.herokuapp.com/"> SmilePay </a>

<b>Kind regards,</b>
<b>Smile-Pay Team.</b>
    </pre>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};
router.post("/", (req, res) => {
  let {
    customerID,
    name,
    email,
    aadhar,
    pan,
    account,
    totalAmount,
    gender,
    DOB,
    mobileNo,
  } = req.body;
  customerID = customerID.toString();
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
      mobileNo,
    };
  };
  if (aadhar.length != 12) {
    errors = [];
    errors.push({ msg: "Aadhar should be of 12 digit" });
    res.render("./Admin/addUser", getData());
  } else if (pan.length != 10) {
    errors = [];
    errors.push({ msg: "Pan should be of 10 digit" });
    res.render("./Admin/addUser", getData());
  } else if (account.length != 10) {
    errors = [];
    errors.push({ msg: "Account should be of 10 digit" });
    res.render("./Admin/addUser", getData());
  } else if (!(gender == "M" || gender == "F")) {
    errors = [];
    errors.push({ msg: "Gender should be M or F" });
    res.render("./Admin/addUser", getData());
  } else if (DOB.length != 10) {
    errors = [];
    errors.push({ msg: "date should be in format of dd-mm-yyyy" });
    res.render("./Admin/addUser", getData());
  } else if (totalAmount <= 0) {
    errors = [];
    errors.push({ msg: "balance cannot be 0 or negative" });
    res.render("./Admin/addUser", getData());
  } else {
    User.find({
      $or: [{ customerID }, { email }, { aadhar }, { pan }, { account }],
    }).then((user) => {
      if (user[0]) {
        user = user[0];
        if (user.account == account) {
          errors = [];
          errors.push({ msg: "Account number is already in our database" });
          res.render("./Admin/addUser", getData());
        } else if (user.customerID == customerID) {
          errors = [];
          errors.push({ msg: "Customer ID is already in our database" });
          res.render("./Admin/addUser", getData());
        } else if (user.email == email) {
          errors = [];
          errors.push({ msg: "Email is already in our database" });
          res.render("./Admin/addUser", getData());
        } else if (user.aadhar == aadhar) {
          errors = [];
          errors.push({ msg: "Aadhar number is already in our database" });
          res.render("./Admin/addUser", getData());
        } else if (user.pan == pan) {
          errors = [];
          errors.push({ msg: "Pan number is already in our database" });
          res.render("./Admin/addUser", getData());
        } else if (user.mobileNo == mobileNo) {
          errors = [];
          errors.push({ msg: "Mobile number is already in our database" });
          res.render("./Admin/addUser", getData());
        }
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
          mobileNo,
        });
        user.save().then(() => {
          errors = [];
          errors.push({
            msg: "User added successfully,please relogin to see the changes",
          });
          sendEmail(email, name);
          res.render("Main/MainPage", { errors });
        });
      }
    });
  }
});

module.exports = router;
