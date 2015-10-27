"use strict";
Function.prototype.bind || (Function.prototype.bind = function (context) {
    var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        fn = function () {
        },
        bind = function () {
            return self.apply(this instanceof fn && context ? this : context, args.concat(Array.prototype.slice.call(arguments)))
        };
    fn.prototype = this.prototype;
    bind.prototype = new fn;
    return bind;
});
!(function (win, undefined) {
    var base = {
        vendor: function () {
            var transform,
                vendors = ["t", "webkitT", "MozT", "msT", "OT"],
                _elementStyle = document.createElement("_").style,
                i = 0,
                l = vendors.length;
            for (; i < l; i++) {
                transform = vendors[i] + "ransform";
                if (transform in _elementStyle) {
                    return vendors[i].substr(0, vendors[i].length - 1);
                }
            }
            return false;
        }(),
        prefixStyle: function (style) {
            if (base.vendor === false) return false;
            if (base.vendor === '') return style;
            // WebkitTransform
            return base.vendor + style.charAt(0).toUpperCase() + style.substr(1);
        },
        extend: function (obj1, obj2) {
            for (var o in obj2) {
                obj1[o] = obj2[o];
            }
            return obj1;
        },
        banduRand: function (low, high) {
            return Math.random() * (1 + high - low) + low;
        }
    };

    win.base = base;
})(window);