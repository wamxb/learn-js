/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
    $.fn.appear = function (fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function () {

            var $this = $(this);

            //whether the element is currently visible
            $this.appeared = false;

            if (!fn) {

                //trigger the custom event
                $this.trigger('appear', settings.data);
                return;
            }

            var $win = $(window);

            //fires the appear event when appropriate
            var check = function () {

                //is the element hidden?
                if (!$this.is(':visible')) {

                    //it became hidden
                    $this.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var sl = $win.scrollLeft();
                var st = $win.scrollTop();
                var wh = $win.height();
                var ww = $win.width();

                var tw = $this.width();
                var th = $this.height();

                var o = $this.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;

                if (y + th + ay >= st &&
                    y <= st + wh + ay &&
                    x + tw + ax >= sl &&
                    x <= sl + ww + ax) {

                    //trigger the custom event
                    if (!$this.appeared) $this.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    $this.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function () {

                //mark the element as visible
                $this.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    $win.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) $this.one('appear', settings.data, modifiedFn);
            else $this.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            $win.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function (i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function () {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);