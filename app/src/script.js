$(document).ready(function () {

    $('.nav__link').click(function () {
        $('.nav__link').removeClass("active");
        $(this).addClass("active");
    });

    $('.navbar-toggle').click(function () {
        $(this).toggleClass("is-active");
        $('.wrapper').toggleClass("hidden");
        $(".navbar-collapse ").toggleClass("open");
    });

//close mobile menu on body click
    $(document).on('click', function(e) {
        var target = e.target;

        if ($(target).hasClass("navbar-toggle")||$(target).hasClass("icon-bar")||$(target).hasClass("nav__item")){
            return false;
        }

       $('.wrapper').removeClass("hidden");
        $('.navbar-toggle').removeClass("is-active");
        $(".navbar-collapse").removeClass("open");
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

    $(".model-slider").slick({
        autoplay: false,
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        }
    });

    /*tabs*/

    $('.tabs-nav__link').click(function () {
        $('.tabs-nav__link').removeClass('active');
        $('.tabs-content .tab').removeClass('visible');
        $(this).addClass('active');
        $($(this).attr('href')).addClass('visible');
        return false;
    });
});