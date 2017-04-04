$(document).ready(function () {

    $('.nav__item a').click(function () {
        $('.nav__item').removeClass("active");
        $(this).parent().addClass("active");
        return false;
    });


    $('.navbar-toggle').click(function () {
        $(this).toggleClass("is-active");
        $(".navbar-collapse ").toggleClass("open");
    });

    $('.main-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


});