const modifyData = async () => {
  const customerID = document.getElementById("customerID").value;
  const account = document.getElementById("account").value;
  const pan = document.getElementById("pan").value;
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const DOB = document.getElementById("DOB").value;
  const email = document.getElementById("email").value;
  const aadhar = document.getElementById("aadhar").value;
  const totalAmount = document.getElementById("totalAmount").value;
  let allUsers = JSON.parse(localStorage.getItem("allUsers"));
  await allUsers.forEach((c) => {
    if (c.customerID == customerID) {
      c = {
        customerID,
        account,
        pan,
        name,
        gender,
        DOB,
        email,
        aadhar,
        totalAmount,
      };
    }
  });
  console.log(allUsers);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
};
// let user = localStorage.getItem("currentUpdate");
// user=JSON.parse(user)

// changeDisplay= () => {
//     document.getElementById("customerID").style.display="block";
//     document.getElementById("customerID1").style.display="none";
//     document.getElementById("customerID").innerHTML=user.customerID;
// }
getFilledData = () =>{
  let user = localStorage.getItem("currentUpdate");
user = JSON.parse(user);
let date = user.DOB;
user.DOB = new Date(user.DOB).toISOString().substring(0, 10);
// console.log(user.name);
document.getElementById("customerID1").innerHTML = user.customerID;
document.getElementById("account1").innerHTML = user.account;
document.getElementById("gender1").innerHTML = user.gender;
document.getElementById("DOB1").innerHTML = user.DOB;
document.getElementById("email1").innerHTML = user.email;
document.getElementById("pan1").innerHTML = user.pan;
document.getElementById("totalAmount1").innerHTML = user.balance;
document.getElementById("aadhar1").innerHTML = user.aadhar;
document.getElementById("name1").innerHTML = user.name;
document.getElementById("customerID").value = user.customerID;
document.getElementById("account").value = user.account;
document.getElementById("pan").value = user.pan;
document.getElementById("name").value = user.name;
document.getElementById("gender").value = user.gender;
// console.log(user.DOB);
document.getElementById("DOB").value = user.DOB;
document.getElementById("email").value = user.email;
document.getElementById("aadhar").value = user.aadhar;
document.getElementById("totalAmount").value = user.balance;
document.getElementById("mobileNo").value = user.mobileNo;
// document.getElementById("name").value=user.name;

}
// let user = localStorage.getItem("currentUpdate");
// user = JSON.parse(user);
// let date = user.DOB;
// user.DOB = new Date(user.DOB).toISOString().substring(0, 10);
// // console.log(user.name);
// document.getElementById("customerID1").innerHTML = user.customerID;
// document.getElementById("account1").innerHTML = user.account;
// document.getElementById("gender1").innerHTML = user.gender;
// document.getElementById("DOB1").innerHTML = user.DOB;
// document.getElementById("email1").innerHTML = user.email;
// document.getElementById("pan1").innerHTML = user.pan;
// document.getElementById("totalAmount1").innerHTML = user.balance;
// document.getElementById("aadhar1").innerHTML = user.aadhar;
// document.getElementById("name1").innerHTML = user.name;
// document.getElementById("customerID").value = user.customerID;
// document.getElementById("account").value = user.account;
// document.getElementById("pan").value = user.pan;
// document.getElementById("name").value = user.name;
// document.getElementById("gender").value = user.gender;
// // console.log(user.DOB);
// document.getElementById("DOB").value = user.DOB;
// document.getElementById("email").value = user.email;
// document.getElementById("aadhar").value = user.aadhar;
// document.getElementById("totalAmount").value = user.balance;
// // document.getElementById("name").value=user.name;
