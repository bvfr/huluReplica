

/*function openItem() {
  document.getElementById('add-on').style.display = 'block';
}*/


function openItem(target) {
  document.getElementById("add-on").style.display = "block";
  target.style.display = "none";
}

function hideItem(target) {
  document.getElementById("add-on").style.display = "none";
  document.getElementById("plan-add-on-button").style.display = "flex";
}
