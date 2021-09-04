const modeBtn = document.querySelector(".mode");
const icon = document.querySelector(".fa-moon-o");
const html = document.querySelector("html");

modeBtn.addEventListener("click", function () {
  //   console.log(html.dataset.themeColor);
  if (html.dataset.themeColor === "light") {
    html.dataset.themeColor = "dark";
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
  } else {
    html.dataset.themeColor = "light";
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
  }
});

function scrollUp() {
  const scrollUp = document.querySelector(".scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show");
  else scrollUp.classList.remove("show");
}

window.addEventListener("scroll", scrollUp);
