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