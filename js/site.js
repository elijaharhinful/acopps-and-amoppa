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


var started = document.querySelector('.heading');

ScrollReveal().reveal(started, {
  delay: 700
});


var leftArrayItems = [
  document.querySelector('.about'),
  document.querySelector('.quote'),
  document.querySelector('.publications'),
  document.querySelector('.distinction'),
  document.querySelector('.contact')
]

ScrollReveal().reveal(leftArrayItems, {
  delay: 450
})