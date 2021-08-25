var da = document.getElementById("da");
var ho = document.getElementById("ho");
var mi = document.getElementById("mi");
var se = document.getElementById("se");
var title = document.getElementById("heading");
var cup = document.getElementById("cupo");
var timeBoxes = document.querySelectorAll("#box");
// Time left
window.onload = function refresh() {
  var now = new Date().getTime();
  const WC2022 = new Date("2022-11-21");
  remain = WC2022 - now;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var d = Math.floor(remain / day);
  var h = Math.floor((remain % day) / hour);
  var m = Math.floor((remain % hour) / minute);
  var s = Math.floor((remain % minute) / second);
  da.textContent = d;
  ho.textContent = h;
  mi.textContent = m;
  se.textContent = s;
  setInterval(() => {
    refresh();
  }, 1000);
};
// Gsap animation event page
gsap.from(cup, { duration: 0.8, height: "0" });
gsap.from(title, { duration: 1, opacity: "0", ease: "expo.in" });
gsap.from(timeBoxes, {
  duration: 1,
  delay: 1,
  y: "130",
  opacity: 0,
  stagger: 0.25,
});
