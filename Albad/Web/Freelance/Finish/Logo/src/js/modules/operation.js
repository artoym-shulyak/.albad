const operation = (items) => {
  const elems = document.querySelectorAll(items);

  elems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const value = elem.querySelector("[data-count]");
      const btnAdd = elem.querySelector("[data-add]");
      const btnMinus = elem.querySelector("[data-minus]");
      const target = e.target;
      if (target && target === btnAdd) {
        value.textContent++;
      }
      if (target && target === btnMinus && value.textContent > 0) {
        value.textContent--;
      }
    });
  });
};
operation(".card__count");
operation(".basket__count");
