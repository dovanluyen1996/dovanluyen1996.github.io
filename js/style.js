//SlideImage
/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function current(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

// navigation scroll
$(".menu a").click(function (event) {
  var id = $(this).attr("href");
  var offset = 110;
  var target = $(id).offset().top - offset;
  $("html, body").animate(
    {
      scrollTop: target,
    },
    700
  );
  event.preventDefault();
});

//Portfolio

/*$(document).ready(function() {
  var click1 = $('.col1');
  click1.click(function() {
     $('.grid-main').fadeOut(500);
     $('.grid-design').fadeIn(500);
  });
});*/

/*$(document).ready(function() {
    $(".nav-menu ul li").click(function() {
        $(".nav-menu ul li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        var activeTab = $(this).attr("data");
        $("#" + activeTab).fadeIn();
    });
});
*/
