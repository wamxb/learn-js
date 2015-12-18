/**
 + ---------------------------------------- +
 + Function: EventUtil
 + By: zplus
 + ---------------------------------------- +
 + Date: 2014/11/8
 + Update:
 + ---------------------------------------- +
 **/
var EventUtil = {
    on: function (el, evt, fn, bubble) {
        var self = this;
        bubble = (bubble == 'undefined') ? false : bubble;
        if (el.addEventListener) {
            try {
                self.on = function (el, evt, fn, bubble) {
                    el.addEventListener(evt, fn, bubble);
                };
            } catch (e) {
                if (typeof fn == "object" && fn.handleEvent) {
                    self.on = function (el, evt, fn, bubble) {
                        el.addEventListener(evt, function () {
                            fn.handleEvent.call(fn);
                        }, bubble);
                    };
                } else {
                    throw e;
                }
            }
        } else if (el.attachEvent) {
            if (typeof fn == "object" && fn.handleEvent) {
                self.on = function (el, evt, fn) {
                    el.attachEvent("on" + evt, function () {
                        fn.handleEvent.call(fn);
                    });
                };
            } else {
                self.on = function (el, evt, fn) {
                    el.attachEvent("on" + evt, fn);
                };
            }
        }
        return self.on(el, evt, fn, bubble);
    },

    addHandler: function (el, evt, fn) {
        if (el.addEventListener) {
            el.addEventListener(evt, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent("on" + evt, fn);
        } else {
            el["on" + evt] = fn;
        }
    },
    getEvent: function (e) {
        return e ? e : window.event;
    },
    getTarget: function (e) {
        return e.target || e.srcElement;
    },
    preventDefault: function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },
    removeHandler: function (el, evt, fn) {
        if (el.removeEventListener) {
            el.removeEventListener(evt, fn, false);
        } else if (el.detachEvent) {
            el.detachEvent("on" + evt, fn);
        } else {
            el["on" + evt] = null;
        }
    },
    stopPropagation: function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },
    // 相关目标 mouseover, mouseout
    getRelatedTarget: function (e) {
        if (e.relatedTarget) {
            return e.relatedTarget;
        } else if (e.fromElement) {
            return e.fromElement;
        } else if (e.toElement) {
            return e.toElement;
        }
    },
    // 鼠标按钮
    getButton: function (e) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return e.button;
        } else {
            switch (e.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    // 鼠标滚轮事件
    getWheelDelta: function (e) {
        if (e.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -e.wheelDelta : e.wheelDelta);
        } else {
            return -e.detail * 40; // Firefox
        }
    },
    // 字符编码
    getCharCode: function (e) {
        if (typeof e.charCode == "number") {
            return e.charCode;
        } else {
            // IE8及Opera
            return e.keyCode;
        }
    },
    getClipboardText: function (e) {
        var clipboardData = (e.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    setClipboardText: function (e, val) {
        if (e.clipboardData) {
            return e.clipboardData.setData("text/plain", val);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", val);
        }
    }
};