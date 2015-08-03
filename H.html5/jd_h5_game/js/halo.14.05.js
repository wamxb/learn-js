var halo = function () {
    var version = "20140624",
        Sup = {
            length: 0
        },
        c = {},
        d = true,
        path = "/wx/js/halo.14.03/",
        host = "http://static.paipaiimg.com",
        g = "/c/",
        h = true,
        Sup1 = function () {
        },
        Base = function () {
        };
    Sup1.prototype = Sup,
        Base.prototype = new Sup1;
    var base = new Base,
        l = function (b, c) {
            var d = document.createElement("script");
            d.onload = function () {
                "function" == typeof c && c("success")
            }, d.onerror = function () {
                "function" == typeof c && c("error")
            }, d.onabort = function () {
                "function" == typeof c && c("abort")
            }, d.type = "text/javascript", d.src = h ? host + g + "=" + b + "?v=" + version : host + path + b + ".js?v=" + version, document.head.appendChild(d)
        },
        on = function (obj, evtType, fn, boolean) {
            var fun = o.set(obj, evtType, fn);
            evtType = uievent(evtType);
            obj.addEventListener(evtType, fun, boolean);
        },
        off = function (a, b, c, d) {
            if ("undefined" == typeof c)o.del(a, b); else {
                var e = o.get(a, b, c, "remove_cb");
                b = uievent(b), a.removeEventListener(b, e, d)
            }
        },
        o = function () {
            var a = {},
                set = function (obj, evtType, fn) {
                    var type = obj.getAttribute("haloEV");
                    if (!type) {
                        type = "pm_" + (new Date).getTime();
                        obj.setAttribute("haloEV", type);
                    }
                    a[type] = a[type] || {};
                    a[type][evtType] = a[type][evtType] || {
                        pm_cb: [],
                        cb: []
                    };
                    a[type][evtType].cb.push(fn);
                    if (Sup.uievent && Sup.uievent[evtType]) {
                        var g = function (a) {
                            Sup.uievent[evtType][0].call(this, touches(a), fn)
                        };
                    } else {
                        var g = function (a) {
                            fn.call(this, touches(a))
                        };
                    }
                    a[type][evtType].pm_cb.push(g);
                    return g;
                },
                get = function (b, c, d, e) {
                    var f = b.getAttribute("haloEV");
                    if (f && a[f] && a[f][c]) {
                        for (var g = 0, h = a[f][c], i = h.cb.length; i > g; ++g)if (h.cb[g] == d) {
                            var j = h.pm_cb[g];
                            return e && (delete h.cb[g], delete h.pm_cb[g]), j
                        }
                        return d
                    }
                },
                del = function (b, c) {
                    var d = b.getAttribute("haloEV"),
                        e = uievent(c);
                    if (d && a[d] && a[d][c]) {
                        for (var f = 0, g = a[d][c], h = g.cb.length; h > f; ++f) {
                            b.removeEventListener(e, g.pm_cb[f], false);
                            b.removeEventListener(e, g.pm_cb[f], true);
                        }
                    }
                },
                f = {set: set, get: get, del: del};
            return f
        }(),
        uievent = function (a) {
            if (Sup.uievent && Sup.uievent[a])return Sup.uievent[a][1];
            if (!("ontouchstart"in window)) {
                if ("touchstart" == a)return "mousedown";
                if ("touchend" == a)return "mouseup";
                if ("touchmove" == a)return "mousemove"
            }
            return a
        },
        touches = function (event) {
            if (!("ontouchstart" in window)) {
                event.touches = event.targetTouches = [{
                    pageX: event.clientX,
                    pageY: event.clientY,
                    target: event.target
                }];
            }
            return event;
        },
        webkitPrefix = function () {
            var div = document.createElement("div");
            div.style.cssText = "-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;";
            return div.style.webkitTransition ? "-webkit-" : div.style.MozTransition ? "-moz-" : div.style.oTransition ? "-o-" : div.style.msTransition ? "-ms-" : "";
        }(),
        stylesheet = function () {
            function b(b) {
                for (var c = a, d = b.split("\r\n"), e = c.cssRules ? c.cssRules.length : 0, f = 0; f < d.length; ++f)c.insertRule(d[f], e++);
                return e
            }

            var a = function () {
                var a = document.getElementsByTagName("head")[0], b = document.createElement("style");
                return b.type = "text/css", a.appendChild(b), document.styleSheets[document.styleSheets.length - 1]
            }();
            return {add: b}
        }(),
        addClass = function (a, b) {
            var c = a.className, d = new RegExp("(^" + b + "\\s+)|(\\s+" + b + "\\s+)|(\\s+" + b + "$)|(^" + b + "$)", "g");
            if (c) {
                if (d.test(c))return;
                a.className = c + " " + b
            } else a.className = b
        },
        removeClass = function (a, b) {
            var c = a.className, d = new RegExp("(^" + b + "\\s+)|(\\s+" + b + "\\s+)|(\\s+" + b + "$)|(^" + b + "$)", "g");
            c = c.replace(d, function (a, b, c) {
                return c ? " " : ""
            }), a.className = c
        },
        hasClass = function (a, b) {
            var c = a.className, d = new RegExp("(^" + b + "\\s+)|(\\s+" + b + "\\s+)|(\\s+" + b + "$)|(^" + b + "$)", "g");
            return d.test(c);
        };
    Sup.on = on,
        Sup.off = off,
        Sup.removeClass = removeClass,
        Sup.addClass = addClass,
        Sup.hasClass = hasClass,
        Sup.stylesheet = stylesheet.add,
        Sup.webkit = webkitPrefix;
    var config = function (opt) {
            if (typeof opt.wait != "undefined") {
                d = !!opt.wait;
            }
            path = opt.path || path;
            opt.hasOwnProperty("combo") && (h = opt.combo);
            opt.hasOwnProperty("host") && (host = opt.host);
            opt.hasOwnProperty("version") && (version = opt.version);
            return halo
        },
        /**
         * halo增加属性方法
         * @param name
         * @param property
         */
        add = function (name, property) {
            if (Sup[name]) {
                throw "this has existed!";
            } else {
                Sup[name] = property;
                ++Sup.length
            }
        },
        use = function () {
            function q() {
                g == f ? j ? i(Sup) : base.ready(Sup) : setTimeout(q, 500)
            }

            for (var arg = arguments, f = 0, g = 0, i = function () {
            }, j = d, m = "", n = 0, o = arg.length; o > n; ++n) {
                var p = arg[n];
                if ("string" != typeof p) {
                    if ("function" != typeof p)continue;
                    break
                }
                if (++f, Sup[p])++g; else {
                    if (c[p])continue;
                    c[p] = p, h ? m += "," + path + p + ".js" : function (a) {
                        l(a, function () {
                            ++g
                        })
                    }(p)
                }
            }
            return !!h && !!m && l(m.replace(/^\,/, ""), function () {
                g = f
            }), "function" == typeof arg[n] && (i = arg[n], "undefined" != typeof arg[n + 1] && (j = !!arg[n + 1])), j || (base.onready = function (a) {
                base.ready = "function" == typeof a ? a : function () {
                }
            }, i(base)), q(), halo
        };
    return {add: add, use: use, config: config, on: on, off: off, stylesheet: stylesheet.add}
}();
/*  |xGv00|d91bd1f76f4abfc9539d71cb4b99635f */