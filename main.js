var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

TweenMax.from(".navbar", 2, {
  left: "-20%",
  ease: Expo.easeInOut,
  delay: 0.4,
});

var t1 = new TimelineMax({ paused: true });

t1.to(".nav", 1.8, {
  width: "94%",
  ease: Expo.easeInOut,
});

t1.staggerTo(
  ".nav-item a",
  0.6,
  {
    top: "0px",
    ease: Expo.easeInOut,
  },
  0.1,
  "-=0.8"
);

t1.reverse();

$(".nav-toggle").addEventListener("click", function () {
  t1.reversed(!t1.reversed());
  this.classList.toggle("active");
});

$$(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    t1.reversed(!t1.reversed());
    $(".nav-toggle").classList.toggle("active");
  });
});
