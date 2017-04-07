$(document).ready(function () {

    $('.nav__item').click(function () {
        $('.nav__item').removeClass("active");
        $(this).addClass("active");
    });

    $('.navbar-toggle').click(function () {
        $(this).toggleClass("is-active");
        $('.wrapper').toggleClass("hidden").click(function () {
            $(this).removeClass("hidden");
            $('.navbar-toggle').removeClass("is-active");
            $(".navbar-collapse ").removeClass("open");
            return false;
        });
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


    $(".model-slider").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        },

        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });


});