/**
 * HIPAGE制作时最佳尺寸是700X1200
 * 按钮属性为“data-share”点击可显示分享
 * 按钮属性为“data-gotopage”点击可到“index-1”页
 */
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
!function () {
    function _prefixStyle(style) {
        if (_vendor === false) return false;
        if (_vendor === '') return style;
        // WebkitTransform
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    var self = this,
        _vendor = function () {
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
        _transform = _prefixStyle("transform"),
        _transitionDuration = _prefixStyle("transitionDuration"),
        Hi = function (opt) {
            this.options = this._extend({
                direction: "Y",
                effect: "default",
                autoplay: true,
                range: 60,
                duration: .4,
                current: 0,
                change: false,
                mouse: true,
                keyup: true
            }, opt);
            this.current = this.options.current;
            this.touch = "ontouchend" in window;
            this.touching = false;
            this.animating = false;
            this.flag = false;
            this.moving = false;
            this.pageX;
            this.pageY;
            var slideOpt = {
                default: ["slide", "slide"],
                scale: ["slide", "scale"],
                fade: ["fade"],
                slide: ["slide"]
            };
            this.createEl();
            this.pages = this.$el.children;
            this.total = this.pages.length - 1;
            // 入场动画
            this.entrance = this[slideOpt[this.options.effect][0]].bind(this);
            // 出场动画
            this.exits = (this[slideOpt[this.options.effect][1]] || function () {
            }).bind(this);
            // 一屏的距离
            this.distance = 0;
            this._init();
            this._bindEvents();
            this._music();
            this._share();
            this._goto();
            this._wechat();
        };
    Hi.prototype = {
        constructor: Hi,
        version: "0.0.1",
        /**
         * 700*1200
         * todo this.$el.style.zoom = scale;
         * @private
         */
        _init: function () {
            // this.$el = ".pages"
            var wrapW = this.$el.clientWidth,
                wrapH = this.$el.clientHeight,
                pageD = this.distance = "X" === this.options.direction ? wrapW : wrapH,
                _current = this.current,
                _pages = this.pages,
            // 总共页数，从0开始 length-1
                _total = this.total,
                scale = 1,
                scaleW = wrapW / 360,
                scaleH = wrapH / 600;
            //debugger;
            scale = scaleH > scaleW ? scaleW : scaleH;
            scale > 2 && (scale = 2);
            //  取比例小的; 超过2，取2
            for (; _total >= 0; _total--) {
                if (_current === _total) {
                    this.options.autoplay && this._play(_pages[_total]);
                } else {
                    this.clearDuration(_pages[_total]);
                    this.entrance(_pages[_total], _current > _total ? -pageD : pageD);
                }
                _pages[_total].children[0].style.zoom = scale;
                // _total--;
            }
            document.body.scrollTop = 0;
            // !this.touch && this.$el.focus();
        },
        _goto: function () {
            var self = this, oGotopages = this.$el.querySelectorAll("[data-gotopage]");
            Array.prototype.forEach.call(oGotopages, function (el) {
                var index = +el.getAttribute("data-gotopage");
                index && el.addEventListener("click", function () {
                    self.animating || self.go2page(index - 1);
                }, false);
            });
        },
        _share: function () {
            var oShares = this.$el.querySelectorAll("[data-share]");
            if (oShares.length) {
                var div = document.createElement("div");
                div.className = "share";
                div.innerHTML = "请点击右上角，选择<br>【发送给朋友】或【分享好友圈】<br>分享给朋友";
                document.body.appendChild(div);
                div.addEventListener("click", function () {
                    div.style.display = "none";
                });
                Array.prototype.forEach.call(oShares, function (el) {
                    el.addEventListener("click", function () {
                        div.style.display = "block";
                    }, false);
                });
            }
        },
        _wechat: function () {
            /*            function d() {
             WeixinJSBridge.on("menu:share:appmessage", e);
             WeixinJSBridge.on("menu:share:timeline", f)
             }

             function e() {
             WeixinJSBridge.invoke("sendAppMessage", c, function () {
             })
             }

             function f() {
             WeixinJSBridge.invoke("shareTimeline", c, function () {
             })
             }

             var a = this, b = location.protocol + "//" + location.host + location.pathname.replace(/[^\/]+$/, ""), c = {
             img_url: b + "images/ico.png",
             img_width: 80,
             img_heigth: 80,
             link: location.href,
             title: a.options.title,
             desc: a.options.desc
             };
             "object" == typeof WeixinJSBridge && "function" == typeof WeixinJSBridge.invoke ? d() : document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", d, false) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", d), document.attachEvent("onWeixinJSBridgeReady", d))*/
        },
        _music: function () {
            function bindFn() {
                document.removeEventListener(eventType, bindFn, false);
                oAudio.paused && oAudio.play();
            }

            function control(event) {
                event.stopPropagation();
                return oAudio.paused ? oAudio.play() : oAudio.pause();
            }

            function addClass() {
                oDiv.classList.add(playClass);
            }

            function removeClass() {
                oDiv.classList.remove(playClass);
            }

            var oMusic = this.options.music;
            if (oMusic && oMusic.src) {
                var playClass = "playing",
                    eventType = "ontouchend" in document ? "touchstart" : "click",
                    oDiv = document.createElement("div"),
                    oAudio = document.createElement("audio"),
                    _color = oMusic.color || "#fff",
                    divClassName = "music " + (oMusic.position || "nw"),
                    svgStr = '<svg fill="' + _color + '" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64"><path d="M32.01 15.02c-9.39 0-17 7.61-17 17 0 9.388 7.61 17 17 17s17-7.612 17-17c0-9.39-7.612-17-17-17zm0 32c-8.285 0-15-6.716-15-15 0-8.284 6.715-15 15-15 8.283 0 15 6.716 15 15 0 8.284-6.717 15-15 15zm7.144-24.97c-.052-.007-.1-.03-.154-.03-.147 0-.284.035-.41.092l-9.677 1.88c-.082.016-.152.058-.227.092-.046.015-.09.032-.132.053-.017.01-.032.02-.048.033-.226.132-.388.344-.456.604-.004.012-.004.024-.007.036-.016.07-.043.135-.043.21v9.142c-1.057-.296-2.376-.125-3.584.58-2.02 1.182-2.95 3.384-2.074 4.917.875 1.534 3.223 1.82 5.242.64 1.646-.963 2.548-2.598 2.36-4.002.026-.09.056-.18.056-.28V25.815l8-1.554v7.902c-1.057-.296-2.376-.125-3.584.58-2.02 1.182-2.95 3.384-2.074 4.917.875 1.534 3.223 1.82 5.242.64 1.646-.963 2.548-2.598 2.36-4.002.026-.09.056-.18.056-.28v-11c0-.018-.01-.035-.01-.054 0-.037.014-.073.01-.11-.04-.467-.4-.78-.846-.803zM26.528 38.448c-1.01.59-2.065.654-2.357.143-.29-.512.292-1.405 1.303-1.996 1.01-.59 2.065-.654 2.356-.143.29.514-.292 1.406-1.302 1.997zm10-2c-1.01.59-2.065.654-2.357.143-.29-.512.292-1.405 1.303-1.996 1.01-.59 2.065-.654 2.356-.143.29.514-.292 1.406-1.302 1.997z"/></svg><span style="background-color:' + _color + '"></span>',
                    musicSrc = "images/" + oMusic.src;
                oDiv.className = divClassName;
                oDiv.innerHTML = svgStr;
                oAudio.src = musicSrc;
                // audio自身处理
                oAudio.addEventListener("play", addClass, false);
                oAudio.addEventListener("pause", removeClass, false);
                oDiv.addEventListener(eventType, control, false);
                oMusic.loop ? oAudio.loop = "loop" : oAudio.addEventListener("ended", removeClass, false);
                oMusic.autoplay && oAudio.play();
                document.body.appendChild(oDiv);
                document.addEventListener(eventType, bindFn, false);
            }
        },
        /**
         * todo 通过active设置动画元素
         * 设置动画标志，动画元素显示隐藏
         * @param oToPage 目标页面
         * @param oCurPage 当前页面
         * @private
         */
        _play: function (oToPage, oCurPage) {
            this.animating = true;
            setTimeout(function () {
                var toAnimateEls = oToPage.querySelectorAll(".animate"),
                    curAnimateEls = oCurPage && oCurPage.querySelectorAll(".animate");
                toAnimateEls && Array.prototype.forEach.call(toAnimateEls, function (el) {
                    el.style.display = "block";
                });
                curAnimateEls && Array.prototype.forEach.call(curAnimateEls, function (el) {
                    el.style.display = "none";
                });
                oCurPage && (oCurPage.style.zIndex = 0);
                this.animating = false;
            }.bind(this), 1e3 * this.options.duration);
        },
        _bindEvents: function () {
            var oWrap = this.$el,
                evnets = this.touch ? ["touchstart", "touchmove", "touchend", "touchcancel"] : ["mousewheel", "mousedown", "mousemove", "mouseup", "mousecancel", "keyup"],
                len = evnets.length;
            for (; len > 0;) {
                oWrap.addEventListener(evnets[--len], this, false);
            }
            window.addEventListener("orientationchange", this, false);
            window.addEventListener("resize", this, false);
        },
        extend: function (obj1, obj2) {
            for (var p in obj2) {
                obj1[p] = obj2[p];
            }
            return obj1;
        },
        createEl: function () {
            var oTmpl = document.getElementById("tmpl").innerHTML,
                oDiv = document.createElement("div");
            oDiv.className = "pages";
            oDiv.setAttribute("tabindex", 1);
            oDiv.innerHTML = oTmpl;
            oDiv.focus();
            document.body.appendChild(oDiv);
            this.$el = oDiv;
        },
        handleEvent: function (event) {
            var type = event.type;
            switch (type) {
                case "orientationchange":
                case "resize":
                    this._init(event);
                    break;
                case "touchstart":
                case "mousedown":
                    this.start(event);
                    break;
                case "touchmove":
                case "mousemove":
                    this.move(event);
                    break;
                case "mousewheel":
                    this.mousewheel(event);
                    break;
                case "keyup":
                    this.keyup(event);
                    break;
                case "touchend":
                case "touchcancel":
                case "mouseup":
                case "mousecancel":
                    this.end(event)
            }
        },
        play: function () {
            this._play(this.$current());
        },
        start: function (event) {
            if (this.touching || this.animating) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            this.touching = true;
            this.flag = null;
            this.moving = 0;
            var touch = "touchstart" === event.type ? event.touches[0] : event,
                distance = this.distance,
                entranceFn = this.entrance,
                $cur = this.$current(),
                $next = $cur.nextElementSibling,
                $pre = $cur.previousElementSibling;
            this.clearDuration($cur, $next, $pre);
            this.pageX = touch.pageX;
            this.pageY = touch.pageY;
            $cur.style.zIndex = 1;
            if ($next) {
                $next.style.zIndex = 2;
                entranceFn($next, distance);
            }
            if ($pre) {
                $pre.style.zIndex = 2;
                entranceFn($pre, -distance);
            }
        },
        $current: function () {
            return this.pages[this.current];
        },
        move: function (event) {
            event.preventDefault();
            if (this.touching && !this.animating) {
                var touch = "touchmove" === event.type ? event.touches[0] : event,
                    direction = this.options.direction,
                    distance = this.distance,
                    curIndex = this.current,
                    $cur = this.$current(),
                    $next = $cur.nextElementSibling,
                    $pre = $cur.previousElementSibling,
                    x = touch.pageX - this.pageX,
                    y = touch.pageY - this.pageY,
                    k = this.moving = "X" === direction ? x : y;
                return !this.flag && Math.abs(x - y) > 100 && (this.flag = x > y ? "X" : "Y"), $next && this.entrance($next, k + distance), $pre && this.entrance($pre, k - distance), 0 === curIndex && k > 0 || curIndex === this.total && 0 > k ? this.slide($cur, k / 4) : (this.exits($cur, k), void 0)
            }
        },
        end: function () {
            var b = this.moving,
                c = this.distance,
                d = this.options.range;
            this.entrance;
            var f = this.$current(), g = f.nextElementSibling, h = f.previousElementSibling;
            return this.touching = false, g && -d > b ? this.next() : h && b > d ? this.prev() : (this.duration(f, g, h), this.entrance(f, 0), h && this.entrance(h, -c), g && this.entrance(g, c), void 0)
        },
        slide: function (el, distance) {
            el.style[_transform] = "translate3d(" + ("Y" === this.options.direction ? "0," + distance + "px" : distance + "px,0") + ",0)"
        },
        fade: function (el, b) {
            var _distance = this.distance;
            el.style.opacity = 1 - Math.abs(b / _distance), el.style[_transform] = "translate3d(" + ("Y" === this.options.direction ? "0," + b + "px" : b + "px,0") + ",0)"
        },
        scale: function (a, b) {
            a.style[_transform] = "scale(" + (1 - Math.round(100 * (Math.abs(b) / this.distance / 3)) / 100) + ") translateZ(0)"
        },
        clearDuration: function () {
            Array.prototype.forEach.call(arguments, function (el) {
                el && el.nodeType && el.style[_transitionDuration] && (el.style[_transitionDuration] = null);
            });
        },
        duration: function () {
            var nTime = this.options.duration;
            Array.prototype.forEach.call(arguments, function (el) {
                el && (el.style[_transitionDuration] = nTime + "s");
            });
        },
        mousewheel: function (event) {
            console.log(event.wheelDelta);
            this.touching || this.animating || (event.wheelDelta < 0 ? this.next() : this.prev())
        },
        keyup: function (a) {
            var b = a.keyCode, c = a.shiftKey, d = a.ctrlKey, e = a.altKey;
            this.touching || this.animating || d || e || (32 === b ? c ? this.prev() : this.next() : 38 === b || 75 === b || 37 === b ? this.prev() : (40 === b || 74 === b || 39 === b) && this.next())
        },
        next: function () {
            this.go2page(this.current + 1)
        },
        prev: function () {
            this.go2page(this.current - 1)
        },
        random: function () {
            this.go2page(Math.floor(Math.random() * (this.$el.children.length - 1)) + 1);
        },
        go2page: function (index) {
            if (index === this.current || 0 > index || index > this.total) {
                this.moving = false;
                return;
            }
            var oCurPage = this.$current(),
                oToPage = this.pages[index],
                d = (index < this.current ? 1 : -1) * this.distance,
                fn = function () {
                    this.duration(oCurPage, oToPage);
                    this.exits(oCurPage, d);
                    this.entrance(oToPage, 0);
                    this._play(oToPage, oCurPage);
                    this.moving = false;
                    // 当前索引
                    this.current = index;
                }.bind(this);

            if (this.moving) {
                fn();
            } else {
                this.clearDuration(oToPage, oCurPage);
                oToPage.style.zIndex = 2;
                oCurPage.style.zIndex = 1;
                this.entrance(oToPage, -d);
                setTimeout(fn, 24);
            }
            "function" == typeof this.options.change && this.options.change(index, this.current, this);
        }
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = Hi), exports.Hi = Hi) : self.Hi = Hi
}.call(this);
