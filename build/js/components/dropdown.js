"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	var Dropdown = function () {
		function Dropdown(config) {
			_classCallCheck(this, Dropdown);

			this._dropdownClass = config.dropdownClass;
			this._dropdown = config.dropdown;
			this._open = this._dropdown.find(config.open);

			this._active = "is-open";

			this._openOnClick();
			this._closeOnItemClick();
			this._closeOnBody();
		}

		_createClass(Dropdown, [{
			key: "_openOnClick",
			value: function _openOnClick() {
				var _this = this;

				this._open.click(function (e) {
					if (_this._dropdown.hasClass(_this._active)) {
						_this.close();
						return;
					} else {
						_this.close();
					}

					_this._dropdown.addClass(_this._active);
				});
			}
		}, {
			key: "_closeOnItemClick",
			value: function _closeOnItemClick() {
				var _this2 = this;

				this._dropdown.find("li").click(function (e) {
					_this2.close();
				});
			}
		}, {
			key: "_closeOnBody",
			value: function _closeOnBody() {
				var _this3 = this;

				$('body').click(function (e) {
					if (!$(e.target).closest(_this3._dropdownClass).length) _this3.close();
				});
			}
		}, {
			key: "close",
			value: function close() {
				$(this._dropdownClass).removeClass(this._active);
			}
		}]);

		return Dropdown;
	}();

	$(".js-dropdown").each(function () {
		new Dropdown({
			dropdown: $(this),
			dropdownClass: ".js-dropdown",
			open: ".js-dropdown-open"
		});
	});
});