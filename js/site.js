function openNav() {
  document.querySelector(".top-nav").style.width = "100vw";
  document.querySelector("header").style.width = "0"
}

function closeNav() {
  document.querySelector(".top-nav").style.width = "0";
  document.querySelector("header").style.width = "100vw"
}

// var nav = document.getElementById('top-nav'); 
// nav.style.backgroundColor = "rgb(54, 54, 54, 0.0)"

// window.addEventListener('scroll', function(event) { 
//     event.preventDefault();

//     if (window.scrollY <= 100) { 
//       nav.style.backgroundColor = "rgb(23, 23, 23, 0.0)";
//     } else {
//       nav.style.backgroundColor = "rgb(54, 54, 54)"

//     }
// });

// Initialize hero Swiper
var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize about cards swiper
var swiper2 = new Swiper(".cardSwiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

// var swiper3 = document.querySelector('.gallery-swiper').slider;

swiper3 = new Swiper('.gallery-swiper', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 9000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true,
})


// var started = document.querySelector('.about');

// ScrollReveal().reveal(started, {
//   delay: 900
// });

var slideLeft = {
  distance: '200%',
  origin: 'left',
  opacity: null,
  delay: 450,
}

var slideRight = {
  distance: '200%',
  origin: 'right',
  opacity: null,
  delay: 450,
}

var slideUp = {
  distance: '400%',
  origin: 'bottom',
  opacity: null,
  delay: 2000,
}

var justReveal = {
  delay: 550,
  duration: 900,
}

var leftArrayItems = [
  document.querySelector('.about .swiper'),
  document.querySelector('.produce .mission'),
  document.querySelector('.products .content .left'),
]

ScrollReveal().reveal(leftArrayItems, slideLeft);

var rightArrayItems = [
  document.querySelector('.about .right-button'),
  document.querySelector('.produce .vision'),
  document.querySelector('.products .content .right'),
  document.querySelector('.contact')
]

ScrollReveal().reveal(rightArrayItems, slideRight);

var girl = document.querySelector('.produce .top .right');

ScrollReveal().reveal(girl, slideUp);

var justRevealArrayItems = [
  document.querySelector('.gallery .button'),
  document.querySelector('.products .button'),
  document.querySelector('.footer .logo'),
]

ScrollReveal().reveal(justRevealArrayItems, justReveal);

ScrollReveal().reveal(document.querySelector('.partners .one'), {delay: 300});
ScrollReveal().reveal(document.querySelector('.partners .two'), {delay: 900});
ScrollReveal().reveal(document.querySelector('.partners .three'), {delay: 1000});
ScrollReveal().reveal(document.querySelector('.partners .four'), {delay: 400});
ScrollReveal().reveal(document.querySelector('.partners .five'), {delay: 1200});
ScrollReveal().reveal(document.querySelector('.partners .six'), {delay: 1300});
ScrollReveal().reveal(document.querySelector('.partners .seven'), {delay: 1500});
ScrollReveal().reveal(document.querySelector('.partners .eight'), {delay: 550});
ScrollReveal().reveal(document.querySelector('.partners .nine'), {delay: 200});
ScrollReveal().reveal(document.querySelector('.partners .ten'), {delay: 700});

