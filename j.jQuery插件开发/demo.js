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