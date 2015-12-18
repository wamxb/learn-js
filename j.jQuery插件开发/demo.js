+(function ($, window, document, undefined) {

    $.fn.hilight = function (options) {
        return this.each(function () {
            var elem = $(this);

            var markup = elem.html();
            markup = $.fn.hilight.format(markup);
            elem.html(markup);
        });
    };

    $.fn.hilight.format = function (text) {
        return '<strong>' + text + '</strong>';
    };

    function debug(obj) {
        if (console && console.log) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift('(●—●): ');
            console.apply(console, args);
        }
    }

})(jQuery, window, document);

+(function ($, window, document, undefined) {

    var Beautifier = function (ele, opt) {
        this.$element = ele;
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        };
        this.options = $.extend({}, this.defaults, opt);
    };

    Beautifier.prototype = {
        beautify: function () {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        }
    };

    $.fn.myPlugin = function (options) {
        var beautifier = new Beautifier(this, options);
        return beautifier.beautify();
    }

})(jQuery, window, document);


// http://www.ghugo.com/javascript-writing-better-jquery-plugins/
+(function ($, window, document, undefined) {

    var Plugin, privateMethod;

    /**
     * 自运行的单例模式
     */
    Plugin = (function () {
        function Plugin(element, options) {
            this.$element = $(element);
            this.settings = $.extend({}, $.fn.plugin.defaults, options || this.$element.data('plugin'));
            // 将dom jQuery对象赋值给插件，方便后继调用
            this.$element.css({
                'color': this.settings.color,
                'fontSize': this.settings.fontSize,
                'textDecoration': this.settings.textDecoration
            });
        }

        /**
         * 插件的公共方法，相当于接口函数，用于给外部调用
         */
        Plugin.prototype.doSomething = function () {

        };

        return Plugin;
    })();

    $.fn.plugin = function (options) {
        var instance;
        instance = this.data('plugin');

        // 判断插件是否已经实例化过，如果已经实例化了则直接返回该实例对象
        if (!instance) {
            return this.each(function () {
                // 将实例化后的插件缓存在dom结构里(内存里)
                return $(this).data('plugin', new Plugin(this, options));
            });
        }
        if (options === true) return instance;
        /**
         * 优雅处： 如果插件的参数是一个字符串，则 调用 插件的 字符串方法。
         * 如 $('#id').plugin('doSomething') 则实际调用的是 $('#id).plugin.doSomething();
         * doSomething是刚才定义的接口。
         * 这种方法 在 juqery ui 的插件里 很常见。
         */
        if ($.type(options) === 'string') instance[options]();
    };

    $.fn.plugin.defaults = {
        'color': 'red',
        'fontSize': '12px',
        'textDecoration': 'none'
    };

    /**
     * 优雅处： 通过data-xxx 的方式 实例化插件。
     * 这样的话 在页面上就不需要显示调用了。
     */
    $(function () {
        return new Plugin($('[data-plugin]'));
    });

})(jQuery, window, document);


!(function ($) {
    $.fn.pinkify = function () {

        /*
         return this.each(function () {
         $(this).css({
         'background': '#fe57a1',
         'color': '#fff',
         'text-shadow': 'none'
         });
         });
         ===========>>>>>>>>>>>>>>>>>>>>
         */
        // $.css本身可以对集合中的每一个元素项执行操作
        return this.css({
            'background': '#fe57a1',
            'color': '#fff',
            'text-shadow': 'none'
        })
    };
})(jQuery);


+(function ($, window, document, undefined) {

    var methods = {
        init: function (options) {
            //$(window).bind('resize.bestFunctionEver', methods.flop);
            var settings = $.extend({}, $.fn.bestPluginsEver.defaults, options);

            return this.each(function () {

            });
        },
        destroy: function () {
            $(window).unbind('resize.bestFunctionEver');
        },
        flip: function (howMany) {
            // flip
        },
        flop: function () {
            // flop
        }
    };

    $.fn.bestPluginsEver = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist in the bestPluginEver');
        }
    };

    $.fn.bestPluginsEver.defaults = {
        'color': 'blue',
        'title': 'my dashboard',
        'width': '960px'
    };

})(jQuery, window, document);


/**
 * 为次要函数提供恰当的公有访问
 */
(function ($) {

    $.fn.dataCruncher = function (options) {
        var data = $.fn.dataCruncher.sort(data);
        return this.each(function () {
            // to do something
        });
    };

    $.fn.dataCruncher.sort = function (data) {
        for (var j = 1, test = data.length; j < test; j++) {
            var key = data[j], i = j - 1;
            while (i >= 0 && data[i] > key) {
                data[i + 1] = data[i];
                i = i - 1;
            }
            data[i + 1] = key;
            return data;
        }
    };

    // 提供一个新的排序函数
    $.fn.dataCruncher.sort = function (data) {
        var len = data.length;
        for (var i = 0; i < len; i++) {
            var index = i;
            for (k = i + 1; k < len; k++) {
                if (data[k] < data[index]) {
                    index = k;
                }
            }
        }
        var temp = data[i];
        data[i] = data[index];
        data[index] = temp;
    }

})(jQuery);

+(function ($, window, document, undefined) {

    var pluginName = 'defaultPluginName',
        defaults = {
            propertyName: 'value'
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {

    };

    // 防止对多个实例化
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);


+(function ($, window, document, undefined) {

    /*    $.widget('best.widget', {
     options: {
     hashtag: '#hotpink'
     },
     _crate: function () {

     },
     _destroy: function () {

     },
     _setOption: function (key, value) {
     /!**
     * 在jQueryUI1.8中，必须从基widget中手工调用该_setOption方法
     *!/
     $.widget.prototype._setOption.apply(this, arguments);
     // 在jQueryUI1.9及更高版本中，使用_super方法代替
     this._super('_setOption', key, value);
     },
     pluginMethod: function () {
     // 插件的功能
     }
     });*/
})(jQuery, window, document);


+(function ($, window, document, undefined) {

    $.fn.canvasizr = function (options) {
        options = $.extend({}, $.fn.canvasizr.options, options);

        return this.each(function () {
            var $this = $(this),
                pos = $this.position(),
                width = $this.outerWidth(),
                height = $this.outerHeight() + parseInt($this.css('margin-top')) + parseInt($this.css('margin-bottom')),
                canvas = document.createElement('canvas'),
                $canvas = $(canvas),
                ctx = canvas.getContext('2d');
            $.extend(true, ctx, options);
            width = width * 3;
            height = height * 3;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = ctx.fillColor;
            ctx.fillRect(0, 0, parseInt(width), parseInt(height));
            if (options.border) {
                ctx.strokeRect(0, 0, parseInt(width), parseInt(height));
            }
            ctx.font = options.font;
            ctx.fillStyle = ctx.textColor;
            ctx.fillText($this.text(), 8, parseInt(height) / 2);
            $canvas.css({
                'position': 'absolute',
                'left': pos.left + 'px',
                'top': pos.top + 'px',
                'z-index': 1
            });
            $('body').append($canvas);
        });
    };

    $.fn.canvasizr.options = {
        textColor: '#fff',
        fillColor: '#f00',
        strokeStyle: '#000',
        border: false,
        font: '20px sans-serif',
        lineCap: 'butt',
        lineJoin: 'miter',
        lineWidth: 1,
        miterLimit: 10,
        shadowBlur: 0,
        shadowColor: 'rgba(0, 0, 0, 0)',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        textAlign: 'start',
        textBaseline: 'alphabetic'
    };

})(jQuery, window, document);