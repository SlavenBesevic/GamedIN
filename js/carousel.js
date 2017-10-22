$(document).ready(function(){
  // HERO BANNER
  $('.hero-banner-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });
  // HOTTEST GAMES
  $('.hottest-games-carousel').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: 'white-background-dots',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          arrows: true,
          dots: false
        }
      }
    ]
  });
  // GAMERS
  $('.gamers-carousel').slick({
    arrows: false,
    dots: true
  });
  $('.preseravanje').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    swipe: false
  });
});
