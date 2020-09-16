(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });


    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });


    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Web Designer.", "Graphic Designer."],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });




    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));

// var i = [0];
// var images = [];
// var time = 3000;

// images[0] = './assets/images/player/player1.jpg';
// images[1] = './assets/images/player/player2.jpg';
// images[2] = './assets/images/player/player3.jpg';
// images[3] = './assets/images/player/player4.jpg';

// function changeImg() {
//     document.slide.src = images[i]

//     if (i < images.length - 1) {
//         i++
//     } else {
//         i = 0
//     }

//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

let year = document.querySelector('.year').innerHTML = new Date().getFullYear();
let month = document.querySelector('.month').innerHTML = new Date().getMonth();
let date = document.querySelector('.date').innerHTML = new Date().getDate();