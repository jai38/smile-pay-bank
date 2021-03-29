const express = require("express");
const User = require("../../Models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Admin/deleteUser");
});

router.post("/", (req, res) => {
  let currentDelete = req.body;
  User.findOneAndDelete({ account: currentDelete.account });
});
module.exports = router;
