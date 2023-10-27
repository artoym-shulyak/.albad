const brendSwiper = new Swiper(".news__swiper", {
  slidesPerView: 3,
  loop: false,
  speed: 500,
  spaceBetween: 20,
  pagination: {
    el: ".news .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576.98: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
  },
});
