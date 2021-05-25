$(function () {

    'use strict';

    
    const   navbar =  $('.navbar'),
            headerScroll = $('.header').offset().top,
            aboutScroll = $('.about').offset().top,
            projectsScroll = $('.projects').offset().top,
            galleryScroll = $('.gallery').offset().top,
            priceScroll = $('.price').offset().top,
            teamScroll = $('.team').offset().top,
            testimonialsScroll = $('.testimonials').offset().top,
            contactScroll = $('.contact-us').offset().top;
    
    // Navbar Scroll
    
    $(window).on('scroll', function () {

        const windowScroll = $(window).scrollTop();

        windowScroll > navbar.height() ? navbar.addClass('scroll') : navbar.removeClass('scroll');

        toggleNavLink(windowScroll);

        
    });

    // Smoth Scroll

    $('.navbar .navgation li, .button-scroll').on('click', function (e) {

        $('html').animate({ // Animate Smoth Scroll
            scrollTop: $($(this).data('class')).offset().top
        }, 700);

        e.preventDefault();
    });

    // Function switch Class Active In Navbar Links

    function toggleNavLink (link1) {
        if (link1 >= headerScroll) {
            $('.navbar .navgation ul li:nth-child(1)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= aboutScroll) {
            $('.navbar .navgation ul li:nth-child(2)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= projectsScroll) {
            $('.navbar .navgation ul li:nth-child(3)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= galleryScroll) {
            $('.navbar .navgation ul li:nth-child(4)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= priceScroll) {
            $('.navbar .navgation ul li:nth-child(5)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= teamScroll) {
            $('.navbar .navgation ul li:nth-child(6)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= testimonialsScroll) {
            $('.navbar .navgation ul li:nth-child(7)').addClass('active').siblings().removeClass('active');
        }
        if (link1 >= contactScroll) {
            $('.navbar .navgation ul li:nth-child(8)').addClass('active').siblings().removeClass('active');
        }
    }

    // Button show Navgation bar

    $('.collapse').on('click', function () {
        $('.navgation').slideToggle().end().addClass('full-height');
    });

    $('.navbar .navgation ul li a').on('click', function () {
        $('.navgation').hasClass('full-height') ? $('.navgation').slideToggle().removeClass('full-height') : false;
        navbar.hasClass('scroll') && $(Window).offset().top >= navbar.height()? navbar.removeClass('scroll') : navbar.addClass('scroll');
    });
    

});