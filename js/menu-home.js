$('.brandImg').attr('src', 'images/gamedin-logo-white.png');

$(window).scroll(function(){
  var nav = $('nav.header');
  var scroll = $(window).scrollTop();
  var brand = $('.brandImg');
  if (scroll >= $('.hero-banner').height()-50) {
    nav.addClass('fixed');
    brand.attr('src', 'images/gamedin-logo-9.png');
  } else {
    nav.removeClass('fixed');
    brand.attr('src', 'images/gamedin-logo-white.png');
  }
});
