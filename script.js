/** @format */
gsap.registerPlugin(ScrollTrigger);
let imgSlider = document.getElementById("slider-container");
let imgSliderMain = document.getElementById("main-slider-container");

let windowWidth = window.innerWidth;
let calculateSliderX =
  imgSlider.children.length * imgSlider.children[0].offsetWidth - windowWidth;

let imgSliderTimeline = gsap.timeline({
  default: {
    ease: "none",
  },
  scrollTrigger: {
    trigger: imgSliderMain,
    pin: true,
    start: "top top",
    end: "+=200%",
    scrub: 1,
  },
});
imgSliderTimeline.to(imgSlider, {
  x: -calculateSliderX,
});
