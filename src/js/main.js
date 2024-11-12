import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const titleheader = document.querySelector("header");
const titleImg = document.querySelector(".header-title-img");

var tl = gsap.timeline();
tl.to(titleImg, { opacity: 1 });
tl.to(titleImg, { duration: 3, opacity: 0 });
tl.to(titleImg, { x: "100%", duration: 0.5, ease: "expo.out" });
