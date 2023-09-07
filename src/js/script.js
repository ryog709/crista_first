jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  $(window).resize(function() {
    if ($(window).width() >= 768) {
      if ($(".js-drawer").hasClass("is-current")) {
        $(".js-drawer").fadeOut(500, function() {
          $(this).removeClass("is-current");
        });
        $(".js-hamburger").removeClass("is-current");
      }
    }
  });
  // ハンバーガーメニュー
  $(function () {
    $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
      if ($(".js-drawer").hasClass("is-current")) {
        $(".js-drawer").fadeOut(500, function () {
          $(this).removeClass("is-current");
        });
        $(".js-hamburger").removeClass("is-current");
      } else {
        $(".js-drawer").hide().addClass("is-current").fadeIn(500);
        $(".js-hamburger").addClass("is-current");
      }
    });
  });

});
