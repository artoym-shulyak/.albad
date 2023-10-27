// Dom-elements
domElements = {
  chat: {
    header: document.querySelector("#header"),
    content: document.querySelector("#chat"),
    openBtn: document.querySelector("#open-chat"),
    closeBtn: document.querySelector("#close-chat"),
  },
};
// - Функция - открытие / скрытие чата
function hundleChat() {
  domElements.chat.openBtn.addEventListener("click", (e) => {
    domElements.chat.openBtn.style.opacity = 0;
    domElements.chat.content.classList.add("_active");
    domElements.chat.content.classList.remove("_no-active");
  });
  domElements.chat.closeBtn.addEventListener("click", (e) => {
    domElements.chat.openBtn.style.opacity = 1;
    domElements.chat.content.classList.remove("_active");
    domElements.chat.content.classList.add("_no-active");
  });
  if (window.screen.availWidth < 1199) {
    header.appendChild(domElements.chat.openBtn);
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 1199) {
      header.appendChild(domElements.chat.openBtn);
    }
  });
}
try {
  hundleChat(); // - Функция - открытие / скрытие чата
} catch (e) {}

//////////////////////////

// - Функция - Открытие / скрытие меню
function hundleMenu() {
  const openMenu = document.querySelector(".header__burger"),
    blockMenu = document.querySelector(".header__menu"),
    closeMenu = blockMenu.querySelector("[data-close]");

  openMenu.addEventListener("click", (e) => {
    blockMenu.classList.add("_active");
    blockMenu.classList.remove("_no-active");
  });
  closeMenu.addEventListener("click", (e) => {
    blockMenu.classList.remove("_active");
    blockMenu.classList.add("_no-active");
  });
}
try {
  hundleMenu();
} catch (e) {}

//////////////////////////////////////////////////////////

// - Слайдер - Выберите сервер
function swiperServer() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 7,
    loop: true,
    spaceBetween: 25,
    autoHeight: true,
    mousewheel: {
      eventsTarget: ".server__items ",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".server__next",
      prevEl: ".server__prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      374.98: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      479.98: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      576.98: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      699.98: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
      767.98: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      991.98: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1079.98: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1279.98: {
        slidesPerView: 7,
        spaceBetween: 25,
      },
    },
  });
}

try {
  swiperServer();
} catch (e) {}

//////////////////////////////////////////////////////////

//  - Функция - Отркытие / Закрытие модальное окно
function modal(open, modalContent) {
  const openBtn = document.querySelectorAll(open),
    modal = document.querySelector(modalContent),
    closeBtn = modal.querySelector("[data-close]"),
    body = document.querySelector("body"),
    openChatBtn = document.querySelector("#open-chat");
  const modals = document.querySelectorAll("[data-modal]");

  openBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      body.classList.add("lock");
      openChatBtn.classList.add("lock");
      modals.forEach((modal) => {
        modal.classList.remove("_active");
      });
      modal.classList.add("_active");
    });
  });

  closeBtn.addEventListener("click", (e) => {
    modal.classList.remove("_active");
    body.classList.remove("lock");
    openChatBtn.classList.remove("lock");
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target === modal) {
      modal.classList.remove("_active");
      body.classList.remove("lock");
      openChatBtn.classList.remove("lock");
    }
  });
}

// Игнорируем ошибки на других страницах
try {
  modal("#subs-on", "#connect");
} catch (e) {}
try {
  modal("#notice", "#notice-modal");
} catch (e) {}
try {
  modal(".goods__up", "#promote");
} catch (e) {}
try {
  modal("#sign-in", "#sign-in-modal");
} catch (e) {}
try {
  modal("#sign-up", "#sign-up-modal");
} catch (e) {}
// sign-up sign-modal _active
try {
  modal(".sign-in__up", "#sign-up-modal");
} catch (e) {}

//////////////////////////////////////////////////////////

// Табы - страница "Ваш профиль" -
const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  active,
  display = "block"
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function showTabContent(i = 0) {
    tab[i].classList.add(activeClass);
    content[i].classList.add(active);
    try {
      const blockChat = document.querySelector(".your-mess__region"), // Блок чата
        backChat = blockChat.querySelector(".your-mess__back"),
        primaryBlock = document.querySelector(".your-mess__body"),
        prevBtn = document.querySelectorAll(".your-mess__prev"); // Стрелка
      backChat.style.display = "none";
      blockChat.style.background = "none";
      if (window.screen.availWidth < 991.98) {
        if (!blockChat.classList.contains("active")) {
          blockChat.classList.add("active");
          primaryBlock.style.display = "none";
        }
        prevBtn.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            hideTabContent();
            primaryBlock.style.display = "block";
            blockChat.classList.remove("active");
            console.log("click");
          });
        });
      }
      window.addEventListener("resize", () => {
        if (window.screen.availWidth < 991.99) {
          if (!blockChat.classList.contains("active")) {
            blockChat.classList.add("active");
            primaryBlock.style.display = "none";
          }
        }
      });
    } catch (e) {}
  }

  function hideTabContent() {
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
    content.forEach((item) => {
      item.classList.remove(active);
    });
  }

  if (tabSelector !== ".your-mess__tab") {
    hideTabContent();
    showTabContent();
  } else {
  }

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

// Игнорируем ошибки на других страницах
try {
  tabs(
    ".utilizer__list",
    ".utilizer__tab",
    ".utilizer__box",
    "active",
    "_active"
  );
} catch (e) {}
try {
  tabs(".user__list", ".user__tab", ".user__box", "active", "_active");
} catch (e) {}
try {
  tabs(
    ".your-mess__list",
    ".your-mess__tab",
    ".your-mess__box",
    "active",
    "_active"
  );
} catch (e) {}

//////////////////////////////////////////////////////////

// Ограничеваем сообщение в блоке - Ваши сообщения -
function limitText() {
  const boxMessage = document.querySelector(".your-mess__body"), // Блок сообщение
    messages = boxMessage.querySelectorAll(".your-mess__tab");

  messages.forEach((itemMess) => {
    const message = itemMess.querySelector(".your-mess__write");
    const text = message.textContent.substring(0, 41);
    message.innerHTML = text + `...`;
  });
}

// Игнорируем ошибки на других страницах
try {
  limitText();
} catch (e) {}

//////////////////////////////////////////////////////////

// - Функция -  Раскрывающий список
function hundleSelect(boxesSelect, boxSelect) {
  const filterItems = document.querySelectorAll(boxesSelect),
    body = document.querySelector("body");

  filterItems.forEach((item) => {
    const select = item,
      selectItem = item.querySelector(boxSelect);

    //  Функционал раскрытия/сворачивания выпадающих списокв
    selectItem.addEventListener("click", (e) => {
      if (!select.classList.contains("open")) {
        filterItems.forEach((box) => {
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
      // console.log(target)

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

      // Сворачиваем список при клики вне элемента
      body.addEventListener("click", (e) => {
        const target = e.target;
        const targetBody = e.currentTarget;
        console.log(target);
        if (target !== selectItem && targetBody === body) {
          target.classList.add("active");
          select.classList.remove("open");
          selectItem.classList.remove("open");
          console.log("close");
        } else {
        }
      });
    });
  });
}

// Игнорируем ошибки на других страницах
try {
  hundleSelect(".notice__box", ".notice__value"); // Раскрывающий список
} catch (e) {}

//////////////////////////////////////////////////////////

// Карточки
const cards = [
  {
    status: "Продажа",
    img: "img/ball.png",
    server: "Arizona RP",
    name: "Гучи шар с заточкой...",
    price: "15 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Продажа",
    img: "img/ball.png",
    server: "Arizona RP",
    name: "Гучи шар с заточкой...",
    price: "15 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Продажа",
    img: "img/ball.png",
    server: "Arizona RP",
    name: "Гучи шар с заточкой...",
    price: "15 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Продажа",
    img: "img/ball.png",
    server: "Arizona RP",
    name: "Гучи шар с заточкой...",
    price: "15 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
  {
    status: "Покупка",
    img: "img/ball.png",
    server: "Vice City",
    name: "Гучи шар с олд",
    price: "20 000 000",
  },
];

// - Функция - Рендеринг карточек
function renderCards(data) {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    let classStatus = "";
    let classPrice = "";
    if (data[i].status === "Продажа") {
      classStatus = "goods__sale";
      classPrice = "goods__price";
    } else {
      classStatus = "goods__buy";
      classPrice = "goods__price goods__price_buy";
    }
    let name = data[i].name.substring(0, 19) + "...";
    const htm = `
    <a href="#" class="goods__item">
    <div class="goods__img">
    <span class="${classStatus}"> ${data[i].status}</span>
    <img src=${data[i].img} alt="">
    </div>
    <div class="goods__server">${data[i].server}</div>
    <div class="goods__name">${name}</div>
    <div class="${classPrice}">
    <span>${data[i].price}</span>
    $
    </div>
    </a>
    `;

    cards.push(htm);
  }

  const random = randomCards(cards);

  document.querySelector(".catalog__items").innerHTML = random;
}

// - Функция - Рандом карточки
function randomCards(data) {
  const newCards = [];
  for (let i = 25; i > 0; i--) {
    const idx = Math.floor(Math.random() * data.length);
    const card = data.splice(idx, 1);
    newCards.push(...card);
  }

  return newCards.join("");
}

// - Функция - Обновление карточек
function updateCards() {
  let updateNum = 0;
  const interval = setInterval(() => {
    renderCards(cards);
    if (updateNum >= 0) {
      document
        .querySelector(".catalog__items")
        .classList.remove("catalog__items_anim");
      document
        .querySelector(".catalog__items")
        .classList.add("catalog__items_standart");
    } else {
      updateNum += 1;
      console.log("+1");
    }
  }, 5000);

  document.querySelector(".goods").addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target.classList.contains("goods__item")) {
      clearInterval(interval);
    }
  });
  document.querySelector(".goods").addEventListener("mouseout", (e) => {
    const target = e.target;
    if (target.classList.contains("goods__item")) {
      updateCards();
    }
  });
}
try {
  renderCards(cards);
  // updateCards()
} catch (e) {}

///////////////////////////////////////////////////////////////////////////

// - Function - Загрузка IMG
function uploadImg(fileBox, btnEnter = false, btnExit = false) {
  const box = document.querySelector(fileBox), // Файл
    input = box.querySelector('[name="upload"]'), // Файл инпута
    btn = box.querySelector("button"); // Кнопка

  // Отключили событиям "preventDefault", "stopPropagation"
  ["dragenter", "dragleave", "gragover", "drop"].forEach((eventName) => {
    input.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      false
    );
  });

  // - Событие - Перетаскиваем элемент в цель
  ["dragenter", "gragover"].forEach((eventName) => {
    input.addEventListener(
      eventName,
      () => {
        btnEnter(box);
      },
      false
    );
  });

  // - Событие - Когда элемент убираем из цели
  ["dragleave", "drop"].forEach((eventName) => {
    input.addEventListener(
      eventName,
      () => {
        btnExit(box);
      },
      false
    );
  });

  // - Function - Отслеживаем изменения IMG
  addImg(box, input);
}

// - Function - Когда элемент входит в область
function enterAreaName(box) {
  box.classList.add("active");
}

// - Function - Когда элемент входит в область
function exitAreaName(box) {
  box.classList.remove("active");
}

// - Function - Добавляем IMG
function addImg(box, input) {
  const img = document.createElement("img"),
    deleteImg = box.querySelector("[data-del]");

  box.appendChild(img);
  img.style.display = "none";

  // Отслеживаем событие добавление изображении
  ["drop", "input"].forEach((eventName) => {
    input.addEventListener(eventName, (e) => {
      if (eventName === "drop") {
        input.files = e.dataTransfer.files; // Получаем информацию о IMG
      }
      let nameImgArray = input.files[0].name.split(".");
      let name = nameImgArray[0];
      let format = nameImgArray[1];

      if (format === "png" || format === "jpg" || format === "webp") {
        img.src = `img/${name}.${format}`;
        img.alt = `${name}`;
        box.querySelector("span").style.display = "none";
        box.querySelector("button").style.display = "none";
        box.querySelector("input").style.display = "none";
        box.querySelector("[data-del]").style.display = "block";
        img.style.display = "block";
      }
    });
  });

  // Отслеживаем событие при клик на CLEAR
  deleteImg.addEventListener("click", (e) => {
    img.style.display = "none";
    box.querySelector("span").style.display = "flex";
    box.querySelector("button").style.display = "block";
    box.querySelector("input").style.display = "block";
    box.querySelector("[data-del]").style.display = "none";
  });
}

// Игнорируем ошибки на других страницах
try {
  uploadImg(".edit__file", enterAreaName, exitAreaName);
} catch (e) {}
try {
  uploadImg(".notice__file", enterAreaName, exitAreaName);
} catch (e) {}

///////////////////////////////////////////////////////////////////////////

// Медиа запросы страницы  - Создать объявление -
function mediaPageTitleAdd(wrapperElem, itemElem, firstWrapperBlock) {
  const wrapper = document.querySelector(wrapperElem),
    elem = document.querySelector(itemElem),
    firstElemBlock = document.querySelector(firstWrapperBlock);
  if (window.screen.availWidth < 767.98) {
    wrapper.appendChild(elem);
  } else {
    firstElemBlock.prepend(elem);
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 767.98) {
      wrapper.appendChild(elem);
    } else {
      firstElemBlock.prepend(elem);
    }
  });
}

// Игнорируем ошибки на других страницах
try {
  mediaPageTitleAdd(".notice__container", ".notice__title", ".notice__body");
} catch (e) {}
try {
  mediaPageTitleAdd(".edit__container", ".edit__title", ".edit__body");
} catch (e) {}

///////////////////////////////////////////////////////////////////////////

// Скрытие/открытие бока фильтра
function hideShowBlock() {
  const btn = document.querySelector("#server-hidden"),
    block = document.querySelector("#server-block");

  btn.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("active")) {
      btn.classList.remove("active");
      block.classList.remove("active");
    } else {
      btn.classList.add("active");
      block.classList.add("active");
    }
  });
}

// Игнорируем ошибки на других страницах
try {
  hideShowBlock();
} catch (e) {}

///////////////////////////////////////////////////////////////////////////

// Медиа запросы страницы  - Мои сообещение -
function mediaPageTitle(wrapperElem, itemElem, firstWrapperBlock) {
  const wrapper = document.querySelector(wrapperElem),
    elem = document.querySelector(itemElem),
    firstElemBlock = document.querySelector(firstWrapperBlock);

  if (window.screen.availWidth < 767.98) {
    wrapper.prepend(elem);
  } else {
    firstElemBlock.prepend(elem);
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 767.98) {
      wrapper.prepend(elem);
    } else {
      firstElemBlock.prepend(elem);
    }
  });
}

// Игнорируем ошибки на других страницах
try {
  mediaPageTitle(
    ".your-mess__container",
    ".your-mess__title",
    ".your-mess__body"
  );
} catch (e) {}

///////////////////////////////////////////////////////////////////////////

// Медиа запросы страницы - Покупка товара -
function mediaPageBuy() {
  const price = document.querySelector(".product__price"),
    serverElem = document.querySelector(".product__view"),
    firstServerElem = document.querySelector(
      ".product__inner:first-child .product__wrap:last-child .product__name"
    );

  if (window.screen.availWidth < 991.98) {
    price.before(serverElem);
  } else {
    firstServerElem.appendChild(serverElem);
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 991.98) {
      price.before(serverElem);
    } else {
      firstServerElem.appendChild(serverElem);
    }
  });
}

// Игнорируем ошибки на других страницах
try {
  mediaPageBuy();
} catch (e) {}

// - Функция - Повление/Скрытие кноки - Добавить объявление -
function addElementScroll(elem) {
  var last_scroll = 0; // Текущее значение скролла
  const item = document.querySelector(elem);

  window.onscroll = function () {
    if (window.scrollY > last_scroll) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    last_scroll = window.scrollY;
  };
}

// Игнорируем ошибки на других страницах и выполняется - Функция - Повление/Скрытие кноки - Добавить объявление -
try {
  if (window.screen.availWidth < 991.98) {
    addElementScroll("#add-ad");
  }
  window.addEventListener("resize", () => {
    if (window.screen.availWidth < 991.98) {
      addElementScroll("#add-ad");
    }
  });
} catch (e) {}

function notify() {
  const btnNotify = document.querySelector("#notify");
  const infoNotify = document.querySelector("#notify-info");

  btnNotify.addEventListener("click", () => {
    infoNotify.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target != btnNotify) {
      infoNotify.classList.remove("active");
    }
  });
}

try {
  notify();
} catch (e) {}

// --------------------------------------  Apr 14.04.2023  -------------------------------------------- //

// Fixed "Header"
const fixedHeader = () => {
  const header = document.querySelector("#header-fixed"),
    heightHeader = header.clientHeight;
  const btnChat = document.querySelector("#open-chat");

  document.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    if (scroll > heightHeader / 2) {
      header.classList.add("active");
      btnChat.classList.add("fixed");
    } else {
      header.classList.remove("active");
      btnChat.classList.remove("fixed");
    }
  });
};
fixedHeader();

// Add active class on bookmark
const addActiveBookmark = (items) => {
  const bookmarks = document.querySelectorAll(items);

  bookmarks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      item.classList.toggle("active");
    });
  });
};
addActiveBookmark(".goods__bookmark");

// On preventDefault elements
const prevDefault = (items) => {
  const elems = document.querySelectorAll(items);

  elems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};
prevDefault(".goods__promotion");

// Edit name my account
const editNameAccaunt = () => {
  const baseYourName = document.querySelector("#base-your-name"),
    yourName = baseYourName.querySelector("span"),
    btnEditYourName = baseYourName.querySelector("svg"),
    labelYourName = baseYourName.querySelector(".uilizer__label");
  const valueName = baseYourName.querySelector(".uilizer__edit"),
    btn = valueName.querySelector("button");
  let editValueName = valueName.querySelector("input");

  btnEditYourName.addEventListener("click", () => {
    labelYourName.style.display = "none";
    valueName.style.display = "block";
    editValueName.focus();
  });

  editValueName.addEventListener("input", () => {
    if (editValueName.value.length > 14) {
      editValueName.value = editValueName.value.substring(0, 8); // Максимально количество символов "User-a"
    }
  });

  btn.addEventListener("click", () => {
    labelYourName.style.display = "block";
    valueName.style.display = "none";
    yourName.textContent = editValueName.value;
  });
};
try {
  editNameAccaunt();
} catch (e) {}

function toggleCheckboxServices() {
  // off services
  const off = document.querySelector(".promote__off .promote__switch");

  // Item
  const elems = document.querySelectorAll(".promote__item");

  // off all the services and desableds
  off.addEventListener("click", () => {
    elems.forEach((elem) => {
      const btn = elem.querySelector(".promote__switch"),
        li = elem.querySelectorAll("label input");

      if (off.checked) {
        btn.disabled = true;
        if (btn.checked) {
          btn.checked = false;
          li.forEach((e) => {
            e.toggleAttribute("disabled");
            e.checked = false;
          });
        }
      } else {
        btn.disabled = false;
      }
    });
  });

  elems.forEach((elem) => {
    const btn = elem.querySelector(".promote__switch"),
      li = elem.querySelectorAll("label input");

    // off/on this service
    btn.addEventListener("click", () => {
      li.forEach((e) => {
        e.toggleAttribute("disabled");
        e.checked = false;
      });
      console.log("click on btn");
    });
  });
}
try {
  toggleCheckboxServices();
} catch (e) {}
