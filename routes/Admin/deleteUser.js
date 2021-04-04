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
    errors.push({
      msg:
        "User Deleted Successfully, click on the Refresh Button to get the changes",
    });
    res.render("./Admin/deleteUser", {
      errors,
    });
  });
});
module.exports = router;
