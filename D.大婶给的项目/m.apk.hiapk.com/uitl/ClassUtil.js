var ClassUtil;
ClassUtil || (ClassUtil = {}), function () {
    function t(e) {
        function n() {
        }

        if (e == null)throw TypeError();
        if (Object.create)return Object.create(e);
        var t = typeof e;
        if (t !== "object" && t !== "function")throw TypeError();
        return n.prototype = e, new n
    }

    function r(e, r, i, s) {
        return r.prototype = t(e.prototype), r.prototype.constructor = r, i && n(r.prototype, i), s && n(r, s), r
    }

    function i(e) {
        throw e ? new Error(e + " abstract method!") : new Error("Abstract method!")
    }

    var n = function () {
        for (var e in{toString: null})return function (t) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (typeof t == "function")Object.defineProperties(t, r); else for (var i in r)t[i] = r[i]
            }
            return t
        };
        return function (n) {
            for (var r = 1; r < arguments.length; r++) {
                var i = arguments[r];
                for (var s in i)n[s] = i[s];
                for (var o = 0; o < t.length; o++)s = t[o], i.hasOwnProperty(s) && (n[s] = i[s])
            }
        };
        var t
    }();
    Function.prototype.extend = function (e, t, n) {
        return r(this, e, t, n)
    }, ClassUtil.inherit = t, ClassUtil.extend = n, ClassUtil.abstractMethod = i
}();