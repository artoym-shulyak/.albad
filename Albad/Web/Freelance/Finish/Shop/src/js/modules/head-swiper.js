const headSwiper = new Swiper(".head__swiper", {
  loop: false,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".head__next",
    prevEl: ".head__prev",
  },

  breakpoints: {
    576.98: {
      pagination: {
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            "<span class='" +
            currentClass +
            "'></span>" +
            "<span class='head__or'>/</span>" +
            "<span class='" +
            totalClass +
            "'></span>"
          );
        },
      },
      slidesPerView: 1,
    },
  },
});
