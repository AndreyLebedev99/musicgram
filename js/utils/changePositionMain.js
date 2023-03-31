$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$(`.main-blur1`).css(`position`, `absolute`);
			$(`.main-blur2`).css(`position`, `absolute`);
		} else {
			$(`.main-blur1`).css(`position`, `fixed`);
			$(`.main-blur2`).css(`position`, `fixed`);
		}
	  });
})