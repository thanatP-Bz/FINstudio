/* observe idea*/
const revealIdea = document.querySelectorAll(".reveal-idea");

const revealBox = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("reveal-active");
    }
    observer.unobserve(entry.target);
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

const topLInkObserve = new IntersectionObserver(revealTopLInk, {
  threshold: 0,
  rootMargin: `-300px 0px 0px 0px`,
});

topLInkObserve.observe(header);

// observe content
const about = document.querySelector(".about-us_container");
const textContainer = document.querySelector(".about-us_container");
const imageContainer = document.querySelector(".content-image");

const revealContent = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    textContainer.classList.add("about-us_active");
    imageContainer.classList.add("content-image_active");
  }
  observer.unobserve(entry.target);
};

const textObserve = new IntersectionObserver(revealContent, {
  threshold: 0.15,
});

textObserve.observe(about);

//obsever Concept
const concept = document.querySelector(".concept");
const conceptContainer = document.querySelector(".text-concept_container");
const conceptImg1 = document.querySelector(".concept-image_image-1");
const conceptImg2 = document.querySelector(".concept-image_image-2");

const revealConcept = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    conceptContainer.classList.add("text-concept_container-active");
    conceptImg1.classList.add("concept-image_1-active");
    conceptImg2.classList.add("concept-image-2-active");
  }
  observer.unobserve(entry.target);
};

const observerConcept = new IntersectionObserver(revealConcept, {
  threshold: 0.4,
});

observerConcept.observe(concept);

//observe projects
const projects = document.querySelector(".projects");
const projectContainer = document.querySelector(".project-grid__container");
const projectHeader = document.querySelector(".project-header");

const revealProjects = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    projectContainer.classList.add("project-active");
    projectHeader.classList.add("project-active");
  }
  observer.unobserve(entry.target);
};

const observeProjects = new IntersectionObserver(revealProjects, {
  threshold: 0.2,
});

observeProjects.observe(projects);

//observe profile
const profile = document.querySelector(".profile");
const profileImg = document.querySelector(".proflie-image_container");
const profileContent = document.querySelector(".profile-text_container");

const revealProfile = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    profileImg.classList.add("profile-active");
    profileContent.classList.add("profile-active");
  }
  observer.unobserve(entry.target);
};

const observeProfile = new IntersectionObserver(revealProfile, {
  threshold: 0.4,
});

observeProfile.observe(profile);

//oberve news
const newsBox = document.querySelectorAll(".news-box");
const newH1 = document.querySelector(".news-h1");

const revealNewsBox = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("news-box__active");
      newH1.classList.add("news-h1__active");
    }
  });
};

const observeNews = new IntersectionObserver(revealNewsBox, {
  threshold: 0,
});

newsBox.forEach((item) => {
  observeNews.observe(item);
});
