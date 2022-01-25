const toggleButton = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".side-bar");
const showcase = document.querySelector(".showcase");

const logo = document.querySelector(".logo");
const navlinks = document.querySelector(".nav-links");

const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");

const bottomLink = document.querySelector(".bottom-link");

//header effect
window.addEventListener("DOMContentLoaded", () => {
  showcase.classList.add("reveal-showcase");
  logo.classList.add("reveal-logo");
  navlinks.classList.add("reveal-nav");
});

toggleButton.addEventListener("click", () => {
  //toggle sidebar
  sidebar.classList.toggle("show-side_bar");
  showcase.classList.toggle("showcase-hidden");
  bottomLink.classList.add("bottom-link_active");

  //hidden scroll bar and show bottom link
  if (sidebar.classList.contains("show-side_bar")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
    bottomLink.classList.remove("bottom-link_active");
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
    bottomLink.classList.remove("bottom-link_active");
  }
};
window.onresize = reset;
