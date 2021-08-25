var humberger = document.getElementById("humberger");
var items = document.querySelector(".items ");
var canX = document.querySelector(".cancel");

humberger.addEventListener("click", () => {
  items.classList.add("active");
  humberger.classList.add("hide");
  canX.classList.add("show");
});
canX.addEventListener("click", () => {
  items.classList.remove("active");
  canX.classList.remove("show");
  humberger.classList.remove("hide");
});
