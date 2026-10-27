function updateDateTime() {
  const el = document.getElementById("datetime");
  if (el) {
    el.innerHTML = new Date().toLocaleString();
  }
}
updateDateTime();
setInterval(updateDateTime, 1000);