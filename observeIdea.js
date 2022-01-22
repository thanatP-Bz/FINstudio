const idea = document.querySelector(".idea");
const gridBox = document.querySelectorAll(".grid-box");

const revealBox = (entries) => {
  entries.forEach((item) => {
    console.log(item);
  });
};

const ideaObserver = new IntersectionObserver(revealBox, {
  root: null,
  threshold: 0,
});
ideaObserver.observe(idea);
