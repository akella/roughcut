$(document).ready(function() {
	$('.timeline__comment').click(function (e) {
		$(this).children('.timeline__commenttext').toggleClass('is-visible');
	});
});