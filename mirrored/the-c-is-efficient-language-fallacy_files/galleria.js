/*
 * Galleria Classic Theme v. 1.5 2010-10-28
 * http://galleria.aino.se
 *
 * Copyright (c) 2010, Aino
 * Licensed under the MIT license.
 */

(function($) {

/* Duck-punching hack for getting the description to show up in the "author" div.
It doesn't look like we can switch the order of divs, so we're stuck with putting the
description in the author div */
var oldLoad = Galleria.prototype.load;
Galleria.prototype.load = function(source, selector, config) {
	/* Thank you Galleria guys for thinking of this scenario... */
	config = function(img) {
		return {
			description: img.attr('alt')+'<div class="galleria-info-caption">'+img.attr('data-description')+'</div>'
		};
	};
	oldLoad.apply(this, [source, selector, config]);
};

Galleria.addTheme({
	name: 'nat-geo',
	author: 'Crowd Favorite',
	version: '1.0',
	css: 'galleria.nat-geo.css',
	defaults: {
		transition: 'slide',
		thumb_crop: false,
		clicknext: true,
		show_imagenav: false,
		show_counter: false,
		show_info: true
	},
	init: function(options) {
		// show loader & counter with opacity
		this.$('loader').show().css('opacity', 0.5);

		// some stuff for non-touch browsers
		if (! Galleria.TOUCH ) {
			
			// Fade thumbnails on hover
			this.$('thumbnails').children().hover(function() {
				$(this).not('.active').children().stop().fadeTo(100, 1);
			}, function() {
				$(this).not('.active').children().stop().fadeTo(400, 0.6);
			});
			
			this.addIdleState( this.get('image-nav-left'), { left:-50 });
			this.addIdleState( this.get('image-nav-right'), { right:-50 });
		}
		
		// Fade out inactive thumbnails
		this.bind(Galleria.THUMBNAIL, function(e) {
			$(e.thumbTarget).parent(':not(.active)').children().css('opacity', 0.6);
		});
		
		// The event where the image displayed changes
		this.bind(Galleria.LOADSTART, function(e) {
			if (!e.cached) {
				this.$('loader').show().fadeTo(200, 0.5);
			}
			
			// Refresh NGS ads every time image changes
			if (typeof ngsPageView === 'function') {
				ngsPageView();
			};
			
			$(e.thumbTarget).css('opacity', 1).parent().siblings().children().css('opacity', 0.6);
		});
		
		this.bind(Galleria.LOADFINISH, function(e) {
			this.$('loader').fadeOut(200);
		});
	}
});

})(jQuery);