  Slider('.why_seller_slider',true,3,1,true,false,false,1024);
  Slider('.blog_slider',true,1,1,true,false,true,768);
  Slider('.slick-carousel',true,1,1,true,false,false,768);
 function Slider($sliderName,$dots,$slideslow,$slidescroll,$arrows,$autoplay,$infinite,$breakpoint){
  var slider =  $($sliderName);  
  return slider.slick({
             infinite: $infinite,
             slidesToShow: $slideslow,
             slidesToScroll: $slidescroll,
             arrows: $arrows,
             dots: $dots,
             autoplay: $autoplay,
             autoplaySpeed: 2000,
             responsive: [
                 {
                   breakpoint: $breakpoint,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     
                     
                   }
                 },
                 {
                   breakpoint: 767,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll:1,
                     arrows: true
                   }
                 }
               ]
         } );
 }  



//  counter js

// window.onload = ()=>{
//     // $(selector).countMe(delay,speed)
//     $("#num1").countMe(0,1);
//     $("#num2").countMe(0,1);
//     $("#num3").countMe(0,1);
//     $("#num4").countMe(0,1);
//  }