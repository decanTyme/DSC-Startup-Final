const contents = document.querySelectorAll(".time-content");

const Optn = {
  threshold: 0,
  rootMargin: "0px 0px -550px 0px"
};

const timelineObs = new IntersectionObserver(function (el, timelineObs) {
  el.forEach((e, i) => {
    if (!e.isIntersecting) {
      return;
    } else {
      e.target.classList.add('time-content-hover');
      timelineObs.unobserve(e.target);
    }
  });
},
  Optn);

document.onload = contents.forEach((content, i) => {
  timelineObs.observe(content);
});