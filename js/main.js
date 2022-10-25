$(document).ready(function () {

    $("#burger-menu").click(function (event) {
        $(".opened-burger-menu").toggleClass('active');
        $("#burger-menu").toggleClass('hidden');
    })

    $(".menu__close").click(function (event) {
        $(".opened-burger-menu").toggleClass('active');
        $("#burger-menu").toggleClass('hidden');
    })

    $(window).on("scroll", function () {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $(".header-alternative").toggleClass('active', $(window).scrollTop() > $(".header").height());
            // $(".header-alternative").toggleClass('active', $(window).scrollTop() < $(".header").height());
        }
    })


    $(".hero__bg").css("min-height", $(window).height() - $(".header").height());
});
