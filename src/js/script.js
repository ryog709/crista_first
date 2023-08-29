jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
// ハンバーガーメニュー
$(function () {
  $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
    if ($(".js-drawer").hasClass("is-current")) {
      $(".js-drawer").fadeOut(function () {
        $(this).removeClass("is-current"); // これで display: none; になる
      });
      $(".js-hamburger").removeClass("is-current");
    } else {
      $(".js-drawer").hide().addClass("is-current").fadeIn(); // これで display: block; になる
      $(".js-hamburger").addClass("is-current");
    }
  });
});

});
