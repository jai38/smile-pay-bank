const express = require("express");
const User = require("../../Models/User");
const router = express.Router();
let errors = [];

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
    mobileNo,
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
      mobileNo,
    };
  };
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
  if (mobileNo.length != 10) {
    errors = [];
    errors.push({
      msg: "Invalid Mobile Number",
    });
    res.render("./Admin/updatesignup", getData());
  }
  if (totalAmount <= 0) {
    errors = [];
    errors.push({
      msg: "Balance cannot be negative or 0",
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
        } else {
          User.findOne({ email }).then((user) => {
            if (user) {
              errors = [];
              errors.push({ msg: "Email already exist" });
              res.render("./Admin/updatesignup", getData());
            } else {
              User.findOne({ pan }).then((user) => {
                if (user) {
                  errors = [];
                  errors.push({ msg: "Pan no already exist" });
                  res.render("./Admin/updatesignup", getData());
                } else {
                  User.findOne({ aadhar }).then((user) => {
                    if (user) {
                      errors = [];
                      errors.push({ msg: "Aadhar no already exist" });
                      res.render("./Admin/updatesignup", getData());
                    } else {
                      User.findOne({ mobileNo }).then((user) => {
                        if (user) {
                          errors = [];
                          errors.push({ msg: "Mobile no already exist" });
                          res.render("./Admin/updatesignup", getData());
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
                          console.log(user);
                          user.save().then(() => {
                            errors = [];
                            errors.push({
                              msg:
                                "Updated Succcessfully, click on the Refresh Button to get the changes",
                            });
                            let allUsers = [];
                            User.find().then((users) => {
                              users.forEach((c) => {
                                let currentUser = {
                                  customerID: c.customerID,
                                  account: c.account,
                                  name: c.name,
                                  gender: c.gender,
                                  DOB: c.DOB,
                                  mobileNo: c.mobileNo,
                                  email: c.email,
                                  aadhar: c.aadhar,
                                  pan: c.pan,
                                  balance: c.totalAmount,
                                };
                                allUsers.push(currentUser);
                              });
                              res.render("Admin/updateUser", {
                                errors,
                                allUsers: JSON.stringify(allUsers),
                              });
                            });
                          });
                        }
                      });
                      // const user = new User({
                      //   customerID,
                      //   name,
                      //   email,
                      //   aadhar,
                      //   pan,
                      //   account,
                      //   totalAmount,
                      //   gender,
                      //   DOB,
                      // });
                      // console.log(user);
                      // user.save().then(() => {
                      //   errors = [];
                      //   errors.push({
                      //     msg:
                      //       "Updated Succcessfully, click on the Refresh Button to get the changes",
                      //   });
                      //   let allUsers = [];
                      //   User.find().then((users) => {
                      //     users.forEach((c) => {
                      //       let currentUser = {
                      //         customerID: c.customerID,
                      //         account: c.account,
                      //         name: c.name,
                      //         gender: c.gender,
                      //         DOB: c.DOB,
                      //         email: c.email,
                      //         aadhar: c.aadhar,
                      //         pan: c.pan,
                      //         balance: c.totalAmount,
                      //       };
                      //       allUsers.push(currentUser);
                      //     });
                      //     res.render("Admin/updateUser", {
                      //       errors,
                      //       allUsers: JSON.stringify(allUsers),
                      //     });
                      //   });
                      // });
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

module.exports = router;
