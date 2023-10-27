const clothesSwiper = new Swiper(".clothes__swiper", {
  slidesPerView: "auto",
  loop: false,
  allowTouchMove: true,
  speed: 500,
  mousewheel: {
    eventsTarget: ".clothes__swiper",
  },

  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    576.98: {
      spaceBetween: 30,
    },
  },
});
