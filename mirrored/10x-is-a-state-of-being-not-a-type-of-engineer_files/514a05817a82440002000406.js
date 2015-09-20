window._pa = window._pa || {};
_pa.segments = [{"name":"All visitors","id":649205,"regex":".*"},{"name":"devops exp.","id":1174208,"regex":"/.*devops.*/?([?#].*)*$"}];
_pa.conversions = [];
_pa.conversionEvents = [];
_pa.segmentEvents = [];
!function(){function e(e,n,o){a(e,n,o),t(e,n)}function a(e,a,t){if(null==t||isNaN(t))var n=_pa.pixelHost+"seg?t=2&add="+e;else var n=_pa.pixelHost+"seg?t=2&add="+e+":"+t;_pa.createImageTag("segments",e,n,a)}function t(e,a){var t=_pa.paRtbHost+"seg/?add="+e;_pa.productId&&(t+=":"+encodeURIComponent(_pa.productId)),p?_pa.createImageTag("paRtbSegments",e,t,a):i.push({id:e,name:a})}function n(){if(p=!0,0!==i.length){for(var e=[],a=[],t=0;t<i.length;t++){var n=i[t],o=n.id,r=n.name;_pa.productId&&(o+=":"+encodeURIComponent(_pa.productId)),e.push(o),a.push(r)}var o=e.join(","),r=a.join(","),d=_pa.paRtbHost+"seg/?add="+o;_pa.createImageTag("paRtbSegments",o,d,r)}}function o(e,a,t,n){t=t||_pa.orderId,n=n||_pa.revenue;var o="";t&&""!==t&&(t=t.toString().replace(/@.*/,""),o+="&order_id="+encodeURIComponent(t)),n&&""!==n&&(o+="&value="+encodeURIComponent(n)),o+="&other="+function(){for(var e="",a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=0;20>t;t++){var n=Math.floor(Math.random()*a.length);e+=a.charAt(n)}return e}();var r=_pa.pixelHost+"px?t=2&id="+e+o,p=_pa.paRtbHost+"px/?id="+e+o;_pa.rtbId&&(p+="&a_id="+_pa.rtbId),_pa.createImageTag("conversions",e,r,a),_pa.createImageTag("paRtbConversions",e,p,a)}function r(e){for(var a=e.shift().split("."),t=_pa,n=0;n<a.length;n++)t=t[a[n]];return t.apply(_pa,e)}_pa.head=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];var p=!1,i=[];_pa.init=function(){_pa.fired={segments:[],conversions:[]},_pa.url=document.location.href,_pa.pixelHost=("https:"===document.location.protocol?"https://secure":"http://ib")+".adnxs.com/",_pa.paRtbHost=("https:"===document.location.protocol?"https://":"http://")+"pixel.prfct.co/"},_pa.addFired=function(e,a){"undefined"==typeof _pa.fired[e]&&(_pa.fired[e]=[]),_pa.fired[e].push(a)},_pa.detect=function(){for(var a=0;a<_pa.segments.length;a++){var t=_pa.segments[a];_pa.url.match(new RegExp(t.regex,"i"))&&e(t.id,t.name)}for(var a=0;a<_pa.conversions.length;a++){var n=_pa.conversions[a];_pa.url.match(new RegExp(n.regex,"i"))&&o(n.id,n.name)}},_pa.track=function(e,a){a="undefined"!=typeof a?a:{};var t=_pa.trackSegments(e,a),n=_pa.trackConversions(e,a);return t||n},_pa.trackSegments=function(a,t){for(var n=!1,o=0;o<_pa.segmentEvents.length;o++){var r=_pa.segmentEvents[o];r.name===a&&(n=!0,e(r.id,r.name,t.segment_value))}return n},_pa.trackConversions=function(e,a){for(var t=!1,n=0;n<_pa.conversionEvents.length;n++){var r=_pa.conversionEvents[n];r.name===e&&(t=!0,o(r.id,r.name,a.orderId,a.revenue))}return t},_pa.trackProduct=function(e){_pa.productId=e;for(var a=_pa.fired.segments,n={},o=0;o<a.length;o++){var r=a[o],p=r.id;n[p]=!0}for(var i in n)t(i,"product refire")},_pa.fireLoadEvents=function(){if("undefined"!=typeof _pa.onLoadEvent)if("function"==typeof _pa.onLoadEvent)_pa.onLoadEvent();else if("string"==typeof _pa.onLoadEvent)for(var e=_pa.onLoadEvent.split(","),a=0;a<e.length;a++){var t=e[a];_pa.track(t)}},_pa.createImageTag=function(e,a,t,n){var o=document.createElement("img");o.src=t,o.width=1,o.height=1,o.border=0,_pa.head.appendChild(o),_pa.addFired(e,{id:a,name:n,tag:o})},_pa.start=function(){_pa.fireLoadEvents(),_pa.detect(),_pa.initQ(),n()},_pa.initQ=function(){if("undefined"!=typeof window._pq)for(var e=0;e<_pq.length;e++){var a=_pq[e];r(a)}window._pq={push:function(e){return r(e)}}},_pa.init()}();	(function() {
	_pa.partner_tags = {"pa_rtb":true};
	function createPartnerTags(partner_tags){
		if (partner_tags.canned_banners != null){
			loadCannedBanners(partner_tags.canned_banners);
		}
	}
	
	
	
	
	
	createPartnerTags(_pa.partner_tags);
})();

_pa.start();
