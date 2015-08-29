(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    }
    else if (typeof define === "function" && define.cmd) {
        define(function () {
            return function (jq) {
                factory(jq);
            };
        });
    }
    else {
        factory(jQuery);
    }
}(function ($) {
    $.fn.extend({
        navSlider: function (opts) {
            var defaults = {
                curCls: 'current',
                line: 'line',
                marginLeft: 10
            };

            var cfg = $.extend(defaults, opts);

            return this.each(function () {
                var $nav = $(this),
                    licur = 'li.' + cfg.curCls,
                    $cur = $nav.find(licur),
                    $line = $nav.find('.' + cfg.line),
                    $anchor = $('a', $nav.children()),
                    curPosL = $cur.position().left + cfg.marginLeft,
                    curW = $cur.innerWidth(),
                    curIdx = $(licur, $nav).index();
                if ($line.length == 0) {
                    $line = $('<i class="' + cfg.line + '">');
                    $nav.append($line);
                }
                $line.css({'width': curW, 'left': curPosL});

                $nav.find('li').each(function (index) {
                    var $li = $(this);
                    var posL = $li.position().left + cfg.marginLeft,
                        w = $li.innerWidth();
                    $li.mouseenter(function () {
                        $line.stop()
                            .animate({'width': w, 'left': posL}, 250);
                        $li.addClass(cfg.curCls)
                            .siblings().removeClass(cfg.curCls);
                    });
                });
                $nav.mouseleave(function () {
                    $line.stop()
                        .animate({'width': curW, 'left': curPosL}, 250);
                    $anchor.parent(':eq(' + curIdx + ')').addClass(cfg.curCls)
                        .siblings().removeClass(cfg.curCls);
                });

            });
        }
    })
}));