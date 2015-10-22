$(document).ready(function(){
	var $toggleButton = $("button.navbar-toggle");

	$toggleButton.on("click", function(){
		$("nav").toggle();
	});
});