// Modal
function modal(buttons, modalElem) {
  const btns = document.querySelectorAll(buttons);
  const modal = document.querySelector(modalElem);
  const body = document.querySelector("body");
  const close = modal.querySelector("[data-close]");
  const block = modal.querySelector(".modal__body");
  

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
      block.classList.add("active");
      body.classList.add("lock");
    });
  });

  close.addEventListener("click", () => {
    modal.classList.remove("active");
    block.classList.remove("active");
    body.classList.remove("lock");
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target === modal) {
      modal.classList.remove("active");
      block.classList.remove("active");
      body.classList.remove("lock");
    }
  });
}

try {
  modal(".header__btn", ".modal");
} catch (e) {}
try {
  modal(".goods__btn", ".modal");
} catch (e) {}
try {
  modal(".sub-list__item_btn", ".modal-consult");
} catch (e) {}
try {
  modal("#btn-cn", ".modal-consult");
} catch (e) {}
try {
  modal(".consult", ".modal-consult");
} catch (e) {}
try {
  modal(".footer_btn", ".modal");
} catch (e) {}

// - Function - Tabs
const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function showTabContent(i = 0) {
    tab[i].classList.add(activeClass);
    content[i].style.display = display;
  }

  function hideTabContent() {
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
    content.forEach((item) => {
      item.style.display = "none";
    });
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

try {
  tabs(".choise__tabs", ".choise__tab", ".choise__content", "active");
} catch (e) {}

// Accordeon
function accordeon(elements) {
  const elems = document.querySelectorAll(elements);

  elems.forEach((elem) => {
    const text = elem.querySelector(".answes__footer");
    const plus = elem.querySelector(".answes__top");

    elem.addEventListener("click", () => {
      plus.classList.toggle("active");
      text.classList.toggle("active");
    });
  });
}

try {
  accordeon("#answes-buss-man .answes__item");
} catch (e) {}

try {
  accordeon("#answes-polyte .answes__item");
} catch (e) {}

try {
  accordeon("#answes-person .answes__item");
} catch (e) {}

try {
  accordeon("#answes-famaly .answes__item");
} catch (e) {}

try {
  accordeon("#answes-our .answes__item");
} catch (e) {}

try {
  accordeon("#imi-buss .answes__item");
} catch (e) {}

try {
  accordeon("#answer-buss-mans .answes__item");
} catch (e) {}
try {
  accordeon("#answer-info .answes__item");
} catch (e) {}
try {
  accordeon("#answer-left .answes__item");
} catch (e) {}
try {
  accordeon("#answes-famalys .answes__item");
} catch (e) {}

function carousel(slider) {
  const swiper = new Swiper(slider, {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      991.98: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
}

try {
  carousel(".carousel__swiper");
} catch (e) {}

function menu() {
  const infoElements = document.querySelector("#info-tel-mail");
  const menuElements = document.querySelector("#nav");
  const adressElement = document.querySelector("#adress");
  const head = document.querySelector("#head");
  const logo = document.querySelector("#logo");

  if (window.screen.availWidth < 991.98) {
    menuElements.appendChild(adressElement);
    menuElements.appendChild(infoElements);
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 991.98) {
      menuElements.appendChild(adressElement);
      menuElements.appendChild(infoElements);
    } else {
      head.prepend(infoElements);
      logo.after(adressElement);
    }
  });
}

menu();

// Click to button for the Menu Element
function accordeonMenu() {
  const elements = document.querySelectorAll(".header__link div");
  const list = document.querySelectorAll(".sub-list");
  const item = document.querySelectorAll(".header__link");

  elements.forEach((elem, idx) => {
    elem.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.parentElement.classList.contains("active")) {
        list.forEach((item) => {
          item.classList.remove("active");
        });
        item.forEach((item) => {
          item.classList.remove("active");
        });
        !target.parentElement.classList.add("active");
        list[idx].classList.add("active");
      } else {
        !target.parentElement.classList.remove("active");
        list[idx].classList.remove("active");
      }
    });
  });
}
accordeonMenu();

// Burger
function openMuneMobile() {
  const btn = document.querySelector("#burger");
  const menu = document.querySelector("#nav");
  const close = document.querySelector("#nav-close");
  const body = document.querySelector("body");
  const shadowMenu = document.querySelector("#shadow-menu");
  btn.addEventListener("click", () => {
    nav.classList.add("_active");
    nav.classList.remove("_no-active");
    body.classList.add("_shadow");
    shadowMenu.classList.add("_active");
  });
  close.addEventListener("click", () => {
    nav.classList.remove("_active");
    nav.classList.add("_no-active");
    body.classList.remove("_shadow");
    shadowMenu.classList.remove("_active");
  });
  shadowMenu.addEventListener("click", (e) => {
    const target = e.target;

    if (target === shadowMenu) {
      nav.classList.remove("_active");
      nav.classList.add("_no-active");
      body.classList.remove("_shadow");
      shadowMenu.classList.remove("_active");
    }
  });
}
openMuneMobile();

// - Функция - Повление/Скрытие MENU - Добавить объявление -
function addElementScroll(elem) {
  var last_scroll = 0; // Текущее значение скролла
  let el = document.querySelector(".content");
  const item = document.querySelector(elem);

  window.onscroll = function () {
    if (window.scrollY > 145) {
      item.classList.add("_fixed");
      // item.style.display = "none";
    } else {
      item.classList.remove("_fixed");
      // item.style.display = "block";
    }
    last_scroll = window.scrollY;
  };
}

// Игнорируем ошибки на других страницах и выполняется - Функция - Повление/Скрытие MENU - Добавить объявление -
try {
  if (window.screen.availWidth > 991.98) {
    addElementScroll("#nav");
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 991.98) {
      addElementScroll("#nav");
    }
  });
} catch (e) {} 
