const express = require("express");
const User = require("../../Models/User");
const router = express.Router();
let errors=[]

router.get("/", (req, res) => {
  res.render("./Admin/updatesignup");
});

router.post("/", (req, res) => {
  const {
    customerID,
    email,
    account,
    name,
    gender,
    aadhar,
    pan,
    totalAmount,
    DOB,
  } = req.body;
  getData = () => {
    return {
    customerID,
    email,
    account,
    name,
    gender,
    aadhar,
    pan,
    totalAmount,
    DOB,
    errors,
    };
  }
  let errors = [];
  if (!name || !email || !account) {
    errors = [];
    errors.push({ msg: "Please fill all the details" });
    res.render("./Admin/updatesignup", getData());
  }
  if (account.length != 10) {
    errors = [];
    errors.push({
      msg: "Please enter 10 digit account number",
    });
    res.render("./Admin/updatesignup", getData());
  }
  if(totalAmount < 0)
  {
    errors = [];
    errors.push({
      msg: "Balance cannot be negative",
    });
    res.render("./Admin/updatesignup", getData());
  }
  if (errors.length > 0) {
    res.render("/updatesignup", { errors, name, email, account });
    console.log(errors);
  } else {
    User.findOneAndDelete({ customerID }).then(() => {
      User.findOne({ account }).then((user) => {
        if (user) { 
          errors.push({ msg: "Account no already exist" });
          res.render("./Admin/updatesignup", getData());
        }
        else {
          User.findOne({ email }).then((user) => {
            if (user) {
              errors = [];
              errors.push({ msg: "email already exist" });
              res.render("./Admin/updatesignup", getData());
            }
            else {
              User.findOne({ pan }).then((user) => {
                if (user) { 
                  errors = [];
                  errors.push({ msg: "Pan no already exist" });
                  res.render("./Admin/updatesignup", getData());
                }
                else {
                  User.findOne({ aadhar }).then((user) => {
                    if (user) {
                      errors = [];
                      errors.push({ msg: "aadhar no already exist" });
                      res.render("./Admin/updatesignup", getData());
                    }
                    else {
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
                      });
                      console.log(user);
                      user.save().then(() => {
                        errors.push({
                          msg:
                            "Updated Succcessfully, You have been logged out",
                        });
                        res.render("Main/MainPage", { errors });
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    });
  }
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
//   }
// })

module.exports = router;
