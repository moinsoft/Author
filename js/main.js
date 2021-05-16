$(document).ready(function () {

  // Slider Activation
  
  $('.slider__active').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 1000,
    nav: true,
    dots:false
  })

  //Testimonial Slider Activation

  $('.testimonial__slider__active').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 1000,
    nav: true
  })


});