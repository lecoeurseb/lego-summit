$(document).ready(function(){
	var $toggleButton = $("a.navbar-toggle");

	$toggleButton.on("click", function(){
		$("nav").slideToggle();
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').on('click', function(event) {
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top
	        }, 700, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
});