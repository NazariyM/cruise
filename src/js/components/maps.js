$(function () {

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