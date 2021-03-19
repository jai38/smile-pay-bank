updateUser = () => {
  let allUsers = localStorage.getItem("allUsers");
  allUsers = JSON.parse(allUsers);
  console.log(allUsers);
  let tableHTML = "";
  let tableDetails = document.getElementById("tableData");
  allUsers.forEach((c) => {
    tableHTML += `<tr>
        <th scope="col">${c.customerID}</th>
        <th scope="col">${c.account}</th>
        <th scope="col">${c.name}</th>
        <th scope="col">${c.gender}</th>
        <th scope="col">${c.DOB}</th>
        <th scope="col">${c.number}</th>
        <th scope="col">${c.aadhar}</th>
        <th scope="col">${c.pan}</th>
        <th scope="col">${c.balance}</th>
        <th scope="col"><button>UPDATE</button></th>
      </tr>`;
  });
  console.log(tableHTML);
  tableDetails.innerHTML = tableHTML;
};
