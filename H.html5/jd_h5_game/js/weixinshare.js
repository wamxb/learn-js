halo.use(function (a) {
    console.log('a', a);
    var _state = "stop",
        c = "",
        startX = 0,
        startY = 0,
        f = 0,
        g = 0,
        distanceX = 0,
        distanceY = 0,
        minDistanceX = 10,
        minDistanceY = 10,
        l = 50,
        m = 500,
        startTime = 0,
        moveTime = 0,
        p = 500;
    if ("ontouchstart"in document) {
        var eventStart = "touchstart",
            eventEnd = "touchend",
            eventMove = "touchmove";
    } else {
        var eventStart = "mousedown",
            eventEnd = "mouseup",
            eventMove = "mousemove";
    }
    document.body.addEventListener(eventStart, function (event) {
        _state = "start";
        c = "";
        f = 0;
        g = 0;
        distanceX = 0;
        distanceY = 0;
        startTime = (new Date).getTime();
        if ("touchstart" == eventStart) {
            var touches = event.changedTouches || event.targetTouches,
                touche = touches[0];
            startX = touche.pageX;
            startY = touche.pageY;
        } else {
            startX = event.clientX;
            startY = event.clientY;
        }
    }, true);
    document.body.addEventListener(eventMove, function (event) {
        if ("start" == _state || "move" == _state) {
            var endX = 0, endY = 0;
            if ("touchstart" == eventStart) {
                var touches = event.changedTouches || event.targetTouches,
                    touche = touches[0];
                distanceX = touche.pageX - startX;
                distanceY = touche.pageY - startY;
                endX = Math.abs(distanceX);
                endY = Math.abs(distanceY);
            } else {
                endX = Math.abs(event.clientX - startX);
                endY = Math.abs(event.clientY - startY);
            }
            if (endX > minDistanceX || endY > minDistanceY) {
                c = _state;
                _state = "move"
            }
            f = endX;
            g = endY;
            moveTime = (new Date).getTime();
        }
    }, true);
    document.body.addEventListener(eventEnd, function () {
        c = _state;
        _state = "stop";
    }, true);
    document.body.addEventListener("touchcancel", function () {
        c = _state;
        _state = "stop";
    }, true);
    var transitionEnd = function () {
            switch (a.webkit) {
                case"-webkit-":
                    return "webkitTransitionEnd";
                case"-ms-":
                    return "MSTransitionEnd";
                case"-o-":
                    return "oTransitionEnd";
                default:
                    return "transitionend"
            }
        }(),
        animationEnd = function () {
            switch (a.webkit) {
                case"-webkit-":
                    return "webkitAnimationEnd";
                case"-ms-":
                    return "MSAnimationEnd";
                case"-o-":
                    return "oAnimationEnd";
                default:
                    return "animationend"
            }
        }(),
        animationStart = function () {
            switch (a.webkit) {
                case"-webkit-":
                    return "webkitAnimationStart";
                case"-ms-":
                    return "MSAnimationStart";
                case"-o-":
                    return "oAnimationStart";
                default:
                    return "animationstart"
            }
        }(),
    //  重复
        animationIteration = function () {
            switch (a.webkit) {
                case"-webkit-":
                    return "webkitAnimationIteration";
                case"-ms-":
                    return "MSAnimationIteration";
                case"-o-":
                    return "oAnimationIteration";
                default:
                    return "animationiteration"
            }
        }(),
        uievent = {
            fingermove: [function (event, c) {
                event.preventDefault();
                "move" == _state && c.call(this, event)
            }, eventMove],
            flick: [function (a, b) {
                "start" == c && b.call(this, a)
            }, eventEnd],
            gesture_left: [function (a, b) {
                f >= g && -1 * l >= distanceX && m >= moveTime - startTime && b.call(this, a)
            }, eventEnd],
            gesture_right: [function (a, b) {
                f >= g && distanceX >= l && m >= moveTime - startTime && b.call(this, a)
            }, eventEnd],
            gesture_up: [function (a, b) {
                g >= f && -1 * l >= distanceY && m >= moveTime - startTime && b.call(this, a)
            }, eventEnd],
            gesture_down: [function (a, b) {
                g >= f && distanceY >= l && m >= moveTime - startTime && b.call(this, a)
            }, eventEnd],
            release: [function (a, b) {
                ("move" == c || "start" == c) && b.call(this, a)
            }, eventEnd],
            forcerelease: [function (a, b) {
                ("move" == c || "start" == c) && b.call(this, a)
            }, "touchcancel"],
            hold: [function (a, c) {
                var d = this, e = startTime;
                setTimeout(function () {
                    e == startTime && "stop" != _state && c.call(d, a)
                }, p)
            }, eventStart],
            dblclick: [function (a, b) {
                y() && b.call(this, a)
            }, eventEnd],
            transitionend: [function (a, b) {
                b.call(this, a)
            }, transitionEnd],
            animationend: [function (a, b) {
                b.call(this, a)
            }, animationEnd],
            animationstart: [function (a, b) {
                b.call(this, a)
            }, animationStart],
            animationiteration: [function (a, b) {
                b.call(this, a)
            }, animationIteration],
            // 设置最小值
            setFingerMove: function (a, b) {
                a = a || minDistanceX;
                b = b || minDistanceY;
                minDistanceX = a;
                minDistanceY = b;
            }
        },
        y = function () {
            var a = 0;
            return function () {
                if ("start" == c) {
                    var startTime = (new Date).getTime();
                    return 500 >= startTime - a ? (a = 0, true) : (a = startTime, false)
                }
            }
        }();
    halo.add("uievent", uievent)
});
/*  |xGv00|d8b46c93d503fba4f80a2a441979b7ba */
halo.use(function (a) {
    var b = a.webkit, c = function () {
        a.stylesheet("@" + b + "keyframes loading{0%{" + b + "transform:rotate(0deg);}100%{" + b + "transform:rotate(360deg);}}");
        var c = document.createElement("div"), d = document.createElement("div"), e = document.createElement("div"), f = document.createElement("p");
        c.style.cssText = "position:fixed; left:0; top:0; right:0; bottom:0; background-color:transparent; z-index:9;", d.style.cssText = "position:fixed; width:100px; height:100px; border-radius:2px; background-color:rgba(0,0,0,0.5); color:rgba(255,255,255,.8); margin:-50px 0 0 -50px; left:50%; top:50%; -webkit-backface-visibility:hidden;", e.style.cssText = "position:absolute; background:url(data:image/png;base64,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) 0 0 no-repeat; background-size:100%; width:50px; height:50px; left:50%; top:50%; margin:-25px 0 0 -25px; " + b + "animation:loading 1.2s linear infinite;", f.style.cssText = "margin:0; padding:0; text-align:center; width:80px; position:absolute; bottom:10px; left:50%; margin:0 0 0 -40px; line-height:18px; white-space:nowrap", c.addEventListener("touchstart", function (a) {
            a.preventDefault()
        }, false);
        var g = function () {
            var a = .5;
            if ("string" == typeof arguments[0]) {
                var b = arguments[0];
                a = "undefined" == typeof arguments[1] || arguments[1] ? a : 0
            } else a = "undefined" == typeof arguments[0] || arguments[0] ? a : 0;
            var b = "string" == typeof arguments[0] ? arguments[0] : "";
            b && (e.style.marginTop = "-35px", f.innerHTML = b), d.style.backgroundColor = "rgba(0,0,0," + a + ")", d.appendChild(e), d.appendChild(f), c.appendChild(d), document.body.appendChild(c)
        }, h = function () {
            c.parentNode && c.parentNode.removeChild(c)
        };
        return _o = {show: g, hide: h}
    }(), d = function () {
        var d = function () {
            var c = arguments[0], d = arguments[1], f = arguments[2], g = true;
            if ("string" == typeof c) {
                if (1 == arguments.length)g = false; else if (2 == arguments.length || 3 == arguments.length) {
                    var h = arguments.length - 1;
                    "undefined" != typeof arguments[h] && "object" != typeof arguments[h] && (g = !!arguments[h])
                } else arguments.length > 3 && (g = !!arguments[4]);
                var i = document.createElement("div"), j = document.createElement("div"), k = document.createElement("div"), l = document.createElement("div"), m = document.createElement("p"), n = document.createElement("div"), h = "display:block; position:absolute; width:0; height:0; overflow:hidden; border:5px solid transparent;", o = document.createElement("div"), p = document.createElement("div"), q = document.createElement("div");
                return i.style.cssText = "position:fixed; left:0; top:0; right:0; bottom:0; background-color:rgba(0,0,0,.8); z-index:9; " + a.webkit + "transition:opacity linear .6s;", j.style.cssText = "position:absolute; left:30px; right:30px; top:50%; height:auto; " + b + "transform:translate3d(0,-50%,0); background-color:#fff; color:rgba(0,0,0,.8); font-size:14px;", k.style.cssText = "position:relative; padding:8px; line-height:18px; text-align:center; font-size:12px; border-bottom:1px solid rgba(0,0,0,.2); height:80px;", m.style.cssText = "padding:8px; margin:0; position:relative; top:50%; " + b + "transform:translate3d(0,-50%,0);", l.style.cssText = "position:relative; height:48px;", n.style.cssText = "position:absolute; width:10px;height:10px; overflow:hidden; background-color:#A19A9A; top:8px; right:8px; overflow:hidden", o.style.cssText = "position:absolute; height:48px; left:0; right:50%; top:0; bottom:0; text-align:center; line-height:48px;", p.style.cssText = "position:absolute; height:48px; top:0; bottom:0; left:50%; right:0; border-left:1px solid rgba(0,0,0,.2); text-align:center; line-height:48px;", q.style.cssText = "position:absolute; height:48px; top:0; bottom:0; left:0; right:0; text-align:center; line-height:48px;", i.appendChild(j), j.appendChild(k), j.appendChild(l), k.appendChild(m), g && (j.appendChild(n), n.innerHTML = '<i style="' + h + ' border-top-color:#fff; left:0; top:-1px;"></i>' + '<i style="' + h + ' border-right-color:#fff; right:-1px; top:0;"></i>' + '<i style="' + h + ' border-bottom-color:#fff; left:0; bottom:-1px;"></i>' + '<i style="' + h + ' border-left-color:#fff; left:-1px; top:0;"></i>', a.on(n, "touchend", function () {
                    e(i)
                })), m.innerHTML = c, "object" != typeof d ? j.removeChild(l) : "object" != typeof f ? (q.innerHTML = d.text || decodeURIComponent("%E7%A1%AE%E5%AE%9A"), a.on(q, "touchend", function (a) {
                    a.preventDefault(), a.stopPropagation(), "function" == typeof d.cb && d.cb(), ("undefined" == typeof d.close || d.close) && e(i)
                }), !d.color || (q.style.color = d.color), l.appendChild(q)) : (o.innerHTML = d.text || decodeURIComponent("%E5%8F%96%E6%B6%88"), a.on(o, "touchend", function (a) {
                    a.preventDefault(), a.stopPropagation(), "function" == typeof d.cb && d.cb(), ("undefined" == typeof d.close || d.close) && e(i)
                }), !d.color || (o.style.color = d.color), p.innerHTML = f.text || decodeURIComponent("%E7%A1%AE%E5%AE%9A"), a.on(p, "touchend", function (a) {
                    a.preventDefault(), a.stopPropagation(), "function" == typeof f.cb && f.cb(), ("undefined" == typeof f.close || f.close) && e(i)
                }), !f.color || (p.style.color = f.color), l.appendChild(p), l.appendChild(o)), document.body.appendChild(i), i
            }
        }, e = function (a) {
            a.style.opacity = 0, setTimeout(function () {
                a.parentNode.removeChild(a)
            }, 600)
        }, f = {show: d, hide: e, loading: c};
        return f
    }();
    halo.add("msgbox", d)
});
/*  |xGv00|6b33edae4d87fbe97cf08189f0ce90e1 */
halo.use(function () {
    var jsonp = function (arg) {
        var script = document.createElement("script"),
            hasLoaded = false,
            typeErr = true,
            isTimeout = false;
        script.type = "text/javascript", script.onload = function () {
            if (!isTimeout) {
                hasLoaded = true;
                try {
                    document.head.removeChild(script)
                } catch (a) {
                }
                setTimeout(function () {
                    typeErr && abort("parseerror")
                }, 100)
            }
        };
        var parameter = "_=" + (new Date).getTime();
        if ("object" == typeof arg.data)for (var i in arg.data)parameter += "&" + i + "=" + arg.data[i];
        arg.jsonp = "string" == typeof arg.jsonp ? arg.jsonp : "callback", arg.jsonpCallback = "string" == typeof arg.jsonpCallback ? arg.jsonpCallback : "HALO_" + ++jr + (new Date).getTime(), parameter += "&" + arg.jsonp + "=" + arg.jsonpCallback, "function" != typeof arg.callback && (arg.callback = function () {
        });
        var callback = function (a) {
            isTimeout || (typeErr = false, arg.callback(a))
        };
        eval(arg.jsonpCallback + "=callback;");
        var url = arg.url;
        url += (url.indexOf("?") < 0 ? "?" : "&") + parameter, script.src = url;
        var abort = function (err) {
            err = err || "abort", eval(arg.jsonpCallback + '("' + err + '");');
            try {
                document.head.removeChild(script)
            } catch (e) {
            }
        };
        timeout = parseInt(arg.timeout), isNaN(timeout) || setTimeout(function () {
            hasLoaded || abort(), isTimeout = true
        }, timeout), document.head.appendChild(script);
        var o = {};
        o.abort = abort;
        return o;
    }, jr = 0;
    halo.add("jsonp", jsonp)
});
/*  |xGv00|33a7c36b5e52ab8d7660d78ca95aab10 */
(function (win) {
    var a = {};
    var Loader = function (arr) {
        this._source = [];
        this.fails = [];
        this._index = 0;
        this.failed = 0;
        this.loaded = 0;
        this.percent = "0%";
        this._init(arr);
        this.total = this._source.length;
        var self = this;
        setTimeout(function () {
            self._load()
        }, 25)
    };
    Loader.prototype = {
        _rsuffix: /\.(js|css|mp3)$/,
        _init: function (obj) {
            if (typeof obj === "string") {
                this._source.push(obj);
            } else {
                if (Array.isArray(obj)) {
                    this._source = obj;
                } else {
                    throw"Loader Error: arguments must be String|Array."
                }
            }
            console.log('this._source:' + this._source);
        },
        _get_load_method: function (g) {
            console.log('g: ' + g);
            var f = (f = g.match(this._rsuffix)) ? f[1] : "img";
            console.log('_get_load_method:' + f);
            return "_" + f
        },
        _js: function (h, i) {
            var self = this;
            var script = document.createElement("script");
            script.onload = function () {
                i && i.call(self, true, h)
            };
            script.onerror = function () {
                i && i.call(self, false, h)
            };
            script.type = "text/javascript";
            script.src = h;
            document.head.appendChild(script)
        },
        _css: function (g, h) {
            var f = this;
            var i = document.createElement("link");
            i.type = "text/css";
            i.rel = "stylesheet";
            i.href = g;
            document.head.appendChild(i);
            h && h.call(f, true, g)
        },
        _img: function (h, i) {
            var g = this;
            var f = new Image();
            f.onload = function () {
                a[h] = f;
                i && i.call(g, true, h)
            };
            f.onerror = function () {
                i && i.call(g, false, h)
            };
            f.src = h
        },
        _mp3: function (f, g) {
        },
        _load: function () {
            if (this._index == this._source.length) {
                return this._onend()
            }
            var f = this._source[this._index];
            if (!f) {
                return
            }
            var g = this._get_load_method(f);
            this[g](f, this._loadend);
            this._onloadstart(f)
        },
        _loadend: function (f, g) {
            if (f) {
                ++this.loaded
            } else {
                ++this.failed;
                this.fails.push(g)
            }
            ++this._index;
            this.percent = Math.ceil(this._index / this.total * 100) + "%";
            this._onloadend(f, g);
            this._load()
        },
        _onloadstart: function () {
        },
        _onloadend: function () {
        },
        _onend: function () {
        },
        loadstart: function (f) {
            if (typeof f === "function") {
                this._onloadstart = f
            }
            return this;
        },
        loadend: function (callBack) {
            if (typeof callBack === "function") {
                this._onloadend = callBack
            }
            return this;
        },
        complete: function (f) {
            if (typeof f === "function") {
                this._onend = f
            }
            return this
        },
        image: function (g, h) {
            if (arguments.length == 1) {
                if (undefined == g) {
                    return a
                }
                var f = a[g];
                if (f) {
                    return f
                }
                f = new Image();
                f.src = g;
                return f
            }
            if (arguments.length == 2) {
                a[g] = h
            }
        }
    };
    var loadermsk = function (f, bgColor, h) {
        var style = document.createElement("style");
        style.innerHTML = "@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-moz-keyframes loading{0%{-moz-transform:rotate(0deg);}100%{-moz-transform:rotate(360deg);}}@-o-keyframes loading{0%{-o-transform:rotate(0deg);}100%{-o-transform:rotate(360deg);}}@-ms-keyframes loading{0%{-ms-transform:rotate(0deg);}100%{-ms-transform:rotate(360deg);}}@keyframes loading{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}" + ".mp_loading{position:absolute; width:100%; height:100%; overflow:hidden; background-color:#E44B46; left:0; top:0; -webkit-transform-style:preserve-3d; z-index:1;}" + ".mp_loading_clip{position:absolute; left:50%; top:50%; width:60px; height:60px; margin:-30px 0 0 -30px; overflow:hidden;  -webkit-animation:loading 1.2s linear infinite; -moz-animation:loading 1.2s linear infinite; -o-animation:loading 1.2s linear infinite; -ms-animation:loading 1.2s linear infinite; animation:loading 1.2s linear infinite;}" + ".mp_loading_bar{position:absolute; left:0; top:0; width: 54px;height: 54px; border-radius:50px; overflow:hidden; clip: rect(0px,36px,70px,0); background:transparent; border:3px solid #fff; -webkit-mask:-webkit-gradient(linear,0 0,0 100%,from(rgba(255,255,255,1)),to(rgba(255,255,255,0)));}" + ".mp_loading_txt{width: 100px;height: 30px;line-height: 30px;position: absolute;left: 50%;top: 50%;margin-left: -50px;margin-top: -15px;text-align: center;color: #fff;}";
        document.getElementsByTagName("head")[0].appendChild(style);

        var doc = document,
            arg = arguments,
            _bgColor = (typeof bgColor == "string") ? bgColor : "#E44B46";

        var $loading = doc.getElementById("MP_loading"),
            $precent = doc.getElementById("MP_precent");
        if (!$loading) {
            $loading = doc.createElement("div");
            $loading.className = "mp_loading";
            $loading.innerHTML = '<div class="mp_loading_clip"><div class="mp_loading_bar" style="border-color:"' + _bgColor + "></div></div>";
            $precent = doc.createElement("txt");
            $precent.className = "mp_loading_txt";
            $loading.calssName = "mp_loading";
            $loading.style.backgroundColor = _bgColor;
            $loading.appendChild($precent);
            document.body.appendChild($loading);
        }

        this._loadDom = $loading;
        this._txtDom = $precent;
        var self = this;
        var lastArg = arg[arg.length - 1];
        lastArg = typeof lastArg == "function" ? lastArg : function () {
        };
        new Loader(f).loadend(function (p) {
            self._txtDom.innerHTML = this.percent;
        }).complete(function () {
            self._loadDom.style.display = "none";
            lastArg.apply(self);
        })
    };
    if (typeof(halo) == "undefined") {
        // 如果缺少，就把方法扔给window
        throw ("缺少依赖库 halo.js");
        win.loader = Loader;
        win.loadermsk = loadermsk;
    }
    var loader = function (arr) {
        return new Loader(arr);
    };
    halo.add("loader", loader);
    halo.add("loadermsk", loadermsk)
})(window);
/*  |xGv00|4a35a5d98ef0eda28baa1a572169df79 */
halo.add("randomsort", function (a, b) {
    if (a.length <= 0)return a;
    b = parseInt(b) || 0;
    var c = [], d = [], e = a.length, f = e;
    0 >= b && (b = e);
    for (var g = 0; e > g; ++g)c[g] = g;
    for (; f > 0 && b;) {
        var h = parseInt(Math.random() * f);
        d[e - f] = a[c.splice(h, 1)], --f, --b
    }
    return d
});
/*  |xGv00|1b5793241cb9b5022865827e5f9dcd8e */
halo.use(function (a) {
    var b = a.webkit, c = function () {
        var g, h, i, j, k, c = document.createElement("div"), d = document.createElement("i"), e = document.createElement("div"), f = "data:image/png;base64,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";
        return e.style.cssText = "position:absolute; width:100%; height:100%; overflow:hidden; left:0; top:0; font-size:14px; z-index:9999; background-color:#bd1f26; display:none;", c.style.cssText = "position:absolute; left:50%; top:50%; width:250px; height:150px; margin:-75px 0 0 -125px; text-align:center; color:#ffffff;", d.style.cssText = "position:relative; display:block; width:74px; height:110px; background:url(" + f + ") 0 0 no-repeat; background-size:100%; margin:0 auto; " + b + "transform:rotate(-90deg); " + b + "animation:TOUCH_DRAG_IPHONE 1.6s ease-in infinite;", a.stylesheet("@" + b + "keyframes TOUCH_DRAG_IPHONE{0%{" + b + "transform:rotate(-90deg);}25%{" + b + "transform:rotate(0deg);}50%{" + b + "transform:rotate(0deg);}75%{" + b + "transform:rotate(-90deg);}100%{" + b + "transform:rotate(-90deg);}}"), document.body.appendChild(e), e.appendChild(c), c.appendChild(d), g = document.createTextNode(decodeURIComponent("%E4%B8%BA%E4%BA%86%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BD%93%E9%AA%8C%EF%BC%8C%E8%AF%B7%E4%BD%BF%E7%94%A8%E7%AB%96%E5%B1%8F%E6%B5%8F%E8%A7%88")), c.appendChild(document.createElement("br")), c.appendChild(g), h = function (a, b, c) {
            "string" == typeof a && (e.style.background = a), "string" == typeof b && (d.style.backgroundImage = b), "string" == typeof c && (g.nodeValue = c)
        }, i = function () {
            e.style.display = "block", k.onshow && k.onshow()
        }, j = function () {
            k.onhide && k.onhide(), e.style.display = "none"
        }, k = {show: i, hide: j, set: h}
    }(), d = "onorientationchange"in window, e = document.documentElement.clientHeight, f = document.documentElement.clientWidth;
    d ? ("0" != window.orientation && c.show(), window.addEventListener("orientationchange", function () {
        "0" != window.orientation ? c.show() : c.hide()
    }, false)) : f > e && c.show(), window.addEventListener("resize", function () {
        e = document.documentElement.clientHeight, f = document.documentElement.clientWidth, d || (f > e ? c.show() : c.hide())
    }, false), halo.add("warn", c)
});
/*  |xGv00|c037661f42bfadded485a65a4b7a4db4 */
halo.add("browser", function () {
    var agent = function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf("Trident") > -1,
                presto: u.indexOf("Presto") > -1,
                webkit: u.indexOf("AppleWebKit") > -1,
                gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
                iphone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1,
                ipad: u.indexOf("iPad") > -1,
                webapp: u.indexOf("Safari") == -1,
                weixin: u.indexOf("MicroMessenger") > -1,
                qq: (/qq\/([\d\.]+)*/i).test(u) > -1
            }
        }(),
        version = function () {
            var u = navigator.userAgent,
                matchIndex = u.indexOf("Android");
            console.log('matchIndex', matchIndex);
            if (matchIndex > -1) {
                console.log(u.substring(matchIndex + 7, matchIndex + 11));
                console.log('navigator.userAgent', navigator.userAgent);
                var num = u.substring(matchIndex + 7, matchIndex + 11).replace(/[^0-9\.]/g, "");
                return parseFloat(num);
            }
            return ""
        }();
    return function (str) {
        if (typeof(str) != "string") return;
        str = str.toLowerCase();
        switch (str) {
            case 'ie':
                str = "trident";
                break;
            case 'opera':
                str = "presto";
                break;
            case 'firefox':
                str = "gecko";
                break;
            default :
                break;
        }

        if (agent.hasOwnProperty(str)) {
            if ("android" == str && agent[str]) {
                return version
            } else {
                return agent[str]
            }
        }
    }
}());
/*  |xGv00|98dfd4a07f1ae511c6aced73c49b1eff */
halo.add("request", function () {
    var a = window.location.href, b = a.indexOf("?") + 1, c = a.indexOf("#") > -1 ? a.indexOf("#") : a.length, d = a.substring(b, c), e = d.split("&"), f = {};
    if (d != a)for (i in e) {
        var g = e[i].split("=");
        f[g[0]] = g[1] || ""
    }
    return function (a) {
        return "string" == typeof a ? f[a] : f
    }
}());
/*  |xGv00|1820864ed078ce812127f50f17cae9bb */
halo.use(function (a) {
    halo.add("paipailogin", function () {
        function b(a) {
            var b = new RegExp("(^| )" + a + "(?:=([^;]*))?(;|$)"), c = document.cookie.match(b);
            return c ? c[2] ? unescape(c[2]) : "" : null
        }

        var c = navigator.userAgent.toLowerCase(), d = window.WeixinJSBridge;
        d || (d = c.match(/micromessenger/) ? true : false);
        var e = function () {
            return b("wg_skey") && b("wg_uin") || b("p_skey") && b("p_uin") || b("skey") && b("uin") ? true : false
        }, f = function () {
            if ("paipai.com" != window.location.host && window.location.host.indexOf(".paipai.com") < 0) {
                var b = "http://www.paipai.com/halo/paipai/wxlogin.html", c = window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/\/[^\/]*$/, "") + "/afterLogin.html", d = window.location.pathname, e = d.lastIndexOf("/"), f = d.length;
                d = d.substring(e + 1, f)
            } else var b = window.location.protocol + "//" + window.location.host + window.location.pathname;
            var g = a.request(), h = parseInt(g.wxlogin_ts) || 0, i = (new Date).getTime();
            if (3e4 > i - h)return alert("\u767b\u5f55\u5931\u8d25"), void 0;
            b += "?wxlogin_ts=" + i, "string" == typeof d && (b += "&s=" + d), "string" == typeof c && (b += "&ru=" + encodeURIComponent(c));
            for (var j in g)"wxlogin_ts" != j && "s" != j && (b += "&" + j + "=" + g[j]);
            window.location.href = "http://b.paipai.com/mlogin/tws64/m/wxv2/Login?appid=1&rurl=" + encodeURIComponent(b)
        }, g = document.createElement("div");
        g.style.cssText = "position:absolute; width:100%; height:100%; left:0; top:0; background-color:#fff; display:none;";
        try {
            document.domain = "paipai.com"
        } catch (h) {
        }
        if ("paipai.com" == document.domain)var i = "http://www.paipai.com/halo/paipai/afterLogin.html"; else var i = window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/\/[^\/]*$/, "") + "/afterLogin.html";
        i = encodeURIComponent(i), document.body.appendChild(g);
        var j = function () {
        };
        halo.afterPaipaiLogin = function (a, b) {
            g.style.display = "none", j(a, b), j = function () {
            }
        };
        var k = function (a) {
            "function" == typeof a && (j = a), g.innerHTML = '<iframe frameborder="0" scrolling="no" src="http://www.paipai.com/halo/paipai/login.html?v=' + (new Date).getTime() + "&ru=" + i + '" width="100%" height="100%"></iframe>', g.style.display = "block"
        }, l = function (b) {
            a.cookie.del("skey"), a.cookie.del("wg_skey"), a.cookie.del("p_skey"), a.cookie.del("uin"), a.cookie.del("wg_uin"), a.cookie.del("p_uin"), "paipai" == l.type ? k(b) : "wx" == l.type ? f() : d ? f() : k(b)
        };
        return l.isLogin = e, l
    }())
});
/*  |xGv00|658e9ab69dd58d4ea6ddbabbf9368580 */
halo.use(function () {
    function d() {
        "object" == typeof WeixinJSBridge && "function" == typeof WeixinJSBridge.invoke ? f() : document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", f, false) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", f), document.attachEvent("onWeixinJSBridgeReady", f))
    }

    function f() {
        WeixinJSBridge.on("menu:share:appmessage", g), WeixinJSBridge.on("menu:share:timeline", h)
    }

    function g() {
        var d, a = {};
        for (d in c)a[d] = b[d] || c[d];
        a.appid || delete a.appid, WeixinJSBridge.invoke("sendAppMessage", a, function (a) {
            i(a.err_msg)
        })
    }

    function h() {
        var d, a = {};
        for (d in c)a[d] = b[d] || c[d];
        a.appid || delete a.appid, b.useTitle || (a.title = b.desc), b.friendsDesc && (a.title = b.friendsDesc), WeixinJSBridge.invoke("shareTimeline", a, function (a) {
            i(a.err_msg)
        })
    }

    function i(a) {
        var c = a.indexOf("ok") >= 0 || a.indexOf("confirm") >= 0 ? "ok" : a.indexOf("cancel") >= 0 ? "cancel" : "fail";
        "function" == typeof b.cb && b.cb(c)
    }

    var e, b = {}, c = {link: "", img_url: "", desc: "", title: "", img_width: 80, img_height: 80, appid: ""};
    "complete" != document.readyState ? "uninitialized" == document.readyState || "loading" == document.readyState || "loaded" == document.readyState || "interactive" == document.readyState || "complete" == document.readyState ? (e = function () {
        if ("complete" != document.readyState) {
            var a = arguments;
            return setTimeout(function () {
                a.callee()
            }, 300), void 0
        }
        d()
    }, "interactive" == document.readyState && e(), document.addEventListener("DOMContentLoaded", function () {
        e()
    })) : !function () {
        setTimeout(function () {
            d()
        }, 1e3);
        var a = setInterval(function () {
            --b ? f() : clearInterval(a)
        }, 5e3), b = 10
    }() : d(), halo.add("weixinshare", function (a, c, d, e, f, g, h) {
        if ("object" == typeof a)b = a, b.img && (b.img_url = b.img, delete b.img), b.url && (b.link = b.url, delete b.url); else {
            if ("string" != typeof a)throw b = void 0, "url expect string type";
            b = {
                link: a,
                img_url: c || "",
                desc: e || "",
                title: d || "",
                img_width: f || 80,
                img_height: g || 80
            }, h && (b.appid = h)
        }
        return b
    })
});
/*  |xGv00|d1bbd4e6f5dca924c6960cdb374b38f9 */