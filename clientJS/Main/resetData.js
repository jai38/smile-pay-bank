function resetData() {
  const allUsers = document.getElementById("allUsers").value;
  console.log(allUsers);
  if (allUsers.length >= 10) localStorage.setItem("allUsers", allUsers);
}
