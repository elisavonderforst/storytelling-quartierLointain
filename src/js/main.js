import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const titleheader = document.querySelector("header");
const titleImg = document.querySelector(".header-title");
const butterfly = document.querySelector(".header-butterfly-img");

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflowY = "auto";
    document.querySelector("main.is-hidden").classList.remove("is-hidden");
  },
});
tl.to(titleImg, { opacity: 1 });
tl.to(titleImg, { duration: 3, opacity: 0 });
tl.to(titleImg, { x: "100%", duration: 0.5, ease: "expo.out" });
tl.fromTo(butterfly, { x: "-100%", duration: 2 }, { x: "100", duration: 2 });
tl.to(butterfly, { x: 200, y: -20, duration: 2 }, "-=1.7");
tl.to(butterfly, { x: 300, y: -200, duration: 2 }, "-=1.7");
tl.to(butterfly, { x: "80vh", y: -100, duration: 2 }, "-=1.7");
tl.to(butterfly, { x: "80vh", y: 0, duration: 2 }, "-=1.7");
tl.pause;
butterfly.addEventListener("click", function () {
  tl.resume();
  tl.to(butterfly, { x: "200vh", y: -300 });
  tl.to(titleheader, {
    x: "100%",
    opacity: 0,
    duration: 0.3,
    ease: "expo.out",
  });
});

// when calculating pinning which involves sizing, make sure the scrollbar is factored in
ScrollTrigger.addEventListener(
  "refreshInit",
  () => (document.body.style.overflowY = "auto")
);
ScrollTrigger.addEventListener("refresh", () => {
  if (tl.progress() < 1) {
    document.body.style.overflowY = "hidden";
  }
});
