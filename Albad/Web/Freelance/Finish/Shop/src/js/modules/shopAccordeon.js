const accordeon = (body, head) => {
  const wrapper = document.querySelector(body);
  const headers = document.querySelectorAll(head);

  wrapper.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(`${head}.active`)) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  });
};

const accordeonAllShow = (body, head) => {
  const wrapper = document.querySelector(body);
  const headers = document.querySelectorAll(head);

  wrapper.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(`${head}.active`)) {
      target.classList.remove("active");
    } else {
      headers.forEach((el) => {
        el.classList.remove("active");
      });
      target.classList.add("active");
    }
  });
};
try {
  accordeon(".user__body", ".user__name");
} catch (e) {}
try {
  accordeon(".shop__body", ".shop__text");
} catch (e) {}
try {
  accordeon(".footer__items", ".footer__name");
} catch (e) {}
try {
  accordeon(".filter__body", ".filter__head");
} catch (e) {}
try {
  accordeon(".card__items", ".card__header");
} catch (e) {}

try {
  accordeonAllShow(".shop__info", ".shop__top");
} catch (e) {}
