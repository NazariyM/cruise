$(function () {

	function initView() {
		$('.js-view-slider').owlCarousel({
			mouseDrag: false,
			items: 4,
			dots: false,
			nav: true,
			margin: 5,
			smartSpeed: '600',
			navText: [
				'<button type="button" class="view__slider-arr view__slider-arr_prev"><svg class="view__slider-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
				'<button type="button" class="view__slider-arr view__slider-arr_next"><svg class="view__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>'
			],
			responsive: {
				320: {
					items: 1
				},
				499: {
					items: 2
				},
				767: {
					items: 4
				}
			}
		});

		$('[data-fancybox]').fancybox();
	}

	initView();

	$('.js-bar-slider').owlCarousel({
		items: 1,
		dots: true,
		smartSpeed: '600',
		dotClass: 'bar__slider-dot'
	});


	$('.js-testimonials-slider').slick({
		centerMode: true,
		focusOnSelect: true,
		useTransform: true,
		centerPadding: '25%',
		cssEase: 'ease-in-out',
		variableHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="testimonials__slider-arr testimonials__slider-arr_prev"><svg class="testimonials__slider-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
		nextArrow: '<button type="button" class="testimonials__slider-arr testimonials__slider-arr_next"><svg class="testimonials__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				centerMode: false,
				centerPadding: 0
			}
		}]
	});

	(function () {

		var $restaurantSld = $('.features_restaurant').find('.features__row');

		function initSlider(slider) {
			initSlickSlider(slider);
			toggleSlider(767, slider);
			$(window).resize(function () {
				toggleSlider(767, slider);
			});

			function toggleSlider(breakpoint, slider) {
				if ($(window).width() < breakpoint) {
					if (!slider.hasClass('slick-initialized')) {
						initSlickSlider(slider);
					}
				} else {
					slider.slick('unslick');
				}
			}

			function initSlickSlider(slider) {
				slider.slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button type="button" class="restaurant__slider-arr restaurant__slider-arr_prev"><svg class="restaurant__slider-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
					nextArrow: '<button type="button" class="restaurant__slider-arr restaurant__slider-arr_next"><svg class="restaurant__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>'
				});
			}
		}

		initSlider($restaurantSld);
	})();

});