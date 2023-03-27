$(function () {
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
})