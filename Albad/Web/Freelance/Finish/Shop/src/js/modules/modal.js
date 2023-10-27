export function modalItem(open, modalWindow, surname) {
  const btnOpen = document.querySelector(open);
  const modal = document.querySelector(modalWindow);
  const btnClose = modal.querySelector("[data-close]");

  btnOpen.addEventListener("click", () => {
    modal.classList.toggle("active");
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

  document.body.addEventListener("scroll", () => {
    modal.classList.remove("active");
  });

  if (surname === "sort") {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest(".catalog__sort")) {
        modal.classList.remove("active");
      }
    });
  }
}
