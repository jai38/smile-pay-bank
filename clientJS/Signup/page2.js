let flag = false;
var id = 1;
var secondDetails = {};
function getDetails() {
  secondDetails.otp = document.getElementById("otp").value;
}
function checkDetails() {
  if (localStorage.getItem("secondDetails") != null) {
    secondDetails = JSON.parse(localStorage.getItem("secondDetails"));
    document.getElementById("otp").value = secondDetails.otp;
  }
}
