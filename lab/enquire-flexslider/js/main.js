var Slider = function() {
	this.elem = $('.items-wrapper');
	this.items = this.elem.find('.item');
};

Slider.prototype.setup = function() {
	this.elem.flexslider({
		selector: '.items > .item',
		animation: 'slide',

		controlNav: true,
		directionNav: true,

		keyboard: false,
		slideshow: false,

		itemWidth: this.items.first().width(),
		itemMargin: 10
	});

	this.slider = this.elem.data('flexslider');
}

$(document).ready(function() {
	window.slider = new Slider();

	window.slider.setup();

	var queryMobile = "(max-width: 31.24em)";
	var querySmallTablet = "(min-width: 31.25em) and (max-width: 47.99em)";
	var queryTablet = "(min-width: 48em) and (max-width: 63.99em)";
	var queryDesktop = "(min-width: 64em) and (max-width: 87.49em";
	var queryLarge = "(min-width: 87.5em)";
	var handler = {
		match: function() {
			slider.slider.flexslider('destroy');
			slider.setup();
		}
	};

	enquire.register(queryMobile, handler);
	enquire.register(querySmallTablet, handler);
	enquire.register(queryTablet, handler);
	enquire.register(queryDesktop, handler);
	enquire.register(queryLarge, handler);
});
