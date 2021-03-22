const getData = () => {
  const allUsers = document.getElementById("allUsers").value;
  localStorage.setItem("allUsers", allUsers);
};
