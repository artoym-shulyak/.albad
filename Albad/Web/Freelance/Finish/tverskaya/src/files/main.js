// slider name block Similar
function sliderForSwiper(item, scrollBar, statePlay) {
  const swiper = new Swiper(item, {
    loop: false,
    spaceBetween: 20,
    allowTouchMove: true,
    speed: 900,
    slidesPerView: "auto",
    autoplay: statePlay,

    breakpoints: {
      320: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      567.98: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      767.98: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      991.98: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
    },

    scrollbar: {
      el: scrollBar,
    },
  });
}
function sliderForSwiper2(item, scrollBar) {
  const swiper = new Swiper(item, {
    loop: false,
    spaceBetween: 20,
    allowTouchMove: true,
    speed: 900,
    slidesPerView: "auto",
    autoplay: false,
    mousewheel: {
      eventsTarget: item,
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      567.98: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      767.98: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
      991.98: {
        spaceBetween: 20,
        slideToClickedSlide: true,
      },
    },

    scrollbar: {
      el: scrollBar,
    },
  });
}
try {
  sliderForSwiper2(".similar__swiper", ".similar__scrollbar");
} catch (e) {}
try {
  sliderForSwiper(".wathed__swiper", ".wathed__scrollbar", true);
} catch (e) {}
try {
  sliderForSwiper2(".sim__swiper", ".wathed__scrollbar");
} catch (e) {}

// slider thubs name block Similar
function swiperThumbs() {
  const swiper = new Swiper(".product__images", {
    loop: false,
    speed: 900,
    allowTouchMove: false,
    breakpoints: {
      320: {
        spaceBetween: 0,
        slidesPerView: 0,
      },
      991.98: {
        spaceBetween: 0,
        slidesPerView: 4,
      },
      1279.98: {
        spaceBetween: 0,
        slidesPerView: 5,
      },
      1439.98: {
        spaceBetween: 0,
        slidesPerView: 6,
      },
    },
  });

  const swiper2 = new Swiper(".product__img", {
    loop: false,
    mousewheel: {
      eventsTarget: ".product__img",
    },
    speed: 900,
    allowTouchMove: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    scrollbar: {
      el: ".product__scrollbar",
    },
  });
}
try {
  swiperThumbs();
} catch (e) {}

// Slider block Occupation
function occupationSwiper(item) {
  const swiper = new Swiper(item, {
    loop: false,
    slidesPerView: 2,
    allowTouchMove: true,
    spaceBetween: 20,
    speed: 1500,
    slidesPerView: "auto",
    mousewheel: {
      eventsTarget: item,
    },
  });
}
try {
  occupationSwiper(".occupation__swiper");
} catch (e) {}

// Slider block Equioment
function equipmentSwiper() {
  const swiper = new Swiper(".equipment__swiper", {
    allowTouchMove: true,
    loop: false,
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 20,
    mousewheel: {
      eventsTarget: ".equipment__swiper",
    },
    scrollbar: {
      el: ".wathed__scrollbar",
    },
  });
}
try {
  equipmentSwiper();
} catch (e) {}

// Slider block Hall
function hallSwiper(item, next, prev) {
  const swiper = new Swiper(item, {
    loop: false,
    spaceBetween: 20,
    speed: 700,
    allowTouchMove: true,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
}
try {
  hallSwiper(
    ".hall__swiper",
    ".hall__arrows .hall__next",
    ".hall__arrows .hall__prev"
  );
  hallSwiper(
    ".hall__swiper-second",
    ".hall__arrows-second .hall__next",
    ".hall__arrows-second .hall__prev"
  );
} catch (e) {}

// Tabs
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
    content[i].style.opacity = "1";
    content[i].style.position = "relative";
    content[i].style.left = "0";
  }

  function hideTabContent() {
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
    content.forEach((item) => {
      // item.style.display = 'none';
      item.style.opacity = "0";
      item.style.position = "absolute";
      item.style.left = "-1000000%";
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
  tabs(".team__list", ".team__li", ".team__body", "active");
} catch (e) {}
try {
  tabs(".hall__wrapper .hall__list", ".hall__li", ".hall__body", "active");
} catch (e) {}
try {
  tabs("#event-list", ".event__li", ".event__inner", "active");
} catch (e) {}
try {
  tabs(".shop__list", ".shop__li", ".shop__content", "active");
} catch (e) {}
try {
  tabs(".center__list", ".center__li", ".center__body", "active");
} catch (e) {}

// Accordern "программа курса"
function accordeon() {
  const items = document.querySelectorAll(".course__item");

  items.forEach((el) => {
    el.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.closest(".course__item").classList.contains("active")) {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        target.closest(".course__item").classList.add("active");
      } else {
        target.closest(".course__item").classList.remove("active");
      }
    });
  });

  // Сворачиваем список  при клики вне элемента
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".course__item")) {
      items.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });
}
try {
  accordeon();
} catch (e) {}

// Operation for the plus & minus
function operationAddRemoveGoodCountGood(elem) {
  const operations = document.querySelectorAll(elem);

  operations.forEach((item) => {
    const plus = item.querySelector("[data-plus]");
    const minus = item.querySelector("[data-minus]");
    const number = item.querySelector("[data-number]");

    let addNumber = Number(number.textContent);

    if (addNumber > 1) {
      minus.classList.add("active");
    }

    // Добавляем на единицу
    plus.addEventListener("click", () => {
      if (plus.classList.contains("active")) {
        if (addNumber > 0) {
          minus.classList.add("active");
        }
        addNumber++;
        number.textContent = addNumber;
      }
    });

    // Отнимаем на единицу
    minus.addEventListener("click", () => {
      if (minus.classList.contains("active") && addNumber !== 1) {
        addNumber--;
        number.textContent = addNumber;
        if (addNumber === 1) {
          minus.classList.remove("active");
        }
      }
    });
  });
}
try {
  operationAddRemoveGoodCountGood(".product__top .product__item");
} catch (e) {}
try {
  operationAddRemoveGoodCountGood(".basket__count");
} catch (e) {}

// - Функция -  Раскрывающий список
function hundleSelect(boxesSelect, boxSelect) {
  const nameItems = document.querySelectorAll(boxesSelect),
    body = document.querySelector("body");

  nameItems.forEach((item) => {
    const select = item,
      selectItem = item.querySelector(boxSelect);

    //  Функционал раскрытия/сворачивания выпадающих списокв
    selectItem.addEventListener("click", (e) => {
      if (!select.classList.contains("open")) {
        nameItems.forEach((box) => {
          box.classList.remove("open");
          box.querySelector(boxSelect).classList.remove("open");
        });
        select.classList.add("open");
        selectItem.classList.add("open");
      } else {
        select.classList.remove("open");
        selectItem.classList.remove("open");
      }
    });

    // Отслеживаем клик по элементам
    select.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target &&
        target.tagName === "LI" &&
        !target.classList.contains("active")
      ) {
        const value = target.innerText;
        try {
          select.querySelector("li.active").classList.remove("active");
        } catch (e) {}
        target.classList.add("active");
        selectItem.innerText = value;
        select.classList.remove("open");
        selectItem.classList.remove("open");
      }
    });

    // Сворачиваем список при клики вне элемента
    body.addEventListener("click", (e) => {
      const target = e.target;
      const targetBody = e.currentTarget;
      if (target !== selectItem && targetBody === body) {
        target.classList.add("active");
        select.classList.remove("open");
        selectItem.classList.remove("open");
      } else {
      }
    });
  });
}
try {
  hundleSelect(".check__box", ".check__value");
} catch (e) {}

// Click burger -> open modal
function menu() {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  const close = document.querySelector("#close");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    const targetMore = e.target.closest(".menu__elems");
    if (target !== burger && target !== menu && !targetMore) {
      menu.classList.remove("active");
    }
  });
}
menu();

// Spoiler menu
function spoilerMenu() {
  const elems = document.querySelectorAll(".menu__li");

  const media_query = {
    pl_small: window.matchMedia("(max-width: 1199.98px)").matches,
    pl_big: window.matchMedia("(min-width: 1199.98px)").matches,
  };

  if (media_query.pl_small) {
    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        console.log("click2");
        const target = e.target.closest(".menu__li");

        if (target.classList.contains("active")) {
          target.classList.remove("active");
        } else {
          elems.forEach((item) => {
            item.classList.remove("active");
          });
          target.classList.add("active");
        }
      });
    });
  }

  window.addEventListener("resize", () => {
    // Media queries
    const media_query = {
      pl_small: window.matchMedia("(max-width: 1199.98px)").matches,
      pl_big: window.matchMedia("(min-width: 1199.98px)").matches,
    };

    if (media_query.pl_small) {
      elems.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          const target = e.target.closest(".menu__li");

          if (target.classList.contains("active")) {
            target.classList.remove("active");
          } else {
            elems.forEach((item) => {
              item.classList.remove("active");
            });
            target.classList.add("active");
          }
        });
      });
    }
  });
}
spoilerMenu();

// Show/hide block of the filter
function hideShowBlockFilter() {
  const btn = document.querySelector("#btn-filter");
  const filterHeader = document.querySelector("#filter-header");
  const filterFooter = document.querySelector("#filter-footer");

  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      btn.querySelector("span").textContent = "открыть фильтры";
      filterHeader.classList.remove("active");
      filterFooter.classList.remove("active");
    } else {
      btn.classList.add("active");
      btn.querySelector("span").textContent = "скрыть фильтры";
      filterHeader.classList.add("active");
      filterFooter.classList.add("active");
    }
  });
  window.addEventListener("resize", () => {
    // Media queries
    const media_query = {
      xl_small: window.matchMedia("(max-width: 1439.98px)").matches,
      xl_big: window.matchMedia("(min-width: 1439.98px)").matches,
      pl_small: window.matchMedia("(max-width: 991.98px)").matches,
      pl_big: window.matchMedia("(min-width: 991.98px)").matches,
    };

    if (media_query.pl_small) {
      console.log("filter");
      filterHeader.classList.remove("active");
      filterFooter.classList.remove("active");
      btn.classList.remove("active");
      btn.querySelector("span").textContent = "открыть фильтры";
    }
    if (media_query.pl_big) {
      btn.classList.add("active");
      btn.querySelector("span").textContent = "скрыть фильтры";
      filterHeader.classList.add("active");
      filterFooter.classList.add("active");
    }
  });
}
try {
  hideShowBlockFilter();
} catch (e) {}

// Carousel
function carouesel() {
  const items = document.querySelectorAll(".course__slide");
  const btnNext = document.querySelector("#next");
  const btnPrev = document.querySelector("#prev");
  let idx = 0;

  function nextContent(idxFirst, idxSecond) {
    const srcNewImg = items[idxSecond].querySelector("img").getAttribute("src");
    const srcOldImg = items[idxFirst].querySelector("img").getAttribute("src");
    items[0].querySelector("img").setAttribute("src", srcNewImg);
    items[1].querySelector("img").setAttribute("src", srcOldImg);
  }

  btnNext.addEventListener("click", () => {
    nextContent(0, 1);
    idx++;
  });

  btnPrev.addEventListener("click", () => {
    const srcNewImg = items[1].querySelector("img").getAttribute("src");
    const srcOldImg = items[0].querySelector("img").getAttribute("src");
    items[0].querySelector("img").setAttribute("src", srcNewImg);
    items[1].querySelector("img").setAttribute("src", srcOldImg);
    idx--;
  });
}

try {
  carouesel();
} catch (e) {}

// Slider for the event
function swiperEvent(item) {
  const swiper = new Swiper(item, {
    loop: false,
    speed: 1500,
    mousewheel: {
      eventsTarget: ".event__body",
    },
    spaceBetween: 20,
    allowTouchMove: true,
    slidesPerView: "auto",
    scrollbar: {
      el: ".event-scrollbar",
    },
  });
}
try {
  swiperEvent(".event__swiper");
} catch (e) {}

// Show/hide block of the filter
function hideShowBlockFilterSecond() {
  const btn = document.querySelector("#btn-filter-event");
  const footer = document.querySelector("#event-list");
  const top = document.querySelector("#event-wraps");

  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      btn.querySelector("span").textContent = "открыть фильтры";
      footer.classList.remove("active");
      top.classList.remove("active");
    } else {
      btn.classList.add("active");
      btn.querySelector("span").textContent = "скрыть фильтры";
      footer.classList.add("active");
      top.classList.add("active");
    }
  });
}
try {
  hideShowBlockFilterSecond();
} catch (e) {}

// Swiper for the News
function swiperNews() {
  const swiper = new Swiper(".news__swiper", {
    loop: true,
    spaceBetween: 20,
    allowTouchMove: true,
    speed: 1200,
    slidesPerView: "auto",
    mousewheel: {
      eventsTarget: ".news__wrapper",
    },
    scrollbar: {
      el: ".news__scrollbar",
    },
    breakpoints: {
      320: {
        loop: false,
      },
      767.98: {
        loop: false,
      },
      991.98: {
        loop: true,
      },
    },
  });
}
try {
  swiperNews();
} catch (e) {}

// Scroll top Images
function scrollTop() {
  $(document).on("scroll", function () {
    var stickyMob = $(".center__asd");

    const one = $("#asd");

    if (one.length) {
      if ($(this).scrollTop() >= one.offset().top) {
        stickyMob.addClass("active");
      } else {
        stickyMob.removeClass("active");
      }
    }
  });

  $(document).on("scroll", function () {
    var second = $(".center__asd");

    const two = $("#asd2");

    if (two.length) {
      if ($(this).scrollTop() >= $("#asd2").offset().top) {
        second.addClass("actives");
      } else {
        second.removeClass("actives");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 1439.98) {
    }
  });
}
try {
  scrollTop();
} catch (e) {}

// Dom-elements
const domElements = {
  header: {
    nav: document.querySelector("#nav"),
    menu: document.querySelector("#menu"),
    list: document.querySelector("#list"),
  },
  media_query: {
    xl_small: window.matchMedia("(max-width: 1439.98px)").matches,
    xl_big: window.matchMedia("(min-width: 1439.98px)").matches,
    pl_small: window.matchMedia("(max-width: 1199.98px)").matches,
    pl_big: window.matchMedia("(min-width: 1199.98px)").matches,
  },
};

// Adaptive menu
function mediaMenu() {
  const elemNavLinks = domElements.header.list.querySelectorAll(".menu__link");
  const elemMenuLinks = domElements.header.menu.querySelectorAll(".menu__link");
  const elemNavItems = domElements.header.list.querySelectorAll(".menu__li");
  const elemMenuItems = domElements.header.menu.querySelectorAll(".menu__li");

  // < 1439.98px
  if (domElements.media_query.xl_small) {
    elemNavLinks.forEach((link) => {
      domElements.header.menu.querySelector(".menu__elems").appendChild(link);
    });
  }
  // > 1439.98px
  if (domElements.media_query.xl_big) {
    elemMenuLinks.forEach((link) => {
      domElements.header.list.appendChild(link);
    });
  }
  // < 991.98px
  if (domElements.media_query.pl_small) {
    elemNavItems.forEach((item) => {
      domElements.header.menu.querySelector(".menu__elems").appendChild(item);
    });
    try {
      swiperHome();
    } catch (e) {}
  }
  // > 991.98px
  if (domElements.media_query.pl_big) {
    elemMenuItems.forEach((item) => {
      domElements.header.list.appendChild(item);
    });
  }

  // Resize
  window.addEventListener("resize", () => {
    // Media queries
    const media_query = {
      xl_small: window.matchMedia("(max-width: 1439.98px)").matches,
      xl_big: window.matchMedia("(min-width: 1439.98px)").matches,
      pl_small: window.matchMedia("(max-width: 1199.98px)").matches,
      pl_big: window.matchMedia("(min-width: 1199.98px)").matches,
    };
    // Elements
    const elemNavLinks =
      domElements.header.list.querySelectorAll(".menu__link");
    const elemMenuLinks =
      domElements.header.menu.querySelectorAll(".menu__link");
    const elemNavItems = domElements.header.list.querySelectorAll(".menu__li");
    const elemMenuItems = domElements.header.menu.querySelectorAll(".menu__li");

    // < 1439.98px
    if (media_query.xl_small) {
      elemNavLinks.forEach((link) => {
        domElements.header.menu.querySelector(".menu__elems").appendChild(link);
      });
    }
    // > 1439.98px
    if (media_query.xl_big) {
      elemMenuLinks.forEach((link) => {
        domElements.header.list.appendChild(link);
      });
    }
    // < 991.98px
    if (media_query.pl_small) {
      elemNavItems.forEach((item) => {
        domElements.header.menu.querySelector(".menu__elems").appendChild(item);
      });
      try {
        swiperHome();
      } catch (e) {}
    }
    // > 991.98px
    if (media_query.pl_big) {
      elemMenuItems.forEach((item) => {
        domElements.header.list.appendChild(item);
      });
    }
  });
}
mediaMenu();

// Swiper for the our-partners
function swiperPartners() {
  const swiper = new Swiper(".our-partners__swiper", {
    slidesPerView: "auto",
    speed: 1900,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: {
      eventsTarget: ".our-partners__swiper",
    },
    breakpoints: {
      1279.98: {
        allowTouchMove: true,
      },
      1439.98: {
        allowTouchMove: false,
      },
    },
  });
}

function newTest() {
  const xl_small = window.matchMedia("(max-width: 1439.98px)").matches;
  const xl_big = window.matchMedia("(min-width: 1439.98px)").matches;
  const lg_small = window.matchMedia("(max-width: 1199.98px)").matches;
  const lg_big = window.matchMedia("(min-width: 1199.98px)").matches;
  let valid = true;

  if (xl_small && !valid) {
    valid = true;
  }
  if (xl_big) {
    valid = false;
  }

  if (!valid) {
  } else {
    try {
      swiperPartners();
    } catch (e) {}
  }

  window.addEventListener("resize", () => {
    const xl_small = window.matchMedia("(max-width: 1439.98px)").matches;
    const xl_big = window.matchMedia("(min-width: 1439.98px)").matches;
    const lg_small = window.matchMedia("(max-width: 1199.98px)").matches;
    const lg_big = window.matchMedia("(min-width: 1199.98px)").matches;

    if (xl_small && !valid) {
      valid = true;
    }
    if (xl_big) {
      valid = false;
      try {
        swiperPartners();
      } catch (e) {}
    }
  });
}

newTest();

// Swiper mobily Home
function swiperHome() {
  const swiper = new Swiper(".center__swiper", {
    loop: false,
    effect: "cards",
    grabCursor: true,
    speed: 1600,
    spaceBetween: 20,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}

// Swiper on Head
function swiperHead(item, number) {
  const head_swiper = new Swiper(item, {
    loop: false,
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: false,
    initialSlide: number,
    mousewheel: {
      eventsTarget: item,
    },
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      991.98: {
        centeredSlides: false,
      },
    },
  });
}
try {
  swiperHead(".head__swiper-programProject", 7);
} catch (e) {}

function swiperHeadSeconds(item, number) {
  const head_swiper = new Swiper(item, {
    loop: false,
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: false,
    initialSlide: number,
    mousewheel: {
      eventsTarget: item,
    },
    breakpoints: {
      320: {
        centeredSlides: true,
        loop: true,
      },
      991.98: {
        centeredSlides: false,
      },
    },
  });
}

try {
  swiperHeadSeconds(".head__swiper-about", 0);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-team", 1);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-documents", 2);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-reports", 3);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-program", 4);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-partners", 5);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-data", 2);
} catch (e) {}
try {
  swiperHeadSeconds(".head__swiper-trade", 0);
} catch (e) {}

// Scroll Header
const fixedHeader = () => {
  const header = document.querySelector("#header");
  const headerHeight = header.clientHeight;
  const body = document.querySelector("body");

  document.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    if (scroll > headerHeight) {
      header.classList.add("active");
      body.style.paddingTop = headerHeight + 30 + "px";
    } else {
      header.classList.remove("active");
      body.removeAttribute("style");
    }
  });
};
fixedHeader();

// Want help on button
const fixedButtonWantHelp = (item, nameBtn) => {
  const btn = document.querySelector(item);
  const btnHeight = btn.clientHeight;

  const theMostBig = window.matchMedia("(max-width: 1199.98px)").matches;
  const large = window.matchMedia("(max-width: 991.98px)").matches;
  const medium = window.matchMedia("(max-width: 767.98px)").matches;
  const small = window.matchMedia("(max-width: 576.98px)").matches;
  const lg_small = window.matchMedia("(max-width: 476.98px)").matches;
  const m_small = window.matchMedia("(max-width: 374.98px)").matches;

  document.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    if (nameBtn === "home") {
      if (scroll > 260) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }

      if (theMostBig) {
        if (scroll > 215) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
      if (large) {
        if (scroll > 208) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
      if (medium) {
        if (scroll > 265) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
      if (small) {
        if (scroll > 185) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
      if (lg_small) {
        if (scroll > 165) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
      if (m_small) {
        if (scroll > 115) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
    }

    if (nameBtn === "default") {
      if (scroll > btnHeight - 30) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
      if (lg_small) {
        if (scroll > btnHeight - 15) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
      if (m_small) {
        if (scroll > btnHeight - 10) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
    }
  });
};
try {
  fixedButtonWantHelp("#btn-primary", "default");
} catch (e) {}
try {
  fixedButtonWantHelp("#btn-home", "home");
} catch (e) {}

const media_query = {
  xl_small: window.matchMedia("(max-width: 1439.98px)").matches,
  xl_big: window.matchMedia("(min-width: 1439.98px)").matches,
  pl_small: window.matchMedia("(max-width: 991.98px)").matches,
  pl_big: window.matchMedia("(min-width: 991.98px)").matches,
  scrollbar: document.querySelectorAll(".wathed__scrollbar"),
};

const tabsPeople = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "grid"
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
  tabsPeople(".content__items", ".content_item", ".content__wrap", "active");
} catch (e) {}

try {
  (function () {
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.getElementById("statistic-table").scrollLeft -= delta * 210; // Multiplied by 10
      e.preventDefault();
    }
    if (document.getElementById("statistic-table").addEventListener) {
      // IE9, Chrome, Safari, Opera
      document
        .getElementById("statistic-table")
        .addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document
        .getElementById("statistic-table")
        .addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      document
        .getElementById("statistic-table")
        .attachEvent("onmousewheel", scrollHorizontally);
    }
  })();
} catch (e) {}
