var lik = document.querySelectorAll(".like");
var disl = document.querySelectorAll(".dislike");
var comm = document.querySelectorAll(".comment");
lik.forEach(function (item) {
  item.addEventListener("click", function () {
    var state = getComputedStyle(item).color;
    var next = item.nextElementSibling;
    var nextState = getComputedStyle(next).color;
    if (state == "rgb(255, 255, 255)") {
      if (nextState == "rgb(255, 0, 0)") {
        next.style.color = "white";
      }
      item.style.color = "blue";
    } else {
      item.style.color = "white";
    }
  });
});
disl.forEach(function (item) {
  item.addEventListener("click", function () {
    var state = getComputedStyle(item).color;
    var previous = item.previousElementSibling;
    var previousState = getComputedStyle(previous).color;
    if (state == "rgb(255, 255, 255)") {
      if ((previousState = "rgb(0, 0, 255)")) {
        previous.style.color = "white";
      }
      item.style.color = "red";
    } else {
      item.style.color = "white";
    }
  });
});
comm.forEach(function (item) {
  item.addEventListener("click", function () {
    var state = getComputedStyle(item).color;
    if (state == "rgb(255, 255, 255)") {
      item.style.color = "green";
    } else {
      item.style.color = "white";
    }
  });
});
