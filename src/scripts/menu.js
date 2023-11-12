  //ハンバーガーメニュー
  $('.c-hamburger').click(function() {
    $(this).toggleClass("is-active");
    $("body").toggleClass("is-active");
  if ($(".p-header__navs-sp").hasClass('is-active')) {
    $(".p-header__navs-sp").removeClass('is-active');
    $(".c-hamburger").removeClass('is-active');
  } else {
    $(".p-header__navs-sp").addClass("is-active");
    $(".c-hamburger").addClass("is-active");
  }
});