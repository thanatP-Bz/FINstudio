//obsverve top-link
const header = document.getElementById("header");
const topLink = document.querySelector(".top-link");

const revealTopLInk = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) topLink.classList.add("top-link_active");
  else topLink.classList.remove("top-link_active");
};

const topLInkObserve = new IntersectionObserver(revealTopLInk, {
  threshold: 0,
  rootMargin: `-300px 0px 0px 0px`,
});

topLInkObserve.observe(header);

//observe lightbox
const lightBox = document.querySelectorAll(".light-box__img");

const revealLightBox = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("show-lightbox");
    }
  });
};

const observeLightbox = new IntersectionObserver(revealLightBox, {
  threshold: 0.1,
});

lightBox.forEach((item) => {
  observeLightbox.observe(item);
});

//obseve btn
const galleryBtn = document.querySelector(".gallery-btn");

const revealBtn = (entries) => {
  [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    galleryBtn.classList.add("show-btn");
  }
};

const observeBtn = new IntersectionObserver(revealBtn, {
  threshold: 0.3,
});

observeBtn.observe(galleryBtn);
