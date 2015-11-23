+(function ($, window, document, undefined) {

    var Toastr = (function () {
        function Toastr(element, options) {
            var that = this;
            that.$el = $(element);
            that.cfg = $.extend({}, $.fn.toastr.defaults, options || that.$el.data('toastr'));
            console.log(that.cfg);
            var $toastr = $('.toastr');
            if ($toastr.length == 0) {
                $toastr = $('<div class="toastr">').appendTo($('body'));
            }
            that.$toastr = $toastr;
            that.bindEvent();
        }

        Toastr.prototype.show = function (msg, type) {
            var that = this;
            console.log('show');
            console.log(that);
            that.$toastr.prop('class', 'toastr')
                .html(msg || that.cfg.msg)
                .addClass(type || that.cfg.type)
                .addClass('active');
        };

        Toastr.prototype.bindEvent = function () {
            var that = this;
            $(document).on('click', that.$el, function () {
                that.show();
            });
            that.$toastr.on('animationend webkitAnimationEnd oAnimationEnd', function () {
                that.$toastr.prop('class', 'toastr');
            });
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