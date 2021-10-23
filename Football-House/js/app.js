const humberger = document.getElementById("humberger");
const canX = document.getElementById("cancel");
const items = document.querySelector(".items ");

humberger.addEventListener("click", () => {
  items.classList.add("active");
  humberger.style.display = "none";
  canX.style.display = "block";
});
canX.addEventListener("click", () => {
  items.classList.remove("active");
  humberger.style.display = "block";
  canX.style.display = "none";
});
