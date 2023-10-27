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

  document.body.addEventListener("scroll", () => {
    hideTabContent();
  });

  function showTabContent(i = 0) {
    tab[i].classList.toggle(activeClass);
    content[i].classList.toggle(activeClass);
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
  // showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("active")) {
      hideTabContent();
    } else {
    }
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          //
          showTabContent(i);
        }
      });
    }
  });
};

const tabsShow = (
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
    tab[i].classList.toggle(activeClass);
    content[i].classList.toggle(activeClass);
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

try {
  tabs(".header", ".header__li", ".header__wraps", "active");
} catch (e) {}
try {
  tabsShow(".card", ".card__image", ".card__body-content", "active");
} catch (e) {}

try {
  tabs(".menu", ".menu__li", ".menu__content", "active");
} catch (e) {}
