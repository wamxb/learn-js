define(['jquery'], function ($) {
    var win = window;

    function HI() {
        this.PID = 0;
        this.Ver = 0;
        this.CurrentKey = '';
        this.isDEBUG = (location.hostname == 'localhost');
    }

    HI.prototype = {
        constructor: HI,
        // ======================= browser ==================
        // todo test !!!!!!!!!!!!!!
        _browser: {
            isMobile: function () {
                return navigator.appVersion.match(/Mobile/gi);
            },

            winWidth: function () {
                return win.innerWidth;
            },

            winHeight: function () {
                return win.innerHeight;
            },

            dpr: function () {
                return this.isMobile() ? win.devicePixelRatio : 1;
            },

            setRootFontSize: function () {
                var dpr = this.dpr();
                var docEl = document.documentElement;
                docEl.setAttribute('data-dpr', this.dpr());
                var rem = this.winWidth() / 16;
                docEl.style.fontSize = rem + 'px';
                document.body.style.fontSize = '12px';
            },

            setMeta: function () {
                var dpr = this.dpr();
                var scale = 1 / dpr;
                var docEl = document.documentElement;
                var metaEl = document.querySelector('meta[name="viewport"]');
                if (!metaEl) {
                    metaEl = document.createElement('meta');
                    docEl.firstElementChild.appendChild(metaEl);
                }
                metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no');
            },

            orientationHandler: function (fn) {
                var supportsOrientation = (typeof win.orientation == 'number' && typeof win.onorientationchange == 'object');
                var orientationEvent = supportsOrientation ? 'orientationchange' : 'resize';
                var HTMLNode = document.body.parentNode;
                var updateOrientation = function () {
                    if (supportsOrientation) {
                        updateOrientation = function () {
                            var orientation = win.orientation;
                            switch (orientation) {
                                case 90:
                                case -90:
                                    orientation = 'landscape';
                                    break;
                                default:
                                    orientation = 'portrait';
                            }
                            HTMLNode.setAttribute('class', orientation);
                        }
                    } else {
                        updateOrientation = function () {
                            var orientation = (win.innerWidth > win.innerHeight) ? 'landscape' : 'portrait';
                            HTMLNode.setAttribute('class', orientation);
                        }
                    }
                    typeof fn === 'function' && fn();
                    updateOrientation();
                };
                win.addEventListener(orientationEvent, updateOrientation, false);
            }
        },
        // ======================= storage ===================
        _storage: {
            /**
             * 查找键值
             * @param name {string} 键
             * @returns {*|null}
             */
            getData: function (name) {
                var str = localStorage.getItem(name);
                var data = JSON.parse(str);
                return data || null;
            },
            /**
             * 保存数据
             * @param name {string} 键
             * @param property {string} 属性
             * @param value {string} 值
             */
            setData: function (name, property, value) {
                var storageData = this.getData(name) || {};
                storageData[property] = value;
                var str = JSON.stringify(storageData);
                localStorage.setItem(name, str);
            },
            /**
             * 清除某一键值
             * @param name {string} 键
             */
            clearData: function (name) {
                localStorage.removeItem(name);
            }
        },

        _utils: {
            isFunction: function (obj) {
                if (typeof (/./) !== 'function') {
                    return typeof obj === 'function';
                }
            }
        },

        throttle: function (method, context) {
            clearTimeout(context.tId);
            context.tId = setTimeout(function () {
                method.call(context);
            }, 200);
        },

        ajaxFn: function (url, data, doneFn, failFn) {
            var self = this;
            var xhr = $.ajax({
                type: 'GET',
                url: url,
                data: data,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                timeout: 2000
            });
            self._utils.isFunction(doneFn) && xhr.done(doneFn);
            self._utils.isFunction(failFn) && xhr.fail(failFn)
        },

        debug: function () {
            if (!this.isDEBUG) return;
            if (console && console.log) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift('log: ');
                console.log.apply(console, args);
            }
        },

        // ===================== UI =======================
        /**
         * 获取URL的参数
         * @param name
         * @param url
         * @returns {*}
         */
        getQueryString: function (name, url) {
            var u = arguments[1] || window.location.search
                , reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
                , r = u.substr(u.indexOf("\?") + 1).match(reg);
            return r != null ? r[2] : "";
        },

        /**
         * 时间格式
         * @param jsonDate
         * @returns {string}
         */
        jsonDateFormat: function (jsonDate) {
            var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace("+0800)/", ""), 10)),
                dateDate = date.getDate(),
                now = new Date(),
                nowDate = now.getDate(),
                rtnStr = '';
            if (date.getYear() == now.getYear() && date.getMonth() == now.getMonth()) {
                rtnStr = (nowDate == dateDate) ? ("今天 " + date.Format("hh:mm")) : ((nowDate == dateDate + 1) ? ("昨天 " + date.Format("hh:mm")) : (date.Format("MM-dd hh:mm")));
            } else {
                rtnStr = date.Format("MM-dd hh:mm");
            }
            return rtnStr;
        },

        /**
         * 话题字段高亮
         * @param str
         * @param className
         * @returns {*}
         */
        setHighLight: function (str, className) {
            var r = str.match(/#[\s\S]*?#/ig);
            if (!r) {
                return str;
            } else {
                for (var i = 0, len = r.length; i < len; i++) {
                    var innerHtml = className ? ' class="' + className + '"' : ' style="color: #2c87e1;"';
                    str = str.replace(r[i], '<span' + innerHtml + '>' + r[i] + '</span>');
                }
                return str;
            }
        },
        // ================= 活动  =========================
        /**
         * 预加载图片
         * @param imgPath {string} 图片路径
         * @param imgList {array} 加载图片数组
         * @param oLoading {object} 进度提示框
         * @param oLoadTXT {object} 进度提示文字
         */
        preLoadImg: function (imgPath, imgList, oLoading, oLoadTXT) {
            var i = 0, len = imgList.length;
            for (; i < len; i++) {
                imgList[i] = imgPath + imgList[i];
            }
            var imgLoader = function (imgs, callback) {
                var len = imgList.length, i = 0;
                while (imgList.length) {
                    loadImage(imgList.shift(), function (path) {
                        callback(path, ++i, len);
                    });
                }
            };

            imgLoader(imgList, function (path, curNum, total) {
                var percent = Math.floor((curNum / total).toFixed(2) * 100);
                oLoadTXT.innerHTML = percent + '%';
                percent == 100 && oLoading && document.body.removeChild(oLoading);
            });

            function loadImage(path, callback) {
                var img = new Image();
                img.onload = function () {
                    img.onload = null;
                    callback(path);
                };
                img.src = path;
            }
        }
    };

    document.addEventListener('touchstart', function () {
    }, false);

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,               //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };

    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + days);
        return this;
    };
    Date.prototype.addHours = function (h) {
        this.setHours(this.getHours() + h);
        return this;
    };

    var instance;
    if (instance === undefined) {
        instance = new HI();
    }
    win.HI = instance;
    return instance;
})
;

Array.prototype.each = Array.prototype.forEach || function (fn) {
        for (var i = this.length - 1; i >= 0; --i) {
            fn(this[i]);
        }
        return this;
    };

Array.prototype.map = Array.prototype.map || function (fn) {
        var arr = [];
        for (var i = 0, len = this.length; i < len; i++) {
            arr.push(fn(this[i]));
        }
        return arr;
    };


function getStyle(obj, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[prop];
    } else if (obj.currentStyle) {
        return obj.currentStyle[prop];
    } else {
        return null;
    }
}


/**
 * 判断数据是否在一维数组中
 * @param val
 * @param arr {array}
 * @returns {boolean}
 */
function inArr(val, arr) {
    var i = 0, len = arr.length;
    var result = false;
    if (len == 0) return result;
    for (; i < len; i++) {
        if (arr[i] == val) return true;
    }
    return result;
}


/**
 * from: http://static.paipaiimg.com/js/version/2015/05/pp.c2ccommodity.buyareaV5.20150507.js
 */
function $addClass(ids, cName) {
    $setClass(ids, cName, "add");
}
;
function $addEvent(obj, type, handle) {
    if (!obj || !type || !handle) {
        return;
    }
    if (obj instanceof Array) {
        for (var i = 0, l = obj.length; i < l; i++) {
            $addEvent(obj[i], type, handle);
        }
        return;
    }
    if (type instanceof Array) {
        for (var i = 0, l = type.length; i < l; i++) {
            $addEvent(obj, type[i], handle);
        }
        return;
    }
    window.__allHandlers = window.__allHandlers || {};
    window.__Hcounter = window.__Hcounter || 1;
    function setHandler(obj, type, handler, wrapper) {
        obj.__hids = obj.__hids || [];
        var hid = 'h' + window.__Hcounter++;
        obj.__hids.push(hid);
        window.__allHandlers[hid] = {
            type: type,
            handler: handler,
            wrapper: wrapper
        }
    }

    function createDelegate(handle, context) {
        return function () {
            return handle.apply(context, arguments);
        }
            ;
    }

    if (window.addEventListener) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper)
        obj.addEventListener(type, wrapper, false);
    }
    else if (window.attachEvent) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper)
        obj.attachEvent("on" + type, wrapper);
    }
    else {
        obj["on" + type] = handle;
    }
}
;
function $addSelect(e, t, v) {
    var o = new Option(t, v);
    e.options[e.options.length] = o;
    return o;
}
;
function $child(node, val, fn, filter) {
    var results = []
        , filter = filter || $empty();
    if (!node)
        return results;
    walk(node.firstChild, function (n) {
            if (!n) {
                return;
            }
            var actual = n.nodeType === 1 && n.nodeName.toLowerCase();
            if (typeof actual === 'string' && (actual === val || typeof val !== 'string') && filter(n)) {
                results.push(n);
                fn && fn(n, results.length - 1);
            }
        }
    );
    return results;
    function walk(n, func) {
        func(n);
        while (n && (n = n.nextSibling)) {
            func(n, func);
        }
    }
}
;
function $countDownTimer(opt) {
    var option = {
        nowTime: new Date(),
        endTime: 0,
        seconds: 60,
        interval: 1,
        round: true,
        callBack: function (miniSec, sec, minute, hour, day) {
        },
        finalCallback: function () {
        }
    };
    $extend(option, opt);
    var et = option.endTime;
    if (!et) {
        option.endTime = et = new Date(new Date().getTime() + option.seconds * 1000);
    }
    if (typeof et == "string") {
        et = new Date(et);
    }
    if (Object.prototype.toString.call(et) == "[object Date]") {
        et = et.getTime();
    }
    var endTime = et
        , nowTimeOffset = option.nowTime - new Date();
    var quarz = $getQuarz();
    var timer = quarz.addTimer({
        func: function () {
            var remain = endTime - (new Date()).getTime() - nowTimeOffset, flag;
            remain = Math.round(option.round ? (Math.round(remain / (option.interval * 1000)) * option.interval * 1000) : remain);
            if (remain <= 0) {
                remain = 0;
                flag = true;
                timer.remove();
            }
            var miniSec = remain % 1000;
            remain = Math.round((remain - miniSec) / 1000);
            var sec = remain % 60;
            remain = (remain - sec) / 60;
            var minute = remain % 60;
            remain = (remain - minute) / 60;
            var hour = remain % 24;
            remain = (remain - hour) / 24;
            var day = remain;
            option.callBack(miniSec, sec, minute, hour, day);
            flag && option.finalCallback && option.finalCallback();
        },
        delay: option.interval * 1000,
        times: -1
    });
    return timer;
}
;
function $delClass(ids, cName) {
    $setClass(ids, cName, "remove");
}
;
function $extend() {
    var target = arguments[0] || {}, i = 1, length = arguments.length, options;
    if (typeof target != "object" && typeof target != "function")
        target = {};
    for (; i < length; i++)
        if ((options = arguments[i]) != null)
            for (var name in options) {
                var copy = options[name];
                if (target === copy)
                    continue;
                if (copy !== undefined)
                    target[name] = copy;
            }
    return target;
}
function countdownTimer(curTime, endTime) {
    curTime = curTime || 0;
    endTime = endTime || 0;
    var start = new Date();
    var timespan = ((endTime - curTime) > 0) ? (endTime - curTime) : 0;
    var t = {
            day: Math.floor(timespan / 86400),
            hour: Math.floor((timespan % 86400) / 3600),
            minute: Math.floor((timespan % 3600) / 60),
            second: Math.floor(timespan % 60)
        }
        , tpl = '剩余' + '<span class="{#class_day#}"><em>{#day#}</em>天</span>' + '<span class="{#class_hour#}"><em>{#hour#}</em>小时</span>' + '<span class="{#class_minute#}"><em>{#minute#}</em>分</span>' + '<span class="{#class_second#}"><em>{#second#}</em>秒</span>' + '结束'
        , html = '';
    html = $strReplace(tpl, {
        '{#class_day#}': t.day == 0 ? 'hidden' : '',
        '{#class_hour#}': t.day == 0 && t.hour == 0 ? 'hidden' : '',
        '{#day#}': t.day,
        '{#hour#}': t.hour,
        '{#minute#}': t.minute,
        '{#second#}': t.second
    });
    return html;
}
function $strReplace(str, re, rt) {
    if (rt != undefined) {
        replace(re, rt);
    } else {
        for (var key in re) {
            replace(key, re[key]);
        }
    }
    function replace(a, b) {
        var arr = str.split(a);
        str = arr.join(b);
    }

    return str;
}
function $getTarget(e, parent, tag) {
    var e = window.event || e,
        tar = e.srcElement || e.target;
    if (parent && tag && tar.nodeName.toLowerCase() != tag) {
        while (tar = tar.parentNode) {
            if (tar == parent || tar == document.body || tar == document) {
                return null;
            } else if (tar.nodeName.toLowerCase() == tag) {
                break;
            }
        }
    }
    return tar;
}
function $getWindowHeight() {
    var bodyCath = document.body;
    return (document.compatMode == 'BackCompat' ? bodyCath : document.documentElement).clientHeight;
}
function $getWindowWidth() {
    var bodyCath = document.body;
    return (document.compatMode == 'BackCompat' ? bodyCath : document.documentElement).clientWidth;
}
function $getX(e) {
    var t = e.offsetLeft || 0;
    while (e = e.offsetParent)
        t += e.offsetLeft;
    return t;
}
function $getY(e) {
    var t = e.offsetTop || 0;
    while (e = e.offsetParent) {
        t += e.offsetTop;
    }
    return t;
}
;
function $hasClass(old, cur) {
    if (!old || !cur)
        return null;
    var arr = (typeof old == 'object' ? old.className : old).split(' ');
    for (var i = 0, len = arr.length; i < len; i++) {
        if (cur == arr[i]) {
            return cur;
        }
    }
    ;
    return null;
}
;
function $id(id) {
    return typeof (id) == "string" ? document.getElementById(id) : id;
}
;
function $getContentHeight() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollHeight : doeCath.scrollHeight;
}
;
function $getContentWidth() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollWidth : doeCath.scrollWidth;
}
;
function $getCookie(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)")
        , val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
}
;
function $getKeyCode(e) {
    var e = e || window.event;
    return e.keyCode || e.which;
}
;
function $getMousePosition(e) {
    var e = window.event ? window.event : e;
    if (e.evt)
        e = e.evt;
    var pos = [];
    if (typeof e.pageX != "undefined") {
        pos = [e.pageX, e.pageY];
    } else if (typeof e.clientX != "undefined") {
        pos = [e.clientX + $getScrollPosition()[0], e.clientY + $getScrollPosition()[1]];
    }
    return pos;
}
;
function $getPageScrollHeight() {
    return document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
}
;
function $getPageScrollWidth() {
    var bodyCath = document.body;
    var doeCath = document.compatMode == 'BackCompat' ? bodyCath : document.documentElement;
    return (window.MessageEvent && navigator.userAgent.toLowerCase().indexOf('firefox') == -1) ? bodyCath.scrollLeft : doeCath.scrollLeft;
}
function $getQuery(name, url) {
    var u = arguments[1] || window.location.search
        , reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        , r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
}
;
function $getScrollPosition() {
    var _docElement = document.documentElement
        , _body = document.body
        , scrollLeft = (_docElement && _docElement.scrollLeft) || (_body && _body.scrollLeft) || window.pageXOffset || 0
        , scrollTop = (_docElement && _docElement.scrollTop) || (_body && _body.scrollTop) || window.pageYOffset || 0;
    return [scrollLeft, scrollTop];
}
;
function $isBrowser(str) {
    str = str.toLowerCase();
    var b = navigator.userAgent.toLowerCase();
    var arrB = [];
    arrB['firefox'] = b.indexOf("firefox") != -1;
    arrB['opera'] = b.indexOf("opera") != -1;
    arrB['safari'] = b.indexOf("safari") != -1;
    arrB['chrome'] = b.indexOf("chrome") != -1;
    arrB['gecko'] = !arrB['opera'] && !arrB['safari'] && b.indexOf("gecko") > -1;
    arrB['ie'] = !arrB['opera'] && b.indexOf("msie") != -1;
    arrB['ie6'] = !arrB['opera'] && b.indexOf("msie 6") != -1;
    arrB['ie7'] = !arrB['opera'] && b.indexOf("msie 7") != -1;
    arrB['ie8'] = !arrB['opera'] && b.indexOf("msie 8") != -1;
    arrB['ie9'] = !arrB['opera'] && b.indexOf("msie 9") != -1;
    arrB['ie10'] = !arrB['opera'] && b.indexOf("msie 10") != -1;
    return arrB[str];
}
;
function $isDocReady() {
    if (navigator.userAgent.match(/MSIE/)) {
        try {
            document.documentElement.doScroll('left');
            return true;
        } catch (e) {
        }
        return false;
    } else {
        return document.body ? true : false;
    }
}
;
function $setClass(ids, cName, kind) {
    if (!ids) {
        return;
    }
    var set = function (obj, cName, kind) {
            if (!obj) {
                return;
            }
            var oldName = obj.className
                , arrName = oldName ? oldName.split(' ') : [];
            if (kind == "add") {
                if (!$hasClass(oldName, cName)) {
                    arrName.push(cName);
                    obj.className = arrName.join(' ');
                }
            }
            else if (kind == "remove") {
                var newName = [];
                for (var i = 0, l = arrName.length; i < l; i++) {
                    if (cName != arrName[i] && ' ' != arrName[i]) {
                        newName.push(arrName[i]);
                    }
                }
                obj.className = newName.join(' ');
            }
        }
        ;
    if (typeof (ids) == "string") {
        var arrDom = ids.split(",");
        for (var i = 0, l = arrDom.length; i < l; i++) {
            if (arrDom[i]) {
                set($id(arrDom[i]), cName, kind);
            }
        }
    }
    else if (ids instanceof Array) {
        for (var i = 0, l = ids.length; i < l; i++) {
            if (ids[i]) {
                set(ids[i], cName, kind);
            }
        }
    }
    else {
        set(ids, cName, kind);
    }
}
;
function $setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date()
        , expires = arguments[2] || null
        , path = arguments[3] || "/"
        , domain = arguments[4] || null
        , secure = arguments[5] || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}
;
function $stopBubble(ev) {
    var evt = ev || window.event;
    if (window.event) {
        evt.cancelBubble = true;
    } else {
        evt.stopPropagation();
    }
}
;
function $strReplace(str, re, rt) {
    if (rt != undefined) {
        replace(re, rt);
    } else {
        for (var key in re) {
            replace(key, re[key]);
        }
        ;
    }
    ;
    function replace(a, b) {
        var arr = str.split(a);
        str = arr.join(b);
    }
    ;
    return str;
}
;
function $strTrim(str, code) {
    var argus = code || "\\s";
    var temp = new RegExp("(^" + argus + "*)|(" + argus + "*$)", "g");
    return str.replace(temp, "");
}

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());