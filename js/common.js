$(document).ready(function() {
    var banner_slider = $("#banner_slider");
    banner_slider.owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navigation: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 6000,
        smartSpeed: 2000
    });

    var oficel_Slider = $(".oficel_Slider");
    oficel_Slider.owlCarousel({
        loop: false,
        nav: true,
        items: 1,
        navigation: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 6000,
        smartSpeed: 2000
    });


    var award_slider = $("#award_slider");
    award_slider.owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navigation: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 6000,
        smartSpeed: 2000
    });


    var custome_slider = $("#custome_slider");
    custome_slider.owlCarousel({
        loop: false,
        nav: true,
        items: 1,
        navigation: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 6000,
        smartSpeed: 2000
    });

    var gallery_slider = $(".gallery_slider");
    gallery_slider.owlCarousel({
        loop: false,
        nav: true,
        items: 3,
        navigation: false,
        autoplay: true,
        margin: 25,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            360: {
                items: 1,
                margin: 10
            },
            600: {
                items: 1,
                margin: 15
            },
            980: {
                items: 3
            }
        }
    });
    // var TabsSlider = $("#TabsSlider");
    // TabsSlider.owlCarousel({
    //     loop: false,
    //     nav: true,
    //     dots:false,
    //     items: 3,
    //     navigation : false,
    //     autoplay:true,
    //     margin:5,
    //     autoplayTimeout: 6000,
    //     smartSpeed: 2000,
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         480:{
    //             items:3
    //         },
    //         575:{
    //             items:4
    //         },
    //         768:{
    //             items:6
    //         },
    //         991:{
    //             items:7
    //         },
    //         1024:{
    //             items:8
    //         }
    //     }
    // });






    /*var gallery_slider = $(".gallery_slider");
    gallery_slider.owlCarousel({
        loop: false,
        nav: true,
        //items: 3,
        navigation : false,
        autoplay:true,
        margin:25,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive:{
            0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
        }
    });*/






    var Specif_slider = $(".Specif_slider");
    Specif_slider.owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        navigation: false,
        autoplay: true,
        margin: 25,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    var price_BHK_slider = $(".price_BHK_slider");
    price_BHK_slider.owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        navigation: false,
        autoplay: true,
        margin: 45,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2,
                margin: 15
            },
            600: {
                items: 2,
                margin: 15
            },
            980: {
                items: 3
            }
        }
    });




    var corporate_slider = $(".corporate_slider");
    corporate_slider.owlCarousel({
        loop: true,
        nav: true,
        items: 6,
        navigation: false,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 2
            },
            360: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    var popup_slider = $("#Act_vdo_Sl");
    popup_slider.owlCarousel({
        loop: false,
        nav: true,
        items: 3,
        navigation: false,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });


    var popup_slider = $(".why_choose_Sl");
    popup_slider.owlCarousel({
        loop: false,
        nav: true,
        items: 5,
        navigation: false,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });


    //$('.floor_show').not(':first-child').hide();
    $('.Site_CL li a').click(function() {
        var Site_CL_tanbs = $(this).attr('data-target');
        $('.floor_show').removeClass('active');
        $('#' + Site_CL_tanbs).addClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.photo_Cl li a').click(function() {
        var photo_Cl_tanbs = $(this).attr('data-target');
        $('.gallery_show_bx').removeClass('active');
        $('#' + photo_Cl_tanbs).addClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    })

    $('.prograse_Cl li a').click(function() {
        var prograse_tanbs = $(this).attr('data-target');
        $('.prograse_bx').removeClass('active');
        $('#' + prograse_tanbs).addClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    })

    $('.lcatin_tabs a').click(function() {
        var locations_tabs = $(this).attr('data-target');
        $('.locations_tabs').removeClass('active');
        $('#' + locations_tabs).addClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    })





    // $('.div_tabs').not(':first-child').hide();
    // $('.fouse_tab li:first-child').addClass('active');
    // $('.fouse_tab ul li a').click(function(){
    //  var ProTabs = $(this).parent().index();
    //  $('.div_tabs').hide();
    //  $('.div_tabs:eq('+ ProTabs +')').stop(true, true, true).fadeToggle();
    //  $(this).parent().addClass('active').siblings().removeClass('active');
    // })

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header_fixed');
        } else {
            $('header').removeClass('header_fixed')
        }
    })
    // $('ul#TabsSlider .owl-item').click(function(){
    //     $(this).find('li').addClass('active');
    //     $(this).siblings().find('li').removeClass('active');
    // })



    // onclick anchor scroll

    $('.menu_mn_rt ul li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $(".panel").removeClass("sectioncolor");
                $('html, body').animate({
                    scrollTop: target.offset().top - 120
                }, 1000);
                setTimeout(function() {
                    $(target).addClass("sectioncolor");
                }, 1000);

                return false;
            }
        }
    });
    // $('.counter').counterUp({
    //     delay: 16,
    //     time: 1000
    // });
    
    // $('.popup-gallery .col-md-4').slice(0, 6).show();
    // if ($('.popup-gallery .col-md-4:hidden').lenght != 0) {
    //     $('.view_more').addClass('view_more_add');
    //     $('.less_more').removeClass('less_more_add');
    // }
  
    // $('.view_more').on('click', function(e) {
    //     e.preventDefault();
    //     $('.popup-gallery .col-md-4:hidden').slice(0, 50).slideDown();
    //     if ($('.slice_show_bx:hidden').lenght !== 0) {
    //         $('.view_more').removeClass('view_more_add');
    //         $('.less_more').addClass('less_more_add');

    //     }
    // })

    // $('.less_more').on('click', function(e) {
    //     e.preventDefault();
    //     $('.popup-gallery .col-md-4').slice(6, 50).slideUp();
    //     $('.view_more').addClass('view_more_add');

    // })


    $('.menu_Cl').click(function() {
        $('body').toggleClass('js--mobile-menu-active');
    })

    $('.bg, .menu_cl').click(function() {
        $('body').removeClass('js--mobile-menu-active');
    });

    $('.menu_mn_rt ul li a').click(function() {
        $('body').removeClass('js--mobile-menu-active');
    });


    if ($('.image-gallery').length >= 1) {
        $('.image-gallery').each(function() {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                preload: [0, 2],
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                },
                image: {
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
                }
            });
        });
    }

    $('.Cl_video').click(function() {
        $('.Act_vdodiv').fadeIn();
        $('.Act_vdodiv').addClass('Act_vdodiv_add');
    });

    $('.close_form').click(function() {
        $('.Act_vdodiv').hide();
        $('.Act_vdodiv').removeClass('Act_vdodiv_add');
    })





 //Hide Loading Box (Preloader)
 function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
}





    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

       /* ==========================================================================
       When document is loading, do
       ========================================================================== */

       $(window).on('load', function() {
        handlePreloader();
    });
        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }










})

new WOW().init()




