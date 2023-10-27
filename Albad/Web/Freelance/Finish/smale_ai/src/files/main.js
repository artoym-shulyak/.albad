// --> Tabs <--
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
    content[i].classList.add(activeClass);
  }

  function hideTabContent() {
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
    content.forEach((item) => {
      item.classList.remove(activeClass);
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
// [ Блок - Возможности ] --> Tabs <--
try {
  tabs(".possible__head", ".possible__head-item", ".possible__body", "active");
} catch (e) {}
// [ Шапка - Товары, Корзина ] --> Tabs <--
try {
  tabs(".main__header", ".main__h-item", ".goods__wrap", "active");
} catch (e) {}
// [ Варинты ракурсов камеры - Камера ] --> Tabs <--
try {
  tabs(".camera__items", ".camera__item", ".camera__img", "active");
} catch (e) {}

// -------------------------------------------------------------------

// --> Accordeon <--
const accordeon = () => {
  const elems = document.querySelectorAll(".questions__head span");
  const footerElemes = document.querySelectorAll(".questions__footer");

  elems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const target = e.target;
      const footer = target.closest(".questions__head").nextElementSibling;
      elem.classList.toggle("active");
      footer.classList.toggle("active");
    });
  });
};
// [ Блок - Частные вопросы ] --> Accordeon <--
try {
  accordeon();
} catch (e) {}

// -------------------------------------------------------------------

// [ Блок - Тарифы ] --> Swiper JS <--
const swiperRates = new Swiper(".rates__swiper", {
  loop: false,
  slidesPerView: "auto",
  speed: 800,
  autoHeight: true,
  spaceBetween: 40,
  centeredSlides: true,
  navigation: {
    nextEl: ".rates__next",
    prevEl: ".rates__prev",
  },
  breakpoints: {
    320: {
      centeredSlides: false,
      slidesPerView: 1,
    },
    767.98: {
      centeredSlides: false,
      slidesPerView: "auto",
    },
    1124.98: {
      centeredSlides: true,
      slidesPerView: "auto",
    },
  },
});

// [ Блок - Отзывы ] --> Swiper JS <--
const swiperComment = new Swiper(".comment__swiper", {
  loop: false,
  slidesPerView: 2,
  speed: 500,
  spaceBetween: 70,
  navigation: {
    nextEl: ".comment__next",
    prevEl: ".comment__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767.98: {
      slidesPerView: 2,
    },
  },
});

// [ Блок - Новости ] --> Swiper JS <--
const swiperNews = new Swiper(".news__swiper", {
  loop: false,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },
});

// @media --> min-width: 991.98px <--
const pl_small = window.matchMedia("(min-width: 991.98px)").matches;
if (pl_small) {
  // [ Блок - Сообщество ] --> Swiper JS <--
  const swiperCommunity = new Swiper(".community__swiper", {
    loop: false,
    slidesPerView: 6,
    speed: 500,
    spaceBetween: 30,
    navigation: {
      nextEl: ".community__next",
      prevEl: ".community__prev",
    },
    breakpoints: {
      991.98: {
        slidesPerView: 4,
      },
      1123.98: {
        slidesPerView: 5,
      },
      1199.98: {
        slidesPerView: 6,
      },
    },
  });
} else {
}

// [ Страница - Результат диагностики ] --> Swiper JS <--
const swiperDiagnosics = new Swiper(".result__swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: ".result__next",
    prevEl: ".result__prev",
  },
});

// [ Блок - Товары ] --> Swiper JS <--
const swipersGoods = (item, next, prev) => {
  let swiperGoods = new Swiper(item, {
    loop: true,
    slidesPerView: 3,
    speed: 500,
    spaceBetween: 34,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    breakpoints: {
      991.98: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1199.98: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1279.98: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
    },
  });
};
// @media for [ Блок - Товары ] --> Swiper JS <--
if (window.matchMedia("(min-width: 991.98px)").matches) {
  try {
    swipersGoods(
      ".goods__swiper",
      ".goods__body-first .goods__next",
      ".goods__body-first .goods__prev"
    );
  } catch (e) {}
  try {
    swipersGoods(
      ".goods__swiper-second",
      ".goods__body-last .goods__next",
      ".goods__body-last .goods__prev"
    );
  } catch (e) {}
}

// -------------------------------------------------------------------

// --> Circle functionality <--
const progressCircle = (elem, colorFull) => {
  // const elems = document.querySelectorAll(".result__circle");

  let size = 91;
  let lineWidth = 25;

  const pl_small = window.matchMedia("(max-width: 479.98px)").matches;
  if (pl_small) {
    size = 51;
    lineWidth = 15;
  }

  var el = document.querySelector(elem);

  var options = {
    percent: el.getAttribute("data-percent") || 25,
    size: el.getAttribute("data-size") || size,
    lineWidth: el.getAttribute("data-line") || lineWidth,
    rotate: el.getAttribute("data-rotate") || 0,
  };

  var canvas = document.createElement("canvas");
  var span = document.createElement("span");
  span.textContent = options.percent;

  if (typeof G_vmlCanvasManager !== "undefined") {
    G_vmlCanvasManager.initElement(canvas);
  }

  var ctx = canvas.getContext("2d");
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  ctx.translate(options.size / 2, options.size / 2); // change center
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  var radius = (options.size - options.lineWidth) / 2;

  var drawCircle = function (color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;

    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  drawCircle("#f1f1f1", options.lineWidth, 100 / 100);
  drawCircle(colorFull, options.lineWidth, options.percent / 100);
};

// [ Первый круг ] --> Circle functionality <--
try {
  progressCircle(".result__circle", "#7EB7FC");
} catch (e) {}
// [ Второй круг ] --> Circle functionality <--
try {
  progressCircle(".result__circle--2", "#3C33C2");
} catch (e) {}

// -------------------------------------------------------------------

// --> Select functionality <--
function hundleSelect(boxesSelect, boxSelect) {
  const nameItems = document.querySelectorAll(boxesSelect),
    body = document.querySelector("body");

  nameItems.forEach((item) => {
    const select = item,
      selectItem = item.querySelector(boxSelect);

    //	Функционал раскрытия/сворачивания выпадающих списокв
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
        select.classList.remove("open");
        selectItem.classList.remove("open");
      } else {
      }
    });
  });
}
try {
  hundleSelect(".select", ".select__value");
} catch (e) {}

// -------------------------------------------------------------------

// --> Timer functionality <--

let deadline = "2023-06-29";
const timer = (container, deadline) => {
  function addZero(num) {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function getTimerRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimerRemaining(endtime);

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  }

  setClock(container, deadline);
};
// -> Clicked - the timer start
try {
  const startTimer = document.querySelector("#start-timer");
  startTimer.addEventListener("click", () => {
    timer(".timings__sub-timer", deadline);
  });
} catch (e) {}

// -------------------------------------------------------------------

// --> Hide/Show - Calendar LK <--
const showCalendar = () => {
  const elem = document.querySelector(".doctor__head");

  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
    elem.nextElementSibling.classList.toggle("active");
  });
};
try {
  showCalendar();
} catch (e) {}

// -------------------------------------------------------------------

// --> Hide/Show - Блок "Наше сообщество" <--
const showHideContent = () => {
  const btn = document.querySelector(".community__btn");
  const elemsMore = document.querySelectorAll(".elem-more");

  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      btn.textContent = "Развернуть";
      elemsMore.forEach((el) => {
        el.classList.remove("active");
      });
    } else {
      btn.classList.add("active");
      btn.textContent = "Свернуть";
      elemsMore.forEach((el) => {
        el.classList.add("active");
      });
    }
  });
};
try {
  showHideContent();
} catch (e) {}

// -------------------------------------------------------------------

// --> Modal <-- Sign in, Register
const signRegisterModal = () => {
  const btn = document.querySelector("#authorization");
  const signModal = document.querySelector("#sign");
  btnRegister = signModal.querySelector("[data-register]");
  const registerModal = document.querySelector("#register");

  btn.addEventListener("click", () => {
    signModal.classList.add("show");
  });

  btnRegister.addEventListener("click", () => {
    signModal.classList.remove("show");
    registerModal.classList.add("show");
  });

  document.body.addEventListener("scroll", () => {
    signModal.classList.remove("show");
    registerModal.classList.remove("show");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    const windowModal = document.querySelector("[data-window]");
    if (
      (target.closest("#sign") && !target.closest("[data-window]")) ||
      (target.closest("#register") && !target.closest("[data-window]")) ||
      (!target.closest("#authorization") && !target.closest("[data-window]"))
    ) {
      signModal.classList.remove("show");
      registerModal.classList.remove("show");
    } else {
    }
  });
};
try {
  signRegisterModal();
} catch (e) {}

// -------------------------------------------------------------------

// --> Moving on @media <-- Медиа запросы некоторых блоков на странице "Карты"
const elemsPageMapsMedia = () => {
  const infoMaps = document.querySelector("#info-maps"),
    btnMore = infoMaps.querySelector("#info-more-service");
  const infoService = document.querySelector("#info-service");
  const btnBack = document.querySelector("#to-maps");

  btnMore.addEventListener("click", () => {
    infoService.style.display = "block";
    infoMaps.style.display = "none";
    btnBack.style.display = "block";
  });

  btnBack.addEventListener("click", () => {
    infoService.style.display = "none";
    infoMaps.style.display = "block";
    btnBack.style.display = "none";
  });
};
try {
  elemsPageMapsMedia();
} catch (e) {}

// --> Moving on @media <-- Медиа запросы некоторых блоков на странице "Доставка"
const elemsPageDeliveryMedia = () => {
  // Media queries
  const pl_small = window.matchMedia("(max-width: 1199.98px)").matches;
  const pl_big = window.matchMedia("(min-width: 1199.98px)").matches;

  // Elements
  const elemPrev = document.querySelector("#mv-media-item-prev");
  const elemNext = document.querySelector("#mv-media-item-next");
  const block = document.querySelector(".delivery__form");

  // < 1199.98px
  if (pl_small) {
    block.after(elemNext);
  } else {
    elemPrev.after(elemNext);
  }
};
try {
  elemsPageDeliveryMedia();
} catch (e) {}

// --> Moving on @media <-- Медиа запросы некоторых блоков "Врач ЛК"
const elemsPageHomeDoctorMedia = () => {
  // Media queries
  const pl_small = window.matchMedia("(max-width: 767.98px)").matches;
  const pl_big = window.matchMedia("(min-width: 767.98px)").matches;

  // Elements
  const block = document.querySelector(".doctor__item");
  const calendar = document.querySelector(".doctor__calendar");
  const prevBlock = document.querySelector(".doctor__text");

  // < 767.98px
  if (pl_small) {
    block.after(calendar);
  } else {
    prevBlock.after(calendar);
  }
};
try {
  elemsPageHomeDoctorMedia();
} catch (e) {}

// -------------------------------------------------------------------

// --> Правая боковая панель <--  Взаимодействие с различными операциями
const settingPrimaryWindow = () => {
  // Общие dom-elements
  const domElements = {
    window: document.querySelector("#primary"), // Основное окно
    btnGoods: document.querySelector("#btn-goods"), // Кнопка ТОВАРЫ
    btnBasket: document.querySelectorAll("[data-basket]"), // Кнопка КОРЗИНА
    btnsGoods: document.querySelectorAll(".main__header .main__h-item"), // Кнопки выбор товара
    btnDelivery: document.querySelector("#btn-delivery"), // Кнопка корзины
    btnChat: document.querySelector("#btn-chat"), // Кнопка чат-бота
    btnsDiagcs: document.querySelectorAll("[data-diagcs]"), // Кнопки "Провести диагностику"
    btnBackDiagcs: document.querySelectorAll("[data-back-diagcs]"), // Кнопки "Вернуться назад из проведения диагностики"
    windowScreen: {
      screen: document.querySelector("#primary-screen"), // Основное окно
      toBack: document.querySelector("[data-back]"), // Вернуться на предыдущее окно из "Основого окна"
      windowPrimary: document.querySelector("#window-primary"), // Блоки внутри "Основного окна"
      toWindowScreen: document.querySelector("#to-primary-screen"), // btn -> Переход к "Основному окну"
    },
    windowSettings: {
      toWindowSettings: document.querySelector("#to-settings"), // btn -> Переход к окну "Настроки"
      windowSettings: document.querySelector("#settings"), // окно "Настроки"
      toBackWindowScreen: document.querySelector("[data-back-window]"), // // Вернуться на предыдущее окно из "Настроки"
    },
    toDoctorScreen: document.querySelector("#to-main-doctor"), // Кнопка попасть к Врачу
  };

  // -- window ВРАЧ --
  domElements.toDoctorScreen.addEventListener("click", () => {
    domElements.window.classList.add("show-doctor");
    domElements.window.classList.remove("show-goods");
    domElements.window.classList.remove("show-basket");
    domElements.window.classList.remove("show-chat");
    domElements.window.classList.remove("show-diagnostics");
    domElements.window.classList.remove("show-timer");
    domElements.window.classList.remove("show-maps");
    domElements.window.classList.remove("show-result");
  });

  // -- window БОТ-ЧАТ --
  domElements.btnChat.addEventListener("click", () => {
    domElements.window.classList.remove("show-doctor");
    domElements.window.classList.add("show-chat");
    domElements.window.classList.remove("show-goods");
    domElements.window.classList.remove("show-basket");
    domElements.window.classList.remove("show-diagnostics");
    domElements.window.classList.remove("show-delivery");
    domElements.window.classList.remove("show-timer");
    domElements.window.classList.remove("show-maps");
    domElements.window.classList.remove("show-result");
  });

  // -- window ТОВАРЫ --
  domElements.btnGoods.addEventListener("click", () => {
    domElements.window.classList.add("show-goods");
    domElements.window.classList.remove("show-doctor");
    domElements.window.classList.remove("show-basket");
    domElements.window.classList.remove("show-chat");
    domElements.window.classList.remove("show-diagnostics");
    domElements.window.classList.remove("show-timer");
    domElements.window.classList.remove("show-maps");
    domElements.window.classList.remove("show-result");
  });

  domElements.btnsGoods.forEach((btn) => {
    btn.addEventListener("click", () => {
      domElements.window.classList.remove("show-basket");
      domElements.window.classList.add("show-goods");
      domElements.window.classList.remove("show-doctor");
      domElements.window.classList.remove("show-chat");
      domElements.window.classList.remove("show-diagnostics");
      domElements.window.classList.remove("show-timer");
      domElements.window.classList.remove("show-maps");
      domElements.window.classList.remove("show-result");
    });
  });

  // -- window ДОСТАВКА --
  domElements.btnDelivery.addEventListener("click", (e) => {
    e.preventDefault();
    domElements.window.classList.remove("show-doctor");
    domElements.window.classList.add("show-delivery");
    domElements.window.classList.remove("show-goods");
    domElements.window.classList.remove("show-basket");
    domElements.window.classList.remove("show-diagnostics");
    domElements.window.classList.remove("show-timer");
    domElements.window.classList.remove("show-maps");
    domElements.window.classList.remove("show-result");
  });

  // -- window КОРЗИНА --
  domElements.btnBasket.forEach((btn) => {
    btn.addEventListener("click", () => {
      domElements.window.classList.add("show-basket");
      domElements.window.classList.remove("show-goods");
      domElements.window.classList.remove("show-doctor");
      domElements.window.classList.remove("show-chat");
      domElements.window.classList.remove("show-diagnostics");
      domElements.window.classList.remove("show-timer");
      domElements.window.classList.remove("show-maps");
      domElements.window.classList.remove("show-result");
    });
  });

  // -- window Элементы Диагностики --
  domElements.btnsDiagcs.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      domElements.window.classList.remove("show-doctor");
      domElements.window.classList.remove("show-chat");
      domElements.window.classList.remove("show-goods");
      domElements.window.classList.remove("show-basket");
      domElements.window.classList.add("show-diagnostics");
      domElements.window.classList.remove("show-timer");
      domElements.window.classList.remove("show-maps");
      domElements.window.classList.remove("show-result");
      domElements.window.querySelectorAll(".diagcs").forEach((item) => {
        domElements.window
          .querySelectorAll(".diagcs")
          [i].classList.add("active");
      });
    });
  });
  // --  window Элементы Диагностики мобильная версия --
  domElements.btnBackDiagcs.forEach((btnBack, i) => {
    btnBack.addEventListener("click", (e) => {
      e.preventDefault();
      domElements.window.classList.remove("show-diagnostics");
      domElements.window.querySelectorAll(".diagcs").forEach((item) => {
        domElements.window
          .querySelectorAll(".diagcs")
          [i].classList.remove("active");
      });
    });
  });

  // -- НАСТРОЙКИ ---
  // При клике - иконку профиля -  -> "Основное окно"
  domElements.windowScreen.toWindowScreen.addEventListener("click", () => {
    domElements.windowScreen.screen.style.display = "flex";
  });

  // При клике - btn (основа-назад) -  -> "Основного окна"
  domElements.windowScreen.toBack.addEventListener("click", () => {
    domElements.windowScreen.screen.style.display = "none";
  });

  // При клике - btn иконки Настроки - -> "Настроки"
  domElements.windowSettings.toWindowSettings.addEventListener("click", (e) => {
    e.preventDefault();
    domElements.windowSettings.windowSettings.style.display = "flex";
    domElements.windowScreen.windowPrimary.style.display = "none";
  });

  // При клике - btn (настроки-назад) - -> "Настройки"
  domElements.windowSettings.toBackWindowScreen.addEventListener(
    "click",
    () => {
      domElements.windowSettings.windowSettings.style.display = "none";
      domElements.windowScreen.windowPrimary.style.display = "block";
    }
  );
};
try {
  settingPrimaryWindow();
} catch (e) {}

// -------------------------------------------------------------------

// --> Camera <-- Запуск камеры / переход на заднюю камеру
const videoCamera = () => {
  const playFastCamera = document.querySelector("#start-fast");
  const btnsCamera = document.querySelectorAll("[data-camera]");
  const btnFrontalCamera = document.querySelector("[data-frontal]");
  const video = document.querySelector("#camera");
  const cameraWindow = document.querySelector(".camera");

  function camera() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: {
            exact: "environment",
          },
        },
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch(console.error);
  }
  function cameraFrontal() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
        },
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch(console.error);
  }

  // Запуск камеры
  playFastCamera.addEventListener("click", () => {
    cameraWindow.classList.add("fast-camera");
    window.addEventListener("load", cameraFrontal(), false);
  });

  // Включение переднюю камеру
  btnFrontalCamera.addEventListener("click", () => {
    window.addEventListener("load", camera(), false);
  });

  btnsCamera.forEach((btn) => {
    btn.addEventListener("click", () => {
      cameraWindow.classList.add("screen-camera");
      window.addEventListener("load", cameraFrontal(), false);
    });
  });
};
try {
  videoCamera();
} catch (e) {}

// -------------------------------------------------------------------

// Resize
window.addEventListener("resize", () => {
  try {
    elemsPageDeliveryMedia();
  } catch (e) {}
  try {
    elemsPageHomeDoctorMedia();
  } catch (e) {}
});

// -------------------------------------------------------------------

// My functional for all Pages
function pageModal() {
  const modal = document.querySelector("#data-base-modal");
  const open = document.querySelectorAll(".data-base");
  const close = modal.querySelector("button");

  open.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target === modal) {
      modal.style.display = "none";
    }
  });
}
pageModal();
