function listResponsive() {
  $('.hidden-links').append($('.prvi'));
  $('.hidden-links').append($('.drugi'));
  $("#member").insertBefore($('#refer'));
  $("#refer").insertAfter($('#logout'));
  $("#login").insertBefore($('#aboutUs')); // napraviti da nije fiksno
  if($(window).width() > 720) {
    $('.links').append($('.hidden-links .prvi'));
    $("#refer").insertBefore($('#member'));
    $('#login').insertAfter($('#howItWorks'));
  }
  if($(window).width() > 1350) {
    $('.links').append($('.hidden-links .drugi'));
    $('#member').insertAfter($('#exchange'));  // napraviti da zavisi od pretposlednjeg itema u listi ne ovako fiksno
  }
}

listResponsive();

$(window).resize(function() {
  listResponsive();
});

// $('.menuicon').click(function(e) {
//   $(this).toggleClass('active');
//   $('.hidden-links').toggleClass('active');
//   $('.second').toggleClass('active');
//   e.preventDefault();
// });

// $('.bell').click(function(e) {
//   $('.notification-number').remove();
//   $('.notifications').toggleClass('active');
//   e.preventDefault();
// });

$(document).ready(function(){
  $('.menuicon').click(function(e) {
    var e=window.event||e;
    $('.menuicon').toggleClass('active');
    $('.hidden-links').toggleClass('active');
    $('.second').toggleClass('active');
    $('.notifications').removeClass('active');
    e.stopPropagation();
  });
  $('.bell').click(function(e){
    var e=window.event||e;
    $('.notifications').toggleClass('active');
    $('.notification-number').remove();
    $('.menuicon').removeClass('active');
    $('.hidden-links').removeClass('active');
    $('.second').removeClass('active');
    e.stopPropagation();
  });
  $(document).click(function(e){
    $('.notifications').removeClass('active');
    $('.menuicon').removeClass('active');
    $('.hidden-links').removeClass('active');
    $('.second').removeClass('active');
  });
});
