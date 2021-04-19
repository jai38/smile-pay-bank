const modifyData = async () => {
  let allUsers = document.getElementById("allUsers").value;
  if (allUsers.length > 10) localStorage.setItem("allUsers", allUsers);
  window.location.reload();
};
getUpdate = (customerID) => {
  let result = [];
  result = localStorage.getItem("allUsers");
  result = JSON.parse(result);
  result.forEach((c) => {
    if (c.customerID == customerID) {
      localStorage.setItem("currentUpdate", JSON.stringify(c));
    }
  });
  window.location.href = "/updatesignup";
};

updateUser = () => {
  let allUsers = localStorage.getItem("allUsers");
  allUsers = JSON.parse(allUsers);
  let tableHTML = "";
  let tableDetails = document.getElementById("tableData");
  allUsers.sort((a, b) => a.customerID - b.customerID);
  allUsers.forEach((c) => {
    if (c.customerID != undefined) {
      tableHTML += `<tr>
        <th scope="col">${c.customerID}</th>
        <th scope="col">${c.account}</th>
        <th scope="col">${c.name}</th>
        <th scope="col">${c.gender}</th>
        <th scope="col">${new Date(c.DOB).toLocaleDateString()}</th>
        <th scope="col">${c.mobileNo}</th>
        <th scope="col">${c.email}</th>
        <th scope="col">${c.aadhar}</th>
        <th scope="col">${c.pan.toUpperCase()}</th>
        <th scope="col">${c.balance}</th>
        <th scope="col"><button class="btn btn-dark" onclick="getUpdate(${
          c.customerID
        })">UPDATE</button></th>
      </tr>`;
    }
  });
  tableDetails.innerHTML = tableHTML;
};
