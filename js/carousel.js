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
  asNavFor: '.carousel-nav'
  
});

$('.carousel-nav').slick({
  asNavFor: '.carousel',
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

$('.carousel_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel'
    
  });