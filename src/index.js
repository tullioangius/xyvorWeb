/**GENERALI */

function setWidth(){
  viewWidthGallery = document.querySelector("html").clientWidth *1.5;
  return viewWidthGallery
}
function setWidthReverse(){
  viewWidthGallery = document.querySelector("html").clientWidth *1.5;
  return -viewWidthGallery
}

function setHeight(){
  viewHeight = document.querySelector("html").clientHeight;
  return -viewHeight
}


/*GSAP */
gsap.registerPlugin(ScrollTrigger);


/*INIT SCROLLBAR */
let Scrollbar = window.Scrollbar;
const scroller = document.querySelector("#my-scrollbar")
const scrollbar = Scrollbar.init(scroller);
const imgComf = document.getElementById('imgComf')

ScrollTrigger.scrollerProxy("#my-scrollbar", {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value;
    }
    return scrollbar.scrollTop;
  }
});
window.onresize = ScrollTrigger.refresh()

scrollbar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });


/**Comfort scroll animations */
gsap.to(".trigger", {
    scrollTrigger: {
        trigger: ".trigger",
        start: 'top 50%', 
        end: 'top 50%',
        scrub: true,
    },
    clipPath: "circle(50.0% at 50% 50%)",
})

gsap.to(".parComfort", {
    scrollTrigger: {
        trigger: "#imgComf",
        start: 'top 50%', 
        end: 'top 50%',
        scrub: true,
    },
    duration: 1,
    alpha: 1,
})

/**animazioni drivers */
gsap.to(".bassi", {
    scrollTrigger: {
        trigger: "#topWave",
        start: 'top 50%', 
        end: 'top 50%',
        scrub: true,
    },
    duration: 1,
    alpha: 1,
})

gsap.to(".parDriver", {
    scrollTrigger: {
        trigger: "#topWave",
        start: 'top 50%', 
        end: 'top 50%',
        scrub: true,
    },
    duration: 2,
    alpha: 1,
})

gsap.to("#driver_bg", {
    scrollTrigger: {
        trigger: "#topWave",
        start: 'top 50%', 
        end: 'top 50%',
        scrub: true,
    },
    duration: 2,
    alpha: 1,
})

/** animazioni batteria */

gsap.to(".a6", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    scrub: true,

  },
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
})

/**ANIMAZIONI GALLERIA */
/**INGRESSO */
gsap.to(".row1", {
  scrollTrigger: {
    trigger: ".fitproduct",
    start: "bottom 50%",
    end: "bottom 50%",
    markers: true,
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  ease: "power2.out",
  x: setWidth,
  duration:1.5,
})
gsap.to(".row2", {
  scrollTrigger: {
    trigger: ".row1",
    start: "bottom 50%",
    end: "bottom 50%",
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  ease: "power2.out",
  x: setWidthReverse,
  duration:1.5,
})

/*USCITA */
gsap.to(".a5", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none reverse none"
  },
  ease: "power2.out",
  x: -700,
  duration:1.5,
})
gsap.to(".a7", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none reverse none"
  },
  ease: "power2.out",
  x: 700,
  duration:1.5,
})
gsap.to(".a1", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none reverse none"
  },
  ease: "power2.out",
  x: -700,
  y:-700,

  duration:1.5,
})
gsap.to(".a2", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none reverse none"
  },
  ease: "power2.out",
  x: -700,
  y:-700,

  duration:1.5,
})
gsap.to(".a3", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none reverse none"
  },
  ease: "power2.out",
  x: 700,
  y:-700,

  duration:1.5,
})
gsap.to(".a4", {
  scrollTrigger: {
    trigger: ".a6",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none reverse none"
  },
  ease: "power2.out",
  x: 700,
  y:-700,
  duration:1.5,
})


gsap.to(".parBattery", {
    scrollTrigger: {
        trigger: ".a6",
        start: 'center 50%',
        end: 'center 50%',
        scrub: true,
    },
    duration: 1,
    alpha:1,
})
/**FINE ANIMAZIONI GALLERIA */

/**ANIMAZIONI BLUETOOTH */
gsap.to(".bluetooth", {
  scrollTrigger: {
    trigger: ".parBattery",
    start: "center 50%",
    end: "center 50%",
    scrub: true,
  },
  duration: 1,
  alpha: 1
})

/**ANIMAZIONI SCATOLA */
gsap.to(".b1", {
  scrollTrigger: {
    trigger: ".bluetoothImg",
    start: "65% center",
    end: "65% center",
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  duration: 1,
  y: setHeight,
  delay: 0,
})
gsap.to(".b2", {
  scrollTrigger: {
    trigger: ".bluetoothImg",
    start: "65% center",
    end: "65% center",
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  duration: 1.1,
  y: setHeight,
  delay: 0.2,
})
gsap.to(".b3", {
  scrollTrigger: {
    trigger: ".bluetoothImg",
    start: "65% center",
    end: "65% center",
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  duration: 1.2,
  y: setHeight,
  delay: 0.4,
})
gsap.to(".b4", {
  scrollTrigger: {
    trigger: ".bluetoothImg",
    start: "65% center",
    end: "65% center",
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  duration: 1.3,
  y: setHeight,
  delay: 0.6,
})
gsap.to(".b5", {
  scrollTrigger: {
    trigger: ".bluetoothImg",
    start: "65% center",
    end: "65% center",
    toggleActions: "play none reverse none",
    invalidateOnRefresh: true
  },
  duration: 1.4,
  y: setHeight,
  delay: 0.8,
})

/*FUNZIONE FRECCIA */
let arrow = document.querySelector(".arrowdown");
if(document.getElementById('scrollPage')){
    var offsetHeight = document.getElementById('scrollPage').offsetHeight * 1.1;
}
if(arrow){

    arrow.addEventListener("click", ()=>{
        scrollbar.scrollTo(0, offsetHeight, 1200)
    })
}

