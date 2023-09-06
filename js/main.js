$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.menu, .burger__central-line').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu__list__element__link, .logo__img').click(function (event) {
        $('.burger,.menu,.burger__central-line').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
var $w = $(window);
$w.on('scroll', function () {
  $('.header,logo__img,.burger,.burger__central-line').toggleClass("menu-scroll", $w.scrollTop() > 0);
}).trigger('scroll');
$("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
    }, 800);
  });