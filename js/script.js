var toTop = document.getElementById("to-top")
var rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
toTop.addEventListener("click", scrollToTop)
$(document).ready(function(){


	 $('.slider-for').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: true,
	  	fade: true,
	  	asNavFor: '.slider-nav',
	  	autoplay:false
	});	
	$('.slider-nav').slick({
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	centerMode: true,
	  	focusOnSelect: true,
	  	arrows: false,
	  	dots:false,
	  	autoplay:false
	});
	$(function() {
		$(".color").selectmenu();
		$(".size").selectmenu();
		$(".country").selectmenu();
		$(".quantity").spinner();
	});

	$("a.search").mouseenter(function(){
		$("a.search input").show();
	});
	$("a.search").click(function() {
		$("a.search input").hide();
	});
});