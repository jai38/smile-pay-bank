function resetData() {
  localStorage.clear();
  localStorage.setItem("imageCount", "2");
  const allUsers = document.getElementById("allUsers").value;
  localStorage.setItem("allUsers", allUsers);
}
