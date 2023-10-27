const pageIndexMV = () => {
  const body = document.querySelector(".brend__body");
  const head = document.querySelector(".brend__head");
  const prev = document.querySelector(".brend__prev");
  const pl_small = window.matchMedia("(max-width: 991.98px)").matches;

  if (pl_small) {
    prev.before(head);
  } else {
    body.prepend(head);
  }
};
try {
  pageIndexMV();
} catch (e) {}

window.addEventListener("resize", () => {
  try {
    pageIndexMV();
  } catch (e) {}
});
