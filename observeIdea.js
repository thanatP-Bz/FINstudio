const idea = document.querySelector(".idea");
const gridBox = document.querySelectorAll(".grid-box");
const rect = idea.getBoundingClientRect();
console.log(rect);

const revealBox = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("reveal-hidden");
    }
  });
};

const ideaObserver = new IntersectionObserver(revealBox, {
  rootMargin: `0px 0px -150px 0px`,
  threshold: 1,
});

gridBox.forEach((item) => {
  ideaObserver.observe(item);
  item.classList.add("reveal-hidden");
});
