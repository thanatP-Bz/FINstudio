const toggleButton = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".side-bar");
const showcase = document.querySelector(".showcase");
const logo = document.querySelector(".logo");
const navlinks = document.querySelector(".nav-links");
const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");
const themeBtn = document.querySelector(".theme-btn");

//header effect
window.addEventListener("DOMContentLoaded", () => {
  logo.classList.add("reveal-logo");
  navlinks.classList.add("reveal-nav");
});

toggleButton.addEventListener("click", () => {
  //toggle sidebar
  sidebar.classList.toggle("show-side_bar");
  showcase.classList.toggle("showcase-hidden");

  //hidden scroll bar and show bottom link
  if (sidebar.classList.contains("show-side_bar")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  //add and remove icons
  if (!icon1.classList.contains("hidden")) {
    icon1.classList.add("hidden");
    icon2.classList.remove("hidden");
  } else {
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
  }
});

//set back default icons
const reset = () => {
  const viewWidthUpdate = window.innerWidth;

  if (viewWidthUpdate > 800) {
    showcase.classList.remove("showcase-hidden");
    sidebar.classList.remove("show-side_bar");
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
    document.body.style.overflow = "visible";
  }
};
window.onresize = reset;
