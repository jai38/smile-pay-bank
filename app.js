const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/User");
const dotenv = require("dotenv").config();
const app = express();

const db = process.env.DB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
// app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use("/", require("./routes/Main/index"));
app.use("/signup/first", require("./routes/Signup/page1"));
app.use("/signup/second", require("./routes/Signup/page2"));
app.use("/signup/third", require("./routes/Signup/page3"));
app.use("/signup/face", require("./routes/Signup/face"));
app.use("/signup/sucessfull", require("./routes/Signup/sucessfull"));
app.use("/login/first", require("./routes/Login/page1"));
app.use("/login/dashboard", require("./routes/Login/dashboard"));
app.use("/login/forgetPassword", require("./routes/Login/forgetPassword"));
app.use("/login/recoverPassword", require("./routes/Login/recoverPassword"));
app.use("/login/face", require("./routes/Login/face"));
app.use("/login/paymentDone", require("./routes/Login/paymentDone"));
app.use("/login/paymentUndone", require("./routes/Login/paymentUndone"));
app.use("/login/payPin", require("./routes/Login/payPin"));
app.use("/updateUser", require("./routes/Admin/updateUser"));
app.use("/addUser", require("./routes/Admin/addUser"));
app.use("/adminDashboard", require("./routes/Admin/adminDashboard"));
app.use("/deleteUser", require("./routes/Admin/deleteUser"));
app.use("/listUsers", require("./routes/Admin/listUsers"));
app.use("/updatesignup", require("./routes/Admin/updatesignup"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
