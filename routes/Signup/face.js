const express = require("express");
// const canvas = require('canvas');
const localStorage = require("local-storage");
const User = require("../../Models/User");
// const faceapi = require('face-api.js');
const getHashed = (hash) => {
  let hashed = "";
  for (let i = 0; i < hash.length; i++) {
    hashed +=
      String.fromCharCode(hash[i].charCodeAt(0) + 17) +
      String.fromCharCode(Math.floor(Math.random() * 85) + 40);
  }
  return hashed;
};
const router = express.Router();
router.get("/", (req, res) => {
  res.render("./Signup/face");
});
router.post("/", (req, res) => {
  let { account, username, password, pin, imgLink } = req.body;
  let errors = [];
  password = getHashed(password);
  pin = getHashed(pin);
  User.findOneAndUpdate({ account }, { username, password, pin, imgLink }).then(
    () => {
      res.render("Signup/sucessfull");
    }
  );
});
module.exports = router;
