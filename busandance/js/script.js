//$(document).ready(function(){})
$(function () {
    //변수에 담기
    let gnbLi = $('#gnb > li')
    let header = $('header')

    //gnb
    gnbLi.on('mouseenter focusin', function () {
        $('header').addClass('on')
        $('a.depth1').removeClass('current')
        $(this).children('a.depth1').addClass('current')
    })

    gnbLi.on('mouseleave focusout', function () {
        $('header').removeClass('on')
        $(this).children('a.depth1').removeClass('current')
    })

    // main_swiper
    var swiper1 = new Swiper(".main_swiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_swiper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_swiper .swiper-button-next",
            prevEl: ".main_swiper .swiper-button-prev",
        },
    });

    // judge_swiper
    var swiper2 = new Swiper(".judge_swiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".judge_swiper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".judge_swiper .swiper-button-next",
            prevEl: ".judge_swiper .swiper-button-prev",
        },
    });

})

