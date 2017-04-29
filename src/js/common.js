$(function () {
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

});