const express = require("express");
const User = require("../../Models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Admin/updatesignup");
});

router.post("/" , (req,res) => {
  const {customerID,email,account,name,gender,aadhar,pan,balance}=req.body;
  let errors = [];
  if (!name || !email || !account) {
    errors.push({ msg: "Please fill all the details" });
  }
  if (account.length != 10) {
    errors.push({
      msg: "Please enter 10 digit account number",
    });
  }
  if (errors.length > 0) {
    res.render("/updatesignup", { errors, name, email, account });
    console.log(errors);
  }else{
    User.findOneAndDelete({customerID}).then(() => {
      User.findOne({account}).then(user=>{
        if(user)
        errors.push({msg: "Account no already exist"})
        else{
          User.findOne({email}).then(user => {
            if(user)
            errors.push({msg: "email already exist"})
            else{
              User.findOne({pan}).then(user => {
                if(user)
                errors.push({msg:"Pan no already exist"})
                else{
                  User.findOne({aadhar}).then(user => {
                    if(user)
                    errors.push({msg:"aadhar no already exist"})
                    else{
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
                      user.save().then(()=>{
                        errors.push({msg: "Updated Succcessfully"})
                        res.render("Main/MainPage")
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    })
  }
})

module.exports = router;
