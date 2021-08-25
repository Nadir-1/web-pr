var messi = document.querySelector(".messi");
var cr7 = document.querySelector(".cr7");
var vs = document.querySelector(".vs");
var det = document.querySelectorAll(".detail");
// Gsap animation vote page
gsap.from(messi, { duration: 1, y: "500", opacity: 0 });
gsap.from(cr7, { duration: 1, y: "-500", opacity: 0 });
gsap.from(vs, { duration: 2, opacity: "0" });
//
messi.addEventListener("mouseover", () => {
  gsap.to(vs, { duration: 0.5, opacity: "0" });
  det[0].style.display = "block";
});
messi.addEventListener("mouseout", () => {
  gsap.to(vs, { duration: 0.5, opacity: "1" });
  det[0].style.display = "none";
});
cr7.addEventListener("mouseover", () => {
  gsap.to(vs, { duration: 0.5, opacity: "0" });
  det[1].style.display = "block";
});
cr7.addEventListener("mouseout", () => {
  gsap.to(vs, { duration: 0.5, opacity: "1" });
  det[1].style.display = "none";
});
