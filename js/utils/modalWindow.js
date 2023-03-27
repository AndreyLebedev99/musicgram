$( function () {
	$('.modal-link').click(function() {
		let modal = $(this).attr('href');
		$(modal).fadeIn(300);
		return false;
	});

	$('.modal__close, .modal__blackout').click(function() {
		$(this).parents('.modal-wrapper').fadeOut(300);
		return false;
	});
})