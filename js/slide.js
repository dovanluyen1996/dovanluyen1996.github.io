$(document).ready(function() {
 
  $("#brand").owlCarousel({
 
      autoPlay: 1000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

     /* loop:true,
      margin:20,
      responsiveClass:true,
      pagination:false,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:true,
          loop:false
        }
      }*/
 
  });
 
});


//xử lý sự kiến back-top
$(document).ready(function() {
    $(window).scroll(function(){
       if($(this).scrollTop()){
          $('.back-top').fadeIn();
       } else {
          $('.back-top').fadeOut();
       }
    });

    $('.back-top').click(function() {
       $('html,body').animate({
          scrollTop:0
       },500);
    });
});