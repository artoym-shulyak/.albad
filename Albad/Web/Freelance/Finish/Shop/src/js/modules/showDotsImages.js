const images = document.querySelectorAll(".good__img");

images.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    const dots = item.querySelectorAll(".good__dot");

    dots.forEach((dot) => {
      dot.addEventListener("mouseover", (e) => {
        e.preventDefault();
        dots.forEach((dot) => dot.classList.remove("active"));
        const itemImg = e.target;
        const img = itemImg.getAttribute("href");
        images[i].querySelector("img").setAttribute("src", img);
        const itemImgParent = e.target.parentElement;
        itemImgParent.classList.add("active");
      });
      dot.addEventListener("mouseout", (e) => {
        const itemImgParent = e.target.parentElement;
        const itemImg = e.target;
        const img = dots[0].querySelector("div").getAttribute("href");
        images[i].querySelector("img").setAttribute("src", img);
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[0].classList.add("active");
      });
    });
  });
});
