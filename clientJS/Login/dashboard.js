let flag = false;
function getData() {
  localStorage.setItem(
    "amountDebit",
    document.getElementById("amount-text").value
  );
  localStorage.setItem(
    "accountOfRecipient",
    document.getElementById("account").value
  );
}
localStorage.setItem("retryLeft", "3");
if (
  localStorage.getItem("loggedInUser") == null ||
  localStorage.getItem("loggedInUser") == ""
) {
  var loggedInUser = JSON.parse(document.getElementById("data").innerHTML);
  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
} else {
  var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
}
console.log(loggedInUser.name);
const totalAmount = loggedInUser.totalAmount;
document.getElementById("currentBalance").value = totalAmount;
console.log(document.getElementById("currentBalance").value);
function displayBalance() {
  if (!flag) {
    let amountFormatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(totalAmount);
    document.getElementById("amount").style.display = "block";
    document.getElementById("amount").innerHTML = amountFormatted;
    document.getElementById("balance-text").innerHTML = "Current Balance";
    console.log(totalAmount);
    // document.getElementById('amount').innerHTML = '$ ' + format.format(TotalAmount)
    flag = true;
  } else {
    document.getElementById("amount").style.display = "none";
    document.getElementById("balance-text").innerHTML = "Check Balance";
    flag = false;
  }
}
