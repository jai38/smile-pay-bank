const express = require("express");
const User = require("../../Models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Admin/updatesignup");
});

module.exports = router;
