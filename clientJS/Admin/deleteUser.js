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
        <th scope="col"><button class="btn btn-dark">DELETE</button></th>
      </tr>`;
    console.log(c.email);
  });
  tableDetails.innerHTML = tableHTML;
};
