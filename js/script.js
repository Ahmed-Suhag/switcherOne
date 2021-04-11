$(function () {


    //slider service
    $('.ser-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
    ]


    });
    // -----testiminial slider-----

    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        centerPadding: false,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        }

    ]
    });


    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    //wow js
    new WOW().init();
    //---typed js---
    $(".typed").typed({
        strings: ["Ahmed Suhag", "Creative Designer"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 2000,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });



    //---preloader-----
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
    });

    //back_to_top
    $('.back_to_top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });


    // bg
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
        if (scrolling > 200) {
            $('.back_to_top').fadeIn(500);
        } else {
            $('.back_to_top').fadeOut(500);
        }
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 110
                }, 2000);
                return false;
            }
        }
    });


});

$(function () {

    // -----index-3  slider-----

    $('.index3_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        centerPadding: false,
        dots: false,
        speed: 2000,
    });

    $('.index2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        fade: true,
        centerPadding: false,
        dots: false,
        speed: 1500,

    });
    
    //-----------color switcher--------
    
    $('.bars').on('click', function () {
        $('.sidebar').toggleClass('ber-how');
        $('.red').click(function () {
            $('.clrSWt').css('color', '#FF3D00');
            $('btN').css('background','#FF3D00')
             $(".divcolor").css("background")
        })
        $('.green').click(function () {
            $('.clrSWt').css('color', '#689F38');
        })
        $('.blue').click(function () {
            $('.clrSWt').css('color', '#0D47A1');
        })
        $('.purple').click(function () {
            $('.clrSWt').css('color', '#7B1FA2');
        })
        $('.cayan').click(function () {
            $('.clrSWt').css('color', '#00ACC1');
        })
        $('.orange').click(function () {
            $('.clrSWt').css('color', '#F4511E');
        })
        $('.gray').click(function () {
            $('.clrSWt').css('color', '#9E9E9E');
        })
        $('.yello').click(function () {
            $('.clrSWt').css('color', '#FDD835');
        })
    })



})

