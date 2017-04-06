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

    $('.blog-slider').on('init', function (event, slick) {
        var all = slick.slideCount;
        if (all < 10) {
            all = '0' + all
        }

        $('.blog-slider-nav__index .all').html(all);
    });

    $('.blog-slider').slick({
        arrows: false
    });

    $('.blog-slider-nav__prev').click(function () {
        $('.blog-slider').slick('slickPrev');
    });

    $('.blog-slider-nav__next').click(function () {
        $('.blog-slider').slick('slickNext');
    });


    $('.blog-slider').on('afterChange', function (event, slick, currentSlide) {
        var current = currentSlide +1;
        if (current < 10) {
            current = '0' + current;
        }
        $('.blog-slider-nav__index .current').html(current);
    });


});