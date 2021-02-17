let body = document.body;
let toggleBtn = document.querySelector(".toggle-btn");

let currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  body.classList.add("dark-theme");
}
toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  toggleBtn.style.transform = "rotate(180deg)";

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

function hamburgerMenu() {
  var x = document.getElementById("bar");
  var menu = document.getElementById("menu");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    x.style.position = "absolute";
    menu.style.transform = "rotate(0deg)";
  } else {
    x.style.visibility = "visible";
    x.style.position = "relative";
    menu.style.transform = "rotate(-90deg)";
  }
}
