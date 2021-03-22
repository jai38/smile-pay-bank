const express = require("express");
const User = require("../../Models/User");
const localStorage = require("local-storage");
const router = express.Router();
const fs = require("fs");
router.get("/", (req, res) => {
  res.render("./Signup/page2");
});
router.post("/", async (req, res) => {
  let errors = [];
  const { otp, account } = req.body;
  const OriginalOTP = parseInt(fs.readFileSync(`${account}.txt`, "utf-8"), 16);
  if (!otp) {
    errors.push({ msg: "Please fill all the details" });
    res.render("Signup/page2", { otp, errors });
    res.end();
  }
  if (otp != OriginalOTP) {
    errors.push({ msg: "Otp is wrong please try again" });
    res.render("Signup/page2", { otp, errors });
    res.end();
  }
  if (errors.length == 0) res.redirect("third");
});

module.exports = router;
