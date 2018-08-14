$(function() {

	$('.landscape').slick({
		dots: false,
		arrows: true,
		nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
	    prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
	});

	var count = $('.count-active').text();
	$('.slick-slider i').click(function () {
		if ($(this).attr('class') == 'fa fa-chevron-left slick-arrow') {
			if (count <= 1) {
				count = 5;
			} else {
				count -= 1;
			}
		} else {
			if (count >= 5) {
				count = 1;
			} else {
				count += 1;
			}
		}
		$('.count-active').text(count);
	});

	$('.nav-doubble').click(function(){
		$('.nav-menu').slideToggle();
	});
	$(window).resize(function() {
		if ($(window).width() > 780) {
			$('.nav-menu').removeAttr('style');
		}
	});

});