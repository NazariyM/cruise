$(function () {

	function initView () {
		$('.owl-carousel').owlCarousel({
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

});