$(document).ready(function(){
	
	
	function slider_resize() {
    var $heightofslider = $(window).height();
	$heightofslider - 90;
	$('.ws_images').css({height: $heightofslider});
	
	};
	
	slider_resize();
	
	$(window).resize(function(){ 
		slider_resize(); 
	});
	

}); /* close document ready jquery */



