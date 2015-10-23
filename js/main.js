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

	// Make the "Back to Top" button appear when you scroll down
	$(function(){  
	    $(document).on( 'scroll', function(){
	        if ($(window).scrollTop() > 100) {
	            $('.scroll-top-wrapper').addClass('show');
	        } else {
	            $('.scroll-top-wrapper').removeClass('show');
	        }
	    });
	});
});