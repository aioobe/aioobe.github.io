/* Replace no-js class with js class. Run immediately, before DOMReady.
Allows us to prevent JS/CSS FOUC easily.*/
(function(w) {
	var h = w.document.getElementsByTagName('html')[0];
	h.className = h.className.replace('no-js', 'js');
})(window);

/*
 * hoverFix 1.0
 * Crowd Favorite
 */
;(function($) {
	$.fn.hoverFix = function(classname) {
		var c = classname || 'hover';
		this.hover(function(){
			$(this).addClass(c);
		},
		function(){
			$(this).removeClass(c);
		});
	};
})(jQuery);


/*
 * AddThis Settings
 */
/*
 * AddThis Settings
 */
var addthis_config = {
    services_expanded: 'blogger, tumblr, wordpress, stumbleupon, digg, reddit, googlereader, linkedin, orkut, sinaweibo, vk'
}


var addthis_share = {
	url_transforms: {
		clean: true,
	},
}
