(function ($) {

    var privateFunction  = function () {

    };

    var methods = {
        init: function (options) {

            return this.each(function () {
                var $that = $(this);
                console.log('init', options);

                var defaults = {
                    color: 'blue',
                    size: 50
                };
                var settings = $.extend({}, defaults, options);
                $that.css({
                    margin: 10,
                    width: settings.size,
                    height: settings.size,
                    backgroundColor: settings.color
                })
            });
        },
        destroy: function () {
            return this.each(function () {
               var $that = $(this);

                $that.css({
                    opacity: .5
                })
            });
        }
    };

    $.fn.pluginName = function () {
        var method = arguments[0];
        var args;
        if (methods[method]) { // 执行方法
            method = methods[method];

            args = Array.prototype.slice.call(arguments, 1);
        } else if (typeof method == 'object' || !method) { // {} || 未传递参数
            args = [method];
            method = methods.init;
        } else {
            console.error('Method ' + method + ' does not exist on jQuery.pluginName');
            return this;
        }
        return method.apply(this, args); // 方法执行中返回 this,最后能得到 this
    }

})(jQuery);