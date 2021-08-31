//slideImage
var imageshow = 1;
function Clickshow(n){
	Slideshow(imageshow += n);
}
function Dotshow(n) {
	Slideshow(imageshow = n);
}


function Slideshow(n) {
	var i;
	var myshow = document.getElementsByClassName('mySlides');
	var mydot = document.getElementsByClassName('dot');


	if(n > myshow.length){
		imageshow = 1;
	}
	if (n < 1) {
		imageshow = myshow.length;
	}
	for (i=0 ;i < myshow.length; i++)
	{
		myshow[i].style.display = 'none';
	}
	for (i=0 ;i < mydot.length; i++)
	{
		mydot[i].className = mydot[i].className.replace(" active","");
	}

	myshow[imageshow-1].style.display= 'block';
	mydot[imageshow-1].className += " active" ;
}


//portfolio


/*let tabIndicator = document.getElementsByClassName("tab-indicator")[0];*/
let tabmenu = document.getElementsByClassName("menu-tab")[0];
let tabBody = document.getElementsByClassName("portfolio-grid")[0];
/*let tabGrid = document.getElementsByClassName("tab-grid")[0];*/

let tabsPane = tabmenu.getElementsByTagName("li");

for (let i=0;i<tabsPane.length;i++) {
		tabsPane[i].addEventListener("click",function(){

			tabmenu.getElementsByClassName("active")[0].classList.remove("active");
			tabsPane[i].classList.add("active");
			tabBody.getElementsByClassName("active")[0].classList.remove("active");
			tabBody.getElementsByClassName("tab-grid")[i].classList.add("active");

			// tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
		});
}

