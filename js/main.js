$(function() {

	$('.possibility__title').matchHeight({
		byRow: false,
	});

	$('.possibility__description').matchHeight({
		byRow: false,
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > ($('.step_1').offset().top - $(window).height())) {
			let x = $(window).scrollTop() - $('.step_1').offset().top;
			$('.step_1 .step__signature').css('margin-right', x + 'px');
		}
		if ($(window).scrollTop() > ($('.step_2').offset().top - $(window).height())) {
			let x2 = $(window).scrollTop() - $('.step_2').offset().top;
			$('.step_2 .step__signature').css('margin-left', x2 + 'px');
		}
		if ($(window).scrollTop() > ($('.step_3').offset().top - $(window).height())) {
			let x3 = $(window).scrollTop() - $('.step_3').offset().top;
			$('.step_3 .step__signature').css('margin-right', x3 + 'px');
		}
	})

	$('.btn_hover')
	.on('mouseenter', function (e) {
		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find('span').css({ top: relY, left: relX })
	})
	.on('mouseout', function (e) {
		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find('span').css({ top: relY, left: relX })
	});

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

	// new WOW().init();

	$('.for__step_1 .for__items a').click(function () {
		if ($(this).hasClass('active')) {
			$(this).siblings().removeClass('transparent');
			$(this).removeClass('active');
			$('.direction').fadeOut(300);
			$('.for__step_2, .for__step_2 .for__items a').removeClass('active').removeClass('transparent');
		} else {
			$(this).siblings().removeClass('active').addClass('transparent');
			$(this).removeClass('transparent').addClass('active');
			$('.for__step_2 .for__items a').removeClass('active').removeClass('transparent');
			let direction = $(this).attr('href');
			$('.direction').hide();
			$(direction).fadeIn(300);
			$('.for__step_2').addClass('active');
		}
		$('.for__step_3').fadeOut(300);
		return false;
	});

	$('.scroll-link').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 500);
		$('.header__block').removeClass('active');
		$('html, body').removeClass('not-scroll');
	});

	$('.for__step_2 .for__items a').click(function () {
		if ($(this).hasClass('active')) {
			$(this).siblings().removeClass('transparent');
			$(this).removeClass('active');
			$('.for__step_3').fadeOut(300);
		} else {
			$(this).siblings().removeClass('active').addClass('transparent');
			$(this).removeClass('transparent').addClass('active');
			$('.for__step_3').fadeIn(300);
		}
		return false;
	});

	$('.scroll-link').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 500);
		$('.header__block').removeClass('active');
		$('html, body').removeClass('not-scroll');
	});

	$('.modal-link').click(function() {
		let modal = $(this).attr('href');
		$(modal).fadeIn(300);
		return false;
	});

	$('.modal__close, .modal__blackout').click(function() {
		$(this).parents('.modal-wrapper').fadeOut(300);
		return false;
	});

   
});