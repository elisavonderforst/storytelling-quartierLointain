import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin("ScrollTo");

/* animation du titre */

const titleheader = document.querySelector("header");
const titleImg = document.querySelector(".header-title");
const butterfly = document.querySelector(".header-butterfly-img");

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflowY = "auto";
    document.querySelector("main.is-hidden").classList.remove("is-hidden");
    document.querySelector("footer.is-hidden").classList.remove("is-hidden");
  },
});
tl.to(titleImg, { opacity: 1 });
tl.to(titleImg, { duration: 2, opacity: 0 });
tl.to(titleImg, { x: "100%", duration: 0.5, ease: "expo.out" });
tl.fromTo(butterfly, { x: "-100%", duration: 2 }, { x: "100", duration: 2 });
tl.to(butterfly, { x: 200, y: -20, duration: 2 }, "-=1.7");
tl.to(butterfly, { x: 300, y: -200, duration: 2 }, "-=1.7");
tl.to(butterfly, { x: "80vh", y: -100, duration: 2 }, "-=1.7");
tl.to(butterfly, { x: "80vh", y: 0, duration: 2 }, "-=1.7");
tl.to(butterfly, { scale: 1.2, duration: 0.2 });
tl.to(butterfly, { scale: 1, duration: 0.2 });
tl.to(butterfly, { scale: 1.2, duration: 0.2 });
tl.to(butterfly, { scale: 1, duration: 0.2 });
tl.to(butterfly, { x: "200vh", y: -300 });
tl.to(titleheader, {
  opacity: 0,
  x: "100vw",
});

ScrollTrigger.addEventListener(
  "refreshInit",
  () => (document.body.style.overflowY = "auto")
);
ScrollTrigger.addEventListener("refresh", () => {
  if (tl.progress() < 1) {
    document.body.style.overflowY = "hidden";
  }
});

/* Btn pour les choix */

const btnBefore = document.querySelector("#js-btn-past");
const btnNow = document.querySelector("#js-btn-present");
const btnChoisePresent = document.querySelector("#js-btn-choise-present");
const btnChoisePast = document.querySelector("#js-btn-choise-past");
const videoAppear = document.querySelector(".choose-video");
const btnchoise = document.querySelector(".btn-choose-pack");

var storyBefore = document.querySelector(".past");
var storyNow = document.querySelector(".present");
var choise = document.querySelector(".choose");

btnBefore.addEventListener("click", function () {
  storyBefore.classList.remove("is-none");
  storyNow.classList.add("is-none");
  gsap.to(window, { scrollTo: ".past" });
});

btnNow.addEventListener("click", function () {
  storyNow.classList.remove("is-none");
  storyBefore.classList.add("is-none");

  gsap.to(window, { scrollTo: ".present" });
});

btnChoisePresent.addEventListener("click", function () {
  storyNow.classList.add("is-none");
  storyBefore.classList.add("is-none");
  gsap.to(window, { scrollTo: ".choose" });
});

btnChoisePast.addEventListener("click", function () {
  storyNow.classList.add("is-none");
  storyBefore.classList.add("is-none");
  gsap.to(window, { scrollTo: ".choose" });
});

/* Paralaxe des images avec le train */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".intro-fixed-img", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=600",
      scrub: true,
    },
    x: "-200vw",
  });

  gsap.to(".intro-fixed-img-train", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=600",
      scrub: true,
    },
    x: "210vw",
    duration: 3,
  });

  gsap.to(".intro-fixed-img-butterfly", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=600",
      scrub: true,
    },
    x: "80vw",
  });
});
