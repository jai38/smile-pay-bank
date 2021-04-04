const modifyData = async () => {
  let allUsers = document.getElementById("allUsers").value;
  if (allUsers.length > 10) localStorage.setItem("allUsers", allUsers);
  window.location.reload();
};
currentDelete = (account) => {
  let result = [];
  result = localStorage.getItem("allUsers");
  result = JSON.parse(result);
  result.forEach((c) => {
    if (c.account == account) {
      localStorage.setItem("currentDelete", JSON.stringify(c));
      document.getElementById("remove").value = JSON.stringify(c);
    }
  });
  document.getElementById("deleteBox").style.display = "block";
};

deleteUser = () => {
  let allUsers = localStorage.getItem("allUsers");
  allUsers = JSON.parse(allUsers);
  let tableHTML = "";
  let tableDetails = document.getElementById("tableData");
  allUsers.forEach((c) => {
    if (c.customerID != undefined)
      tableHTML += `<tr>
      <th scope="col">${c.customerID}</th>
      <th scope="col">${c.account}</th>
      <th scope="col">${c.name}</th>
      <th scope="col">${c.gender}</th>
      <th scope="col">${new Date(c.DOB).toLocaleDateString()}</th>
      <th scope="col">${c.email}</th>
      <th scope="col">${c.aadhar}</th>
      <th scope="col">${c.pan}</th>
      <th scope="col">${c.balance}</th>
      <th scope="col"><button class="btn btn-dark" type="button" onclick="currentDelete(${
        c.account
      })">DELETE</button></th>
    </tr>`;
  });
  tableDetails.innerHTML = tableHTML;
};
