currentDelete = (account) => {
  let result = [];
  result = localStorage.getItem("allUsers");
  result = JSON.parse(result);
  result.forEach((c) => {
    if (c.account == account) {
      localStorage.setItem("currentDelete", JSON.stringify(c));
      console.log(c);
    }
  });
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
        <th scope="col">${c.DOB}</th>
        <th scope="col">${c.email}</th>
        <th scope="col">${c.aadhar}</th>
        <th scope="col">${c.pan}</th>
        <th scope="col">${c.balance}</th>
        <th scope="col"><button class="btn btn-dark" onclick="currentDelete(${c.account})>DELETE</button></th>
      </tr>`;
    console.log(c.email);
  });
  tableDetails.innerHTML = tableHTML;
};
