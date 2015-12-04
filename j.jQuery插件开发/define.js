;(function(define){
	define(['jquery'], function($){
		return (function(){

		})();
	})
}(typeof define === 'function' && define.amd ? define : function(deps, factory){
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory(require('jquery'));
	} else {
		window['pluginName'] = factory(window['jQuery']);
	}
}));

// 模式2 amd, cmd
(function (factory) {
    if (typeof define === 'function') {
    	if (define.amd) {
        	define(['jquery'], factory);
    	} else if (define.cmd) {
    		define(function () {
	            return function (jq) {
	                factory(jq);
	            };
	        });
    	}   
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.fn.extend({
        pluginName: function (opts) {
            var defaults = {
            };

            var cfg = $.extend(defaults, opts);

            return this.each(function () {
            });
        }
    })
}));