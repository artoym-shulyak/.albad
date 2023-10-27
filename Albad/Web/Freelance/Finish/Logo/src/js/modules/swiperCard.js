const swiperAll = (item, items, prev, next, prevSmall, nextSmall) => {
  var swiperCards = new Swiper(items, {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    speed: 800,
    navigation: {
      nextEl: nextSmall,
      prevEl: prevSmall,
    },
    breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      767.98: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      991.98: {
        slidesPerView: 6,
        direction: "vertical",
        spaceBetween: 20,
      },
    },
  });
  var swiperCard = new Swiper(item, {
    spaceBetween: 10,
    speed: 800,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    thumbs: {
      swiper: swiperCards,
    },
  });
};
try {
  swiperAll(
    ".card__swiper-card",
    ".card__swiper-cards",
    ".card__swiper-card .card__prev",
    ".card__swiper-card .card__next",
    ".card__prev-small",
    ".card__next-small"
  );
} catch (e) {}

try {
  swiperAll(
    ".card__swiper-card1",
    ".card__swiper-cards1",
    ".card__swiper-card1 .card__prev",
    ".card__swiper-card1 .card__next",
    ".card__prev-small--1",
    ".card__next-small--1"
  );
} catch (e) {}

try {
  swiperAll(
    ".card__swiper-card2",
    ".card__swiper-cards2",
    ".card__swiper-card2 .card__prev",
    ".card__swiper-card2 .card__next",
    ".card__prev-small--2",
    ".card__next-small--2"
  );
} catch (e) {}
