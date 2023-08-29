const modeBtn = document.querySelector(".theme-switch");
const icon = document.querySelector(".fa-moon-o");
const html = document.querySelector("html");
const body = document.querySelector("body");
const areaCV = document.querySelector(".container");
const pdfBtn = document.querySelector("#download-resume");

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

let opt = {
  margin: 0,
  filename: "CV_SABILILLAH.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

pdfBtn.addEventListener("click", function () {
  body.classList.add("scale-cv");
  // window.print()

  setTimeout(() => {
    // html2pdf(areaCV, opt);
  }, 1000);

  // if (html.dataset.themeColor === "dark") {
  //   html.dataset.themeColor = "light";
  //   icon.classList.remove("fa-sun-o");
  //   icon.classList.add("fa-moon-o");
  // }

  // setTimeout(() => {
  //   body.classList.remove("scale-cv");
  // }, 10000);
});
