let user = localStorage.getItem("currentUpdate");
user=JSON.parse(user)
console.log(user.name)
document.getElementById("customerID").value=user.customerID;
document.getElementById("account").value=user.account;
document.getElementById("gender").value=user.gender;
document.getElementById("DOB").value=user.DOB;
document.getElementById("email").value=user.email;
document.getElementById("pan").value=user.pan;
document.getElementById("totalAmount").value=user.balance;
document.getElementById("aadhar").value=user.aadhar;
document.getElementById("name").value=user.name;
// document.getElementById("name").value=user.name;