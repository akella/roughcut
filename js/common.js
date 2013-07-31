


$(document).ready(function() {
	$('.timeline__comment').click(function (e) {
		$(this).children('.timeline__commenttext').toggleClass('is-visible');
	});
	$('.rough__togglevideocontrols').click(function (e) {
		$('.rough').toggleClass('is-toggledcontrols')
	});
	$('.videopreview').click(function (e) {
		$(this).toggleClass('is-off');
	});
	$('.waveform__video').click(function (e) {
		$('body').toggleClass('is-visiblevideo')
	});
	$('.rough').click(function (e) {
		//$('.rough').toggleClass('is-withleft is-withright')
		$('.rough').addClass('is-fullscreencutlist');
	});
	waveformWrapper = document.querySelector(".waveform .waveform__wrap");
	window.addEventListener("scroll", function() {
	    if (waveformWrapper.parentElement.getPosition().y < 0) {
	        waveformWrapper.classList.add("is-fixed");
	    } else {
	        waveformWrapper.classList.remove("is-fixed");
	    };
	});
});