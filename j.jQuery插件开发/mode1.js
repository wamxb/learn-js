/**
 * Created by zplus on 2015/11/23.
 */
;(function ($, window, document, undefined) {

    var privateFunction = function () {
    };

    var methods = {
        init: function (options) {
            console.log(options);
            return this.each(function () {
                var $this = $(this);
                var settings = $this.data('pluginName');
                console.log(options);

                if (typeof settings === 'undefined') {
                    var defaults = {
                        propertyName: 'value',
                        onSomeEvent: function () {
                        }
                    };
                    settings = $.extend(true, {}, defaults, options);
                    console.log(settings);
                    $this.data('pluginName', settings);
                } else {
                    settings = $.extend(true, {}, settings, options);
                }
            });
        },
        destroy: function (options) {
            return this.each(function () {
                var $this = $(this);
                $this.removeData('pluginName');
            });
        },
        val: function (options) {
            var someValue = this.eq(0).html();
            return someValue;
        }
    };

    $.fn.pluginName = function () {
        var method = arguments[0];

        if (methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if (typeof method == 'object' || !method) {
            method = methods.init;
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.pluginName');
            return this;
        }
        return method.apply(this, arguments);
    }

})(jQuery, window, document);