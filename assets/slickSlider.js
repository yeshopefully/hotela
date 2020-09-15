$(function() {
    $(document).ready(function(){
  
        $(".Modern-Slider").slick({
          autoplay:true,
          autoplaySpeed:10000,
          speed:600,
          slidesToShow:1,
          slidesToScroll:1,
          pauseOnHover:false,
          dots:true,
          pauseOnDotsHover:false,
          cssEase:'linear',
          fade:false,
          draggable:true,
          prevArrow:'<button class="PrevArrow">&lang;</button>',
          nextArrow:'<button class="NextArrow">&rang;</button>', 
        });
        
      })
})