$(document).ready(function () {
  const endItem = $(".send-modal");
  const modalStartPhone = $(".modal");
  const modalStartPhoneBlock = $(".modal__body");
  const bodyItem = $("body");
  const modalStartPhoneFirst = $(".modal-consult");
  // console.log($(".send-modal"));

  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      endItem.addClass("active");
      bodyItem.removeClass("lock");
      modalStartPhone.removeClass("active");
      modalStartPhoneFirst.removeClass("active");
      modalStartPhoneBlock.removeClass("active");
      setTimeout(function () {
        // Done Functions
        endItem.removeClass("active");
        th.trigger("reset");
      }, 2000);
    });
    return false;
  });
});
