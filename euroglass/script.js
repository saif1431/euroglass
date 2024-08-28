// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#scroll'),
  smooth: true
});

// GSAP Animation Setup
scroll.on('call', (func, state, direction) => {
  if (func === 'reveal' && state === 'enter') {
    gsap.fromTo(
      direction === 'down' ? '.reveal' : '.reveal', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );
  }
});

// GSAP to animate elements on scroll
document.querySelectorAll('[data-scroll-class="reveal"]').forEach((elem) => {
  gsap.fromTo(
    elem,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        scroller: "#scroll"
      }
    }
  );
});



const menu = document.querySelector('.menu');
const smallNav = document.querySelector('.smallNavbar');

menu.addEventListener('click', () => {
    // Check the current display property and toggle it
    if (smallNav.style.display === 'block') {
        smallNav.style.display = 'none';
    } else {
        smallNav.style.display = 'block';
    }
});