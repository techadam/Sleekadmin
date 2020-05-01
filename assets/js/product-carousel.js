$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 100,
        dots: false,
    });


    $('#example').barrating({
        theme: 'fontawesome-stars'
    });

    $('.reviewRating').barrating({
        theme: 'fontawesome-stars',
        readonly: true,
    });
});