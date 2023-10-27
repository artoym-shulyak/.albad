const search = () => {
  const openSearch = document.querySelector("#btn-search");
  const search = document.querySelector("#search");
  const inputSearch = search.querySelector("input");
  const blockSearch = document.querySelector("#block-search");
  const closeSearch = search.querySelector(".header__close");

  openSearch.addEventListener("click", () => {
    search.classList.add("show");
  });

  closeSearch.addEventListener("click", () => {
    search.classList.remove("show");
    search.querySelector("input").value = "";
  });

  inputSearch.addEventListener("input", (e) => {
    blockSearch.style.display = "block";
  });

  document.body.addEventListener("scroll", () => {
    blockSearch.style.display = "none";
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest("#block-search")) {
      blockSearch.style.display = "none";
    }
  });
};

search();
