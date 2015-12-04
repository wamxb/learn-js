var IMYUAN;
IMYUAN || (IMYUAN = {});

(function ($) {

    $.fn.extend({
        returntop: function () {
            if (this[0]) {
                var _this = this.click(function () {
                        $("html, body").animate({
                            scrollTop: 0
                        }, 120);
                    }),
                    timer = null;
                $(window).bind("scroll", function () {
                    var scrollTop = $(document).scrollTop(),
                        windowH = $(window).height();
                    0 < scrollTop ? _this.css("bottom", "200px") : _this.css("bottom", "-200px");
                    $.isIE6() && (_this.hide(), clearTimeout(timer),
                        timer = setTimeout(function () {
                            _this.show();
                            clearTimeout(timer)
                        }, 1E3),
                        _this.css("top", scrollTop + windowH - 125));
                });
            }
        }

    })
})(jQuery);
(function (a) {

    a("body")('<a class="close" href="javascript:;"></a>');

})(jQuery);

(function ($) {
    $("#returnTop").returntop();
})(jQuery);
  