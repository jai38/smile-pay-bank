const express = require("express");
const User = require("../../Models/User");
const router = express.Router();
let errrors = [];
router.get("/", (req, res) => {
  res.render("./Admin/addUser");
});

router.post("/", (req, res) => {
  const {
    customerID,
    name,
    number,
    aadhar,
    pan,
    account,
    totalAmount,
    gender,
    DOB,
  } = req.body;
  User.findOne({ account }).then((user) => {
    if (user) {
      res.render("./Admin/addUser", {
        customerID,
        name,
        number,
        aadhar,
        pan,
        account,
        totalAmount,
        gender,
        DOB,
        errors,
      });
    }
  });
});
module.exports = router;
