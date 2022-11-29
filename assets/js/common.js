const button = document.querySelector("#menu-button");

button.addEventListener("click", () => {
  button.classList.toggle("open");
});

var swiper = new Swiper(".swiper1", {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});

var swiper = new Swiper(".swiper2", {
  slidesPerView: "auto",
  breakpoints: {
    1024: {
      width: 1024,
      slidesPerView: 6,
    },
    768: {
      width: 768,
      slidesPerView: 6,
    },
    425: {
      width: 425,
      slidesPerView: 5,
    },
    320: {
      width: 320,
      slidesPerView: 4,
    },
  },
  centeredSlides: true,
  loop: true,
  speed: 5000,
  freeMode: true,
  autoplay: {
    delay: -1000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  loopFillGroupWithBlank: true,
});
