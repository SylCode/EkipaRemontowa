import { gsap } from "gsap";
window.onload = function() {
  init();
}
function init()
{
  try {
    var check = document.querySelector("#panelWrap");
    if(!check) return;
  } catch (error) {
    
  }
  //console.clear();
  const slides = document.querySelectorAll("#Imagesection");
  const container = document.querySelector("#panelWrap");
  let dur = 0.5;
  let offsets = [];
  let oldSlide = 0;
  let activeSlide = 0;
  let dots = document.querySelector(".dots");
  let navDots = dots.children;
  let iw = container.offsetWidth;
  
  document.querySelector("#leftArrow").addEventListener("click", slideAnim);
  document.querySelector("#rightArrow").addEventListener("click", slideAnim);
  
  // set slides background colors and create the nav dots
  for (let i = 0; i < navDots.length; i++) {
    navDots[i].index = i;
    navDots[i].addEventListener("click", slideAnim);
  }
  
  // get elements positioned
  gsap.set(".dots, .titleWrap", { xPercent: -50 });
  gsap.set(".arrow", { yPercent: -50 });
  gsap.set(".title", { y: 30 });
  
  // lower screen animation with nav dots and rotating titles
  const dotAnim = gsap.timeline({ paused: true });
  dotAnim.to(
    ".dot",
    {
      stagger: { each: 1, yoyo: true, repeat: 1 },
      scale: 2.1,
      rotation: 0.1,
      ease: "none"
    },
    0.5
  );
  dotAnim.to(
    ".title",
    slides.length + 1,
    { y: -(slides.length * 30), rotation: 0.01, ease: "none" },
    0
  );
  dotAnim.time(1);
  
  // make the whole thing draggable
  // let dragMe = Draggable.create(container, {
  //   type: "x",
  //   edgeResistance: 1,
  //   snap: offsets,
  //   inertia: true,
  //   bounds: "#masterWrap",
  //   onDrag: tweenDot,
  //   onThrowUpdate: tweenDot,
  //   onDragEnd: slideAnim,
  //   allowNativeTouchScrolling: false,
  //   zIndexBoost: false
  // });
  
  // dragMe[0].id = "dragger";
   sizeIt();
  
  // main action check which of the 4 types of interaction called the function
  function slideAnim(e) {
    oldSlide = activeSlide;
    if (gsap.isTweening(container)) {
      return;
    }
    // arrow clicks
    if (this.id === "leftArrow" || this.id === "rightArrow") {
      activeSlide =
        this.id === "rightArrow" ? (activeSlide += 1) : (activeSlide -= 1);
      // click on a dot
    } else if (this.className === "dot") {
      activeSlide = this.index;
      // scrollwheel
    } else {
      activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
    }
    // make sure we're not past the end or beginning slide
    activeSlide = activeSlide < 0 ? slides.length - 1 : activeSlide;
    activeSlide = activeSlide > slides.length - 1 ? 0 : activeSlide;
    if (oldSlide === activeSlide) {
      return;
    }
    gsap.to(container, dur, { x: offsets[activeSlide], onUpdate: tweenDot });
  }
  
  // update the draggable element snap points
  function sizeIt() {
    offsets = [];
    iw = window.innerWidth-window.innerWidth/4;
    gsap.set("#panelWrap", { width: slides.length * iw });
    gsap.set(slides, { width: iw });
    for (let i = 0; i < slides.length; i++) {
      offsets.push(-slides[i].offsetLeft);
    }
    gsap.set(container, { x: offsets[activeSlide] });
  }
  
  gsap.set(".hideMe", { opacity: 1 });
  //window.addEventListener("wheel", slideAnim);
  window.addEventListener("resize", sizeIt);
  
  // update dot animation when dragger moves
  function tweenDot() {
    gsap.set(dotAnim, {
      time: Math.abs(gsap.getProperty(container, "x") / iw) + 1
    });
  }
}