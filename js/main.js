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

// Работа с виджетом recaptcha
// 1. Получить ответ гугл капчи
var captcha = grecaptcha.getResponse();

// 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
// Такую форму не будем отправлять на сервер.
if (!captcha.length) {
  // Выводим сообщение об ошибке
  $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
} else {
  // получаем элемент, содержащий капчу
  $('#recaptchaError').text('');
}

// 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
if ((formValid) && (captcha.length)) {

  // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
  formData.append('g-recaptcha-response', captcha);
 
}

// 4. Если сервер вернул ответ error, то делаем следующее...
// Сбрасываем виджет reCaptcha
grecaptcha.reset();
// Если существует свойство msg у объекта $data, то...
if ($data.msg) {
  // вывести её в элемент у которого id=recaptchaError
  $('#recaptchaError').text($data.msg);
}