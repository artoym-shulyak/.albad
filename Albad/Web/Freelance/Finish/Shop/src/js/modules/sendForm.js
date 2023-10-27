const sendForm = () => {
  const container = document.querySelector("#subcribe");
  const sucPK = document.querySelector(".subcribe__suc");
  const formBlock = document.querySelector("#subcribeForm");
  const btnSendForm = formBlock.querySelector("button");
  const sendEmail = formBlock.querySelector("input");
  const success = document.querySelector("#subcribeSuccess");
  const title = document.querySelector("#subcribeTitle");

  const pl_small = window.matchMedia("(max-width: 991.98px)").matches;

  const _EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  btnSendForm.addEventListener("click", (e) => {
    e.preventDefault();

    if (_EMAIL_REGEXP.test(sendEmail.value)) {
      if (pl_small) {
        formBlock.remove();
        title.classList.add("success");
        success.classList.add("success");
        sendEmail.value = "";
      } else {
        container.remove();
        sucPK.classList.add("show");
      }
    }
  });
};
try {
  sendForm();
} catch (e) {}
