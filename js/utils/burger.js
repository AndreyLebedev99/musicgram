$(function () {
	$('.header__navbar').click(function() {
		$('.header__block').addClass('active');
		$('html, body').addClass('not-scroll');
		return false;
	});

	$('.header__block-close').click(function() {
		$('.header__block').removeClass('active');
		$('html, body').removeClass('not-scroll');
		return false;
	}); 
})