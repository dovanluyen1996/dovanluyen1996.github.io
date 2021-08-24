//SlideImage
$(document).ready(function() {

   endImage = $('img.img-main:last').attr('stt');

   var stt = 0;
   $("img.img-main").each(function() {
       if ($(this).is(':visible')) {
           stt = $(this).attr('stt');
       }
   });

   $('.btn-next').click(function() {
      if (stt == endImage) {
         stt = -1;
      }
      next = ++stt;
      $("img.img-main").fadeOut();
      $("img.img-main").eq(next).fadeIn(1000);
   });

   $('.btn-prev').click(function() {
      if (stt == 0) {
         stt = endImage;
         prev= stt++;
      }
      prev = --stt;
      $("img.img-main").fadeOut();
      $("img.img-main").eq(prev).fadeIn(1000);
   });

  
   //AutoSideImage
   setInterval(function() {
      $('.btn-next').click();
   },4000);

});   


//Click Image
/*$(document).ready(function() {
		$('.list img').click(function() {
			var ClickImage = $(this).attr('src');
			$('.mainslide-img img').attr('src',ClickImage);
		}); 
});
*/

//back-top
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
       },1200);
    });
});

//menuToogle
$(document).ready(function() {
   $('.toogle').click(function() {
      $('.menu').slideToggle("fast");
   });
});