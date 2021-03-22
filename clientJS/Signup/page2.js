let flag = false;
var id = 1;
var secondDetails = {};
function getDetails() {
  secondDetails.otp = document.getElementById("otp").value;
}
function checkDetails() {
  let firstDetails = JSON.parse(localStorage.getItem("firstDetails"));
  document.getElementById("account").value = firstDetails.account;
  if (localStorage.getItem("secondDetails") != null) {
    secondDetails = JSON.parse(localStorage.getItem("secondDetails"));
    document.getElementById("otp").value = secondDetails.otp;
  }
}
