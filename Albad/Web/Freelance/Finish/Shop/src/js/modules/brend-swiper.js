const brendSwiper = new Swiper(".brend__swiper", {
  slidesPerView: 4,
  loop: false,
  speed: 500,
  spaceBetween: 20,
  pagination: {
    el: ".brend__pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    374.98: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    1139.98: {
      slidesPerView: 3,
    },
    1240.98: {
      slidesPerView: 4,
    },
  },
});
