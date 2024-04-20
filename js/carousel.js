$("#slick").slick({});


 //$(document).ready(function(){
        //$('.carousel').slick({
        //slidesToShow: 3,
        //dots:true,
        //centerMode: true,
        //});
     // });



 $('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.carousel-nav',
});

$('.carousel-nav').slick({
  asNavFor: '.carousel,.slider-nav',
  dots: true,
  centerMode: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
});



  $('.slider-nav').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
          breakpoint: 450,
          settings: {
            dots: false,
            slidesToShow: 3,  
            centerPadding: '0px',
            }
        },
        {
          breakpoint: 420,
          settings: {
            autoplay: true,
            dots: false,
            slidesToShow: 1,
            centerMode: false,
            }
        }
    ]
});

  