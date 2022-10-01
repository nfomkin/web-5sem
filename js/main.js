$(document).ready(function(){

  $(".header__burger").click(function (event) {
    $(".header__burger, .header__mobile-menu").toggleClass('active');
  })

  $(".menu__close").click(function (event) {
    $(".header__burger, .header__mobile-menu").toggleClass('active');
  })
});
