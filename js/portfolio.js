//slideImage
var imageshow = 1;
Slideshow();
function Clickshow(n) {
  Slideshow((imageshow += n));
}
function Dotshow(n) {
  Slideshow((imageshow = n));
}

function Slideshow(n) {
  var i;
  var myshow = document.getElementsByClassName("mySlides");
  var mydot = document.getElementsByClassName("dot");

  if (n > myshow.length) {
    imageshow = 1;
  }
  if (n < 1) {
    imageshow = myshow.length;
  }
  for (i = 0; i < myshow.length; i++) {
    myshow[i].style.display = "none";
  }
  for (i = 0; i < mydot.length; i++) {
    mydot[i].className = mydot[i].className.replace(" active", "");
  }

  myshow[imageshow - 1].style.display = "block";
  mydot[imageshow - 1].className += " active";
}
setInterval(function () {
  Clickshow(1);
}, 3000);

//portfolio

/*let tabIndicator = document.getElementsByClassName("tab-indicator")[0];*/
let tabmenu = document.getElementsByClassName("menu-tab")[0];
let tabBody = document.getElementsByClassName("portfolio-grid")[0];
/*let tabGrid = document.getElementsByClassName("tab-grid")[0];*/

let tabsPane = tabmenu.getElementsByTagName("li");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabmenu.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByClassName("tab-grid")[i].classList.add("active");

    // tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}

//Scroll line percent
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myline").style.width = scrolled + "%";
}

//Toggle Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
      toggle.classList.toggle("fa-times");
    });
  }
};
showMenu("header-toggle", "nav-menu");
