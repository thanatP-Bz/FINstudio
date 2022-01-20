const toggleButton = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".side-bar");
const showcase = document.querySelector(".showcase");

const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("show-side_bar");
  showcase.classList.toggle("showcase-hidden");
  /*   icon1.classList.add("hidden"); */
  if (!icon1.classList.contains("hidden")) {
    icon1.classList.add("hidden");
    icon2.classList.remove("hidden");
  } else {
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
  }
});
