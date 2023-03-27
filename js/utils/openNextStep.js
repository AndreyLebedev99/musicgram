$(function () {
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
})