const express = require("express");
const User = require("../../Models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Admin/updatesignup");
});

// router.post("/" , (req,res) => {
//   const {customerID,email,account,name,gender,aadhar,pan,balance}=req.body;
//   let errors = [];
//   if (!name || !email || !account) {
//     errors.push({ msg: "Please fill all the details" });
//   }
//   if (account.length != 10) {
//     errors.push({
//       msg: "Please enter 10 digit account number",
//     });
//   }
//   if (errors.length > 0) {
//     res.render("Signup/page1", { errors, name, email, account });
//     console.log(errors);
//   } 
// })

module.exports = router;
