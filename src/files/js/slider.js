var swiper = new Swiper(".image-slider", {
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        // clickable: true,
        type: "progressbar",
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider",
    },

    autoHeight: true,

    zoom: {
        maxRatio: 2,
        minRatio: 1,
    },
});
