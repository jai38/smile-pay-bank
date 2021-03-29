remove = () => {
  let currentDelete = localStorage.getItem("currentDelete");
  console.log(currentDelete);
  document.getElementById("remove").value = currentDelete;
};
