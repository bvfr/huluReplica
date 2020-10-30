function openItem(target) {
  document.getElementById("add-on").style.display = "block";
  target.style.display = "none";
}

function hideItem(target) {
  document.getElementById("add-on").style.display = "none";
  document.getElementById("plan-add-on-button").style.display = "flex";
}

function openHideMobile(target, arrow) {
  if (target.style.display === "none") {
    arrow.style.transform = "rotateX(180deg)";
    target.style.display = "block";
  } else {
    arrow.style.transform = "rotateX(0deg)";
    target.style.display = "none";
  }
}
