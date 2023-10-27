// - Функция -  Раскрывающий список
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
        const value = target.querySelector("span:first-child").innerText;
        try {
          select.querySelector("li.active").classList.remove("active");
        } catch (e) {}
        target.classList.add("active");
        selectItem.innerText = value;
        select.classList.remove("open");
        selectItem.classList.remove("open");
      }
    });

    body.addEventListener("click", (e) => {
      const target = e.target;
      const targetBody = e.currentTarget;
      if (target !== selectItem) {
        select.classList.remove("open");
        selectItem.classList.remove("open");
      } else {
      }
    });
  });
}
// Игнорируем ошибки на других страницах
try {
  hundleSelect(".card__box", ".card__value");
} catch (e) {}
