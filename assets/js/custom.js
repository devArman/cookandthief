$(window).scroll(function () {
    var sticky = $('.page-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed');
    } else {
        sticky.removeClass('fixed');
    }
});
$('.scroll-down').on('click',function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 120
    }, 500);
    return false;
});
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
$(document).ready(function(){
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
