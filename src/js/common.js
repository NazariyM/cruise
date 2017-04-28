$(function () {

	// moving nav line
	$(function () {

		var movingLine = {
			init: function init() {
				this.el = $('.js-menu');
				this.el.find('> li').on('mouseover', this._move.bind(this));
				this.el.on('mouseleave', this._destroy.bind(this));

				this._goToActive();
			},
			_move: function _move(e) {
				var target = $(e.currentTarget);
				var $line = target.siblings('.js-moving-line');
				var width = target.width();
				var offsetLeft = target.position().left;
				var gutterLeft = parseInt(getComputedStyle(target[0]).paddingLeft);

				$line.css({
					width: width + 'px',
					transform: 'translate3d(' + (gutterLeft + offsetLeft) + 'px,0,0)'
				});
			},
			_destroy: function _destroy() {
				var $line = this.el.find('.js-moving-line');

				// $line.attr('style', '');

				this._goToActive();
			},
			_goToActive: function _goToActive() {
				var line = this.el.find('.js-moving-line');
				var active = this.el.find('li.is-active');
				var gutterLeft = parseInt(getComputedStyle(active[0]).paddingLeft);

				var activeProp = {
					width: active.width(),
					offsetLeft: active.position().left
				};

				line.css({
					width: activeProp.width + 'px',
					transform: 'translate3d(' + (activeProp.offsetLeft + gutterLeft) + 'px,0,0)'
				});

				setTimeout(function () {
					line.addClass('is-init');
				}, 200);
			}
		};

		movingLine.init();
	});


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
		nextArrow: '<button type="button" class="testimonials__slider-arr testimonials__slider-arr_next"><svg class="testimonials__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>'
	});

	//excursion tabs
	function initExcursionToggling () {
		var $tabsButton = $('.js-excursion-tabs-nav').find('li');
		var $tabsContent = $('.js-excursion-tabs-data').children('li');

		$tabsContent.hide();

		$tabsButton.each(function () {
			if($(this).hasClass('is-active')) {
				$(this).trigger('click');
				$tabsContent.eq($(this).index()).fadeIn(600);
			}
		});

		$tabsButton.on('click', function (e) {
			e.preventDefault();
			var $index = $(this).index();
			var $_this = $(this);

			$_this.hasClass('is-active') ? $_this.removeClass('is-active') : $_this.addClass('is-active').siblings().removeClass('is-active');

			$tabsContent.eq($index).fadeToggle(600);
			$tabsContent.hide().eq($index).fadeToggle(600);
		});

	}

	initExcursionToggling();

	// maps
	(function () {
		ymaps.ready(init);
		var excursionMap, locBalloon;

		function init() {
			excursionMap = new ymaps.Map('js-excursion-map', {
				center: [54.40504626991361,65.30454111414433],
				zoom: 5
			});

			// locBalloon = new ymaps.Balloon(myMap);
			// locBalloon.options.setParent(myMap.options);
			// myMap.balloon.open([53.19480611857074, 50.1113521604379], {
			// 	contentBody: '<div class="location__balloon"><div class="location__balloon-logo"><img src="img/logo.svg"></div> <div class="location__balloon-text">Ленинская улица 168</div></div>'
			// }, {
			// 	closeButton: false,
			// 	autoPan: true
			// });

			excursionMap.behaviors.disable('scrollZoom');
			excursionMap.controls.remove('zoomControl');
			excursionMap.controls.remove('geolocationControl');
			excursionMap.controls.remove('searchControl');
			excursionMap.controls.remove('trafficControl');
			excursionMap.controls.remove('typeSelector');
			excursionMap.controls.remove('fullscreenControl');

		}
	})();

	(function () {
		ymaps.ready(init);
		var aboutMap;

		function init() {
			aboutMap = new ymaps.Map('js-about-map', {
				center: [53.17558202121662,50.06785157719889],
				zoom: 12
			});

			// locBalloon = new ymaps.Balloon(myMap);
			// locBalloon.options.setParent(myMap.options);
			// myMap.balloon.open([53.19480611857074, 50.1113521604379], {
			// 	contentBody: '<div class="location__balloon"><div class="location__balloon-logo"><img src="img/logo.svg"></div> <div class="location__balloon-text">Ленинская улица 168</div></div>'
			// }, {
			// 	closeButton: false,
			// 	autoPan: true
			// });


			// [53.188681775199655,50.11000232293693]
			// [53.187078071239924,50.07857949999998]
			// [53.25022470164098,50.245655771163925]

			aboutMap.behaviors.disable('scrollZoom');
			aboutMap.controls.remove('zoomControl');
			aboutMap.controls.remove('geolocationControl');
			aboutMap.controls.remove('searchControl');
			aboutMap.controls.remove('trafficControl');
			aboutMap.controls.remove('typeSelector');
			aboutMap.controls.remove('fullscreenControl');

		}
	})();

});