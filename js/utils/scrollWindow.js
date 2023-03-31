$(function () {
	let windowHeight = $(window).height();
	let currentPos = 0;

	const changeMargin = (className, step, side = 'right') => {
		const x = currentPos - step;
		$(`${className} .step__signature`).css(`${side}`, x + 'px');
	}

	$(window).scroll(function () {
		let steps = [
			$('.step_1').offset().top,
			$('.step_2').offset().top,
			$('.step_3').offset().top
		]
		currentPos = $(window).scrollTop();
		if (currentPos > (steps[0] - windowHeight) && currentPos < (steps[0] + windowHeight)) {
			changeMargin('.step_1', steps[0])
		}
		// if (currentPos > (steps[1] - windowHeight) && currentPos < (steps[1] + windowHeight)) {

		// 	changeMargin('.step_2', steps[1], 'left')
		// }
		if (currentPos > (steps[2] - windowHeight) && currentPos < (steps[2] + windowHeight)) {

			changeMargin('.step_3', steps[2])
			
		}
	})
})