$(function () {

	function initView() {
		$('.js-view-slider').owlCarousel({
			items: 4,
			dots: false,
			nav: true,
			margin: 5,
			smartSpeed: '600',
			navText: [
				'<button type="button" class="view__slider-arr view__slider-arr_prev"><svg class="view__slider-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
				'<button type="button" class="view__slider-arr view__slider-arr_next"><svg class="view__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>'
			]
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

	$('.js-testimonials-slider').owlCarousel({
		onInitialized: function () {
			$('.js-testimonials-slider .owl-item.center').css({
				transform: "scale(1)"
			});
			// $(".js-testimonials-slider .owl-item").css({
			// 	transform:"none"
			// });
			$(".js-testimonials-slider .owl-item.active:not('.owl-item.center')").css({
				transform: "scale(.7)"
			});
		},
		onTranslated: function () {
			// $(".js-testimonials-slider .owl-item").css({
			// 	transform:"none"
			// });
			$(".js-testimonials-slider .owl-item.active").css({
				transform: "scale(.7)"
			});
			$(".js-testimonials-slider .owl-item.center").css({
				transform: "scale(1)"
			});
		},
		loop: true,
		center: true,
		items: 3,
		dots: false,
		nav: true,
		smartSpeed: '600',
		navContainer: 'testimonials__slider-nav',
		navText: [
			'<button type="button" class="testimonials__slider-arr testimonials__slider-arr_prev"><svg class="view__slider-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
			'<button type="button" class="testimonials__slider-arr testimonials__slider-arr_next"><svg class="view__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>'
		]
	});

});