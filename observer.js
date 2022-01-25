/* observe idea*/
const revealIdea = document.querySelectorAll(".reveal-idea");

const revealBox = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("reveal-active");
    }
  });
};

const ideaObserve = new IntersectionObserver(revealBox, {
  threshold: 0.1,
});

revealIdea.forEach((item) => {
  ideaObserve.observe(item);
});

//obsverve top-link
const header = document.getElementById("header");
const topLink = document.querySelector(".top-link");

const revealTopLInk = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) topLink.classList.add("top-link_active");
  else topLink.classList.remove("top-link_active");
};

const rect = header.getBoundingClientRect();
console.log(rect);

const topLInkObserve = new IntersectionObserver(revealTopLInk, {
  threshold: 0,
  root: null,
  rootMargin: `-600px 0px 0px 0px`,
});

topLInkObserve.observe(header);
