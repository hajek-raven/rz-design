
var WIDTH;
var HEIGHT;

$(document).ready(function(){
	var $body = $('body');
	var $bg = $('.bg');
	var $reasons = $('.reasons');
	var $rocket = $('.logo');
	var $services = $('.services');
	var $nav = $('.main-nav');

	$body.mousemove(function(ev){
		$body.mousemove(function(e){
			WIDTH = window.innerWidth;
			HEIGHT = window.innerHeight;
			var x = WIDTH - e.clientX;
			var y = HEIGHT - e.clientY;
			var rx = WIDTH/2 - e.clientX;
			var ry = HEIGHT/2 - e.clientY;
			$bg.css('transform', 'translate3d(' + rx/(20) + 'px, ' + ry/(20) + 'px, 0px)');
			$reasons.css('transform', 'rotateX(' + ry/(220) + 'deg) rotateY(' + rx/(-220) + 'deg)');
			//$services.css('transform', 'rotateX(' + ry/(220) + 'deg) rotateY(' + rx/(-220) + 'deg)');
			//$bg.css('background-position', rx/(20) + 'px ' + ry/(20) + 'px');
		});
	});
	/*
	var doc = document.documentElement;
	$( window ).scroll(function() {
		var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		$rocket.css('transform', 'translateY(' + top*1.2 + 'px)');
		$nav.css('transform', 'translateY(' + top*1.2 + 'px)');
	});
	*/
});
