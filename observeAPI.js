const header = document.getElementById("header");
//1.create new intersection and store in variable
//then call the function .observe the element where we want
//2.create call back function
//3.create obsOptions it is an object
//4.pass to callback as the first parameter
//5.pass the options as the second parameter
//6.in the options root is target intersecting
//7.threshold is the % of intersection
//8.the callback will get call when intersecting the root element and the threshold that we difine
//9.the call back function needs 2 function is *entires and *observer object itself
//10. the loop forEach to the entires
const obsCallback = (entires, observer) => {
  entires.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);
