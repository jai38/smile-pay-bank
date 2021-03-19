const express = require("express");
const User = require("../../Models/User");
const localStorage = require("local-storage");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Signup/page2");
});
router.post("/", async (req, res) => {
  let errors = [];
  const { otp } = req.body;
  if (!otp) {
    errors.push({ msg: "Please fill all the details" });
    res.render("Signup/page2", { otp, errors });
    res.end();
  }
  if (otp != 4556) {
    errors.push({ msg: "Otp is wrong please try again" });
    res.render("Signup/page2", { otp, errors });
    res.end();
  }
  if (errors.length == 0) res.redirect("third");
});

module.exports = router;
