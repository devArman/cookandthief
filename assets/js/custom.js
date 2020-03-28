
$(document).ready(function(){
    $(window).scroll(function () {
        var sticky = $('.page-header'),
            scroll = $(window).scrollTop();

        if (scroll >= 40) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
        }


    });


    if ($(".menu-center-section")[0]){
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            $('.menu-top-details ').toggleClass('fixed-toolbar',
                //add 'ok' class when div position match or exceeds else remove the 'ok' class.
                scroll >= $('.menu-center-section').offset().top - 130
            );

        });
    }

    //trigger the scroll
    $(window).scroll();//ensure if you're in current position when page is refreshed

   //add class and remove on hover

    $('.price-add-btn').hover(
        function(){ $(this).addClass('btn-hover') },
        function(){ $(this).removeClass('btn-hover') }
    );

    //custom collapse
    $('.collapse-head').on('click',function () {
      $(this).parents('.collapse-main-box').find('.collapse-body').slideToggle();
        $("i", this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    //fade in/out based on scrollTop value
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('.menu-toolbar li a').on('click',function(){
        $('.menu-toolbar li a.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 160
        }, 1000);
        return false;
    });


    $('.view-details-btn').on('click',function() {
        $('.hide-box').slideToggle();
        $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
        $('span',this).toggle();
        $(this).toggleClass('close-details');
    });

    if($(window).width() < 667) {
        $('.scroll-down').on('click',function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 53
            }, 1000);
            return false;
        });
    } else {
        $('.scroll-down').on('click',function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 107
            }, 500);
            return false;
        });
    }

    $('.searchButton .search-item').on('click',function () {
        $(this).parents('.searchBox').addClass('searchBoxOpen');
        $(this).hide();
        $('.searchButton .close-item').show();
    });
    $('.searchButton .close-item').on('click',function () {
        $(this).parents('.searchBox').removeClass('searchBoxOpen');
        $(this).hide();
        $('.searchButton .search-item').show();
    });
    $('.nav__toggle').on('click',function () {
        $('body').toggleClass('hidden');
        $(window).scrollTop(0);

    });

    $('.home-bottom-dishes').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows:false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows:false
                }
            }
        ]
});

    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.nav__toggle');
    let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
    menuToggle.addEventListener('click', e => {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;

        // toggle a11y attributes and active class
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));

        nav.classList.toggle('nav--open');
    });


// TRAP TAB INSIDE NAV WHEN OPEN
    nav.addEventListener('keydown', e => {
        // abort if menu isn't open or modifier keys are pressed
        if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        // listen for tab press and move focus
        // if we're on either end of the navigation
        const menuLinks = menu.querySelectorAll('.nav__link');
        if (e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === menuLinks[0]) {
                    menuToggle.focus();
                    e.preventDefault();
                }
            } else if (document.activeElement === menuToggle) {
                menuLinks[0].focus();
                e.preventDefault();
            }
        }
    });

    // QTY
    jQuery(function(){
        var j = jQuery; //Just a variable for using jQuery without conflicts
        var addInput = '#qty'; //This is the id of the input you are changing
        var n = 1; //n is equal to 1

        //Set default value to n (n = 1)
        j(addInput).val(n);

        //On click add 1 to n
        j('.plus').on('click', function(){
            j(addInput).val(++n);
        });

        j('.min').on('click', function(){
            //If n is bigger or equal to 1 subtract 1 from n
            if (n >= 1) {
                j(addInput).val(--n);
            } else {
                //Otherwise do nothing
            }
        });
    });
    // QTY


});



