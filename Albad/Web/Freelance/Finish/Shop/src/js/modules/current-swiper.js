const headSwiper = new Swiper(".current__swiper", {
  loop: false,
  speed: 800,
  slidesPerView: 1,

  pagination: {
    el: ".current__pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        "<span class='" +
        currentClass +
        "'></span>" +
        "<span class='current__or'>/</span>" +
        "<span class='" +
        totalClass +
        "'></span>"
      );
    },
  },

  navigation: {
    nextEl: ".current__next",
    prevEl: ".current__prev",
  },

  breakpoints: {
    320: {
      allowTouchMove: false,
    },
    991.98: {
      allowTouchMove: true,
    },
  },
});
