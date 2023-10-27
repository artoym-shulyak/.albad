const modalBurger = (open, modalWindow) => {
  const btnOpen = document.querySelector(open);
  const modal = document.querySelector(modalWindow);
  const btnClose = modal.querySelector("[data-back]");

  btnOpen.addEventListener("click", () => {
    modal.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target === modal) {
      modal.classList.remove("active");
    }
  });
};
try {
  modalBurger("#burger", "#modal-menu");
} catch (e) {}
try {
  modalBurger("#btn-search", "#modal-menu");
} catch (e) {}

const menuSearch = () => {
  const elemMain = document.querySelector("#main");
  const elemMore = document.querySelector("#more");
  const modal = document.querySelector("#modal-menu");
  const btnClose = modal.querySelector("[data-back]");
  const btnBacking = modal.querySelector("[data-backing]");

  btnBacking.style.display = "none";

  console.log(btnClose);

  const inputSearch = document.querySelector("#search-mob");

  inputSearch.addEventListener("input", (e) => {
    elemMore.classList.add("active");
    btnClose.style.display = "none";
    btnBacking.style.display = "flex";
    console.log(e.target.value);
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target === modal) {
      elemMore.classList.remove("active");
    }
  });

  btnBacking.addEventListener("click", () => {
    btnClose.style.display = "flex";
    btnBacking.style.display = "none";
    elemMore.classList.remove("active");
  });
};
try {
  menuSearch();
} catch (e) {}

const modal = (open, modalWindow) => {
  const btnOpen = document.querySelector(open);
  const modal = document.querySelector(modalWindow);
  const btnClose = modal.querySelector("[data-close]");

  btnOpen.addEventListener("click", () => {
    modal.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target === modal) {
      modal.classList.remove("active");
    }
  });
};

try {
  modal("#btn-sign", "#modal-sign");
} catch (e) {}
try {
  modal("#btn-arrange", "#modal-arrange");
} catch (e) {}
try {
  modal("#btn-register", "#modal-register");
} catch (e) {}
try {
  modal("#btn-save", "#modal-save");
} catch (e) {}
