$(function() {

	$('.possibility__title').matchHeight({
		byRow: false,
	});

	$('.possibility__description').matchHeight({
		byRow: false,
	});

	// new WOW().init();

	$('.scroll-link').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 500);
		$('.header__block').removeClass('active');
		$('html, body').removeClass('not-scroll');
	});



   
});