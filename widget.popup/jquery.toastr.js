+(function ($, window, document, undefined) {

    var bindEvent = function (that) {
        that.$el.on('click', function () {
            that.show();
        });
        that.$toastr.on('animationend webkitAnimationEnd oAnimationEnd', function () {
            that.$toastr.prop('class', 'toastr');
        });
    };

    var Toastr = (function () {
        function Toastr(element, options) {
            var that = this;
            that.$el = $(element);
            that.$el.each(function () {
                var $that = $(this);
                $that.cfg = $.extend({}, $.fn.toastr.defaults, options || $that.$el.data('toastr'));
            });
            var $toastr = $('.toastr');
            if ($toastr.length == 0) {
                $toastr = $('<div class="toastr">').appendTo($('body'));
            }
            that.$toastr = $toastr;
            bindEvent(that);
        }

        Toastr.prototype.show = function (msg, type) {
            var that = this;
            console.log('show');
            console.log(that.$el);
            that.$toastr.prop('class', 'toastr')
                .html(msg || that.cfg.msg)
                .addClass(type || that.cfg.type)
                .addClass('active');
        };

        return Toastr;
    })();

    $.fn.toastr = function (options) {
        var instance = this.data('toastr');
        if (!instance) {
            return this.each(function () {
                return $(this).data('toastr', new Toastr(this, options));
            });
        }
        if (options === true) return instance;

        if ($.type(options) === 'string') instance[options]();
    };

    $.fn.toastr.defaults = {
        msg: '成功',
        type: 'normal' //'normal', 'info', 'success', 'warning', 'danger'
    };

    $(function () {
        return new Toastr($('[data-toastr]'));
    });

})(jQuery, window, document);