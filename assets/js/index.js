const contents = document.querySelectorAll(".time-content");

const Optn = {
  threshold: 0,
  rootMargin: "0px 0px -450px 0px"
};

const timelineObs = new IntersectionObserver(function (el, timelineObs) {
  el.forEach((e, i) => {
    if (!e.isIntersecting) {
      e.target.classList.remove('time-content-hover');
    } else {
      e.target.classList.add('time-content-hover');
    }
  });
},
  Optn);

document.onload = contents.forEach(content => {
  timelineObs.observe(content);
});
