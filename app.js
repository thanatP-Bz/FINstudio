const toggleButton = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".side-bar");
const showcase = document.querySelector(".showcase");

const logo = document.querySelector(".logo");
const navlinks = document.querySelector(".nav-links");

const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");

window.addEventListener("DOMContentLoaded", () => {
  showcase.classList.add("reveal-showcase");
  logo.classList.add("reveal-logo");
  navlinks.classList.add("reveal-nav");
});

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("show-side_bar");
  showcase.classList.toggle("showcase-hidden");

  if (!icon1.classList.contains("hidden")) {
    icon1.classList.add("hidden");
    icon2.classList.remove("hidden");
  } else {
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
  }
});

const reset = () => {
  const viewWidthUpdate = window.innerWidth;

  if (viewWidthUpdate > 800) {
    showcase.classList.remove("showcase-hidden");
    sidebar.classList.remove("show-side_bar");
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
  }
};
window.onresize = reset;
