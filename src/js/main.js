import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const titleheader = document.querySelector("header");
const titleImg = document.querySelector(".header-title");
const butterfly = document.querySelector(".header-butterfly-img");

var tl = gsap.timeline();
tl.to(titleImg, { opacity: 1 });
tl.to(titleImg, { duration: 3, opacity: 0 });
tl.to(titleImg, { x: "100%", duration: 0.5, ease: "expo.out" });
tl.fromTo(
  butterfly,
  { x: "-100%", ease: "expo.out", delay: 0 },
  { x: "100", ease: "expo.out", delay: 0 }
);
tl.to(butterfly, { x: 200, y: -20 });
tl.to(butterfly, { x: 300, y: -80 });
tl.to(butterfly, { x: 500, y: -60, delay: 0 });
tl.to(butterfly, { x: 600, y: 0, delay: 0 });
tl.to(titleheader, { x: "100%", duration: 1, ease: "expo.out" });
