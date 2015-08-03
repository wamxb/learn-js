var Util;
Util || (Util = {}), function () {
    function t() {
    }

    t.prototype.checkSessionStorageSupport = function () {
        window.sessionStorage ? alert("This browser supports sessionStorage") : alert("This browser does NOT supports sessionStorage")
    }, t.prototype.checkLocalStorageSupport = function () {
        return window.localStorage ? !0 : !1
    }, t.prototype.checkCanvas2DSupport = function () {
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {
            window.location.href = "/error.html"
        }
    }, t.prototype.checkCanvas3DSupport = function () {
        try {
            document.createElement("canvas").getContext("3d")
        } catch (e) {
        }
    }, t.prototype.checkVideoSupport = function () {
        var e = !!document.createElement("video").canPlayType
    }, t.prototype.checkAudioSupport = function () {
        var e = !!document.createElement("audio").canPlayType
    }, t.prototype.checkWorkerSupport = function () {
        return typeof Worker != "undefined" ? !0 : !1
    }, t.prototype.checkGeolocationSupport = function () {
        navigator.geolocation || (window.location.href = "/error.html")
    }, t.prototype.checkCommunicationSupport = function () {
        typeof window.postMessage === undefined
    }, Util.BrowserSupport = t, window.onload = function () {
        var e = new Util.BrowserSupport;
        e.checkCanvas2DSupport()
    }
}(), function () {
    function t() {
        var e = {
            view: {value: !0, writable: !1, enumerable: !0, configurable: !1},
            collection: {value: !0, writable: !1, enumerable: !0, configurable: !1},
            model: {value: !0, writable: !1, enumerable: !0, configurable: !1},
            taskMark: {value: !0, writable: !1, enumerable: !0, configurable: !1},
            common: {value: !0, writable: !1, enumerable: !0, configurable: !1}
        };
        Object.defineProperties(t.prototype, e)
    }

    t.prototype.logInfo = function (e, t) {
        var n = this;
        n.isPrintLog(e) && (console.info("-- Info -- " + e), console.info(t))
    }, t.prototype.logWarn = function (e, t) {
        var n = this;
        n.isPrintLog(e) && (console.warn("-- Warn -- " + e), console.warn(t))
    }, t.prototype.logError = function (e, t) {
        var n = this;
        n.isPrintLog(e) && (console.error("-- Error -- " + e), console.error(t))
    }, t.prototype.logDebug = function (e, t) {
        var n = this;
        n.isPrintLog(e) && (console.debug("--Debug-- " + e), console.debug(t))
    }, t.prototype.isPrintLog = function (e) {
        var t = !0;
        switch (e) {
            case"view":
                this.view || (t = !1);
                break;
            case"model":
                this.model || (t = !1);
                break;
            case"collection":
                this.collecion || (t = !1);
                break;
            case"taskMark":
                this.taskMark || (t = !1);
                break;
            case"common":
                this.common || (t = !1)
        }
        return t
    }, Util.LogHelper = t
}(), function () {
    function t() {
        var e = {httpServiceException: {value: !0, writable: !1, enumerable: !0, configurable: !1}, localServiceException: {value: !0, writable: !1, enumerable: !0, configurable: !1}, commonException: {value: !0, writable: !1, enumerable: !0, configurable: !1}};
        Object.defineProperties(t.prototype, e)
    }

    t.prototype.handerException = function (e, t, n) {
        var r = this;
        if (r.isHandleException(e)) {
            console.info("-- Excetion Type is " + e + " --");
            switch (t) {
                case 404:
                    console.info("404错误");
                    break;
                case 200:
                    console.info("JSON数据错误");
                    break;
                case 403:
                    console.info("禁止访问文件");
                    break;
                default:
                    console.info("其它异常类型")
            }
            console.info(n)
        }
    }, t.prototype.isHandleException = function (e) {
        var t = !0;
        switch (e) {
            case"httpService":
                this.httpServiceException || (t = !1);
                break;
            case"localService":
                this.localServiceException || (t = !1);
                break;
            case"common":
                this.commonException || (t = !1)
        }
        return t
    }, t.prototype.requireErrorTip = function (e) {
        var t = $(Zepto("<div/>")), n = $(Zepto("<div/>"));
        t.addClass("require_errbox"), n.text(e), t.append(n), $("body").append(t), $Pagedom = $(".require_errbox");
        var r = (document.documentElement.clientHeight - $Pagedom.height()) / 2, i = (document.documentElement.clientWidth - $Pagedom.width()) / 2;
        $Pagedom.css({left: i, top: r, visibility: "visible"}), $Pagedom.addClass("require_in"), setTimeout(function () {
            $Pagedom.removeClass("require_in").addClass("require_out"), setTimeout(function () {
                $Pagedom.remove()
            }, 1e3)
        }, 1800)
    }, t.prototype.RouterErrorTip = function (e, t) {
        $pageDom = $(Zepto('<div id="linkMsg" class="top_banner_position"><div class="top_banner_bg"><article id="goback"><a href="javascript:window.history.back()"></article><article class="top_banner_title"><a href="javascript:window.history.back()">404</a></article><aside><div id="top_home" url="#index"><a href="/"></a></div></aside></div><div class="top_banner_bottom"></div></div><div class="errorFrame error_box"><div class="errorimg"><img src="/resources/img/himarketwap/com/error.png" alt=""/></div><div id="errorMsg"></div></div>')), $pageDom.find("#errorMsg").text(t), e.html($pageDom)
    }, t.prototype.ListErrorTip = function (e, t) {
        $pageDom = $(Zepto('<div class="errorFrame"><div class="errorimg"><img src="/resources/img/himarketwap/com/error.png" alt=""/></div><div id="errorMsg"></div></div>')), $pageDom.find("#errorMsg").text(t), e.append($pageDom)
    }, Util.ExceptionHelper = t
}(), function () {
    function t() {
        this.showDialog = !1, this.lengthShort = 2e3, this.lengthLong = 3e3
    }

    t.prototype.makeText = function (e, t) {
        if (!this.showDialog) {
            var n = this;
            n.showDialog = !0, $downTip = $(Zepto('<div class="toastBox"><div id="toastText"></div></div>')), $downTip.find("#toastText").text(e);
            var r = document.documentElement.clientHeight - 45 - 40, i = (document.documentElement.clientWidth - 150) / 2;
            $downTip.css({top: r, left: i}), $("body").append($downTip), setTimeout(function () {
                $(".toastBox").animate({opacity: 0}, 1e3, "ease-out", function () {
                    $(".toastBox").remove(), n.showDialog = !1
                })
            }, n[t])
        }
    }, Util.Toast = t
}(), function namespace() {
    $.fn.removeBindEvents = function () {
        Zepto("*", this).each(function () {
            Zepto.event.remove(this)
        })
    }, $.fn.isFunTabShowBk = function (e) {
        if (!MarketApp.marketHistory.isChangeUrl)return!1;
        var t = $(this), n = t.children().remove();
        if (n.length) {
            var r = n.attr("id");
            Boolean(MarketApp.viewWraper.mFunPage[r]) || (MarketApp.viewWraper.mFunPage[r] = n)
        }
        if (e == "weeklyDetail")return!1;
        var i = MarketApp.viewWraper.mFunPage[e];
        return Boolean(i) ? i.children().length == 0 || i.children().find("img").length == 0 ? (delete MarketApp.viewWraper.mFunPage[e], !1) : (t.append(i), !0) : !1
    }, $.fn.isFunTabShow = function (e) {
        var t = $("#" + e);
        if (t.find(".list_item").length > 0)return!0;
        var n = e.replace("Li", ""), r = MarketApp.viewWraper.mFunPage[n];
        return Boolean(r) && (MarketApp.removeLoading(t), t.append(r), delete MarketApp.viewWraper.mFunPage[n]), t.find(".list_item").length > 0 ? !0 : !1
    }, $.fn.orientation = function () {
        MarketApp.clientWidth = document.documentElement.clientWidth;
        var isOrientation = !1, supportsOrientationChange = "onorientationchange"in window, orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
        window.addEventListener("resize", function () {
            setTimeout(function () {
                if (isOrientation && document.documentElement.clientWidth != MarketApp.clientWidth) {
                    isOrientation = !1, MarketApp.clientWidth = document.documentElement.clientWidth, MarketApp.clientHeight = document.documentElement.clientHeight;
                    for (var key in MarketApp.orientation)MarketApp.orientation[key]();
                    window.localStorage && Boolean(localStorage.versionTip) && eval("(" + localStorage.versionTip + ")")()
                }
            }, 100)
        }, !1), window.addEventListener(orientationEvent, function () {
            isOrientation || (isOrientation = !0)
        }, !1)
    }, $.fn.imageLazyload = function (e) {
        var t = {topHeight: 0, defaultCss: "", newCss: "original", delay: 0, iscroll: null};
        for (var n in e)t[n] = e[n];
        $curr = $(this);
        var r = setTimeout(function () {
            var e = MarketApp.clientHeight - t.topHeight;
            $curr.each(function () {
                var n = $(this), r = n.find("img");
                if (Boolean(r.attr("data_src"))) {
                    var i = r.attr("data_src"), s = n.position().top, o = n.height(), u = s >= 0 && s < e || s < 0 && s + o > 0;
                    if (u) {
                        var a = new Image;
                        a.onload = function () {
                            r.attr("src", i), r.removeAttr("data_src"), _.isNull(t.iscroll) || t.iscroll.refresh()
                        }, a.src = i
                    }
                }
            })
        }, t.delay);
        return r
    }, $.HTMLEncode = function (e) {
        var t = document.createElement("div");
        t.textContent != null ? t.textContent = e : t.innerText = e;
        var n = t.innerHTML;
        return t = null, n
    }, $.resetNum = function (e) {
        var t, n = parseInt(e);
        return n >= 1e8 ? (n = parseInt(n / 1e8), t = n + "" + lang.HundredMillion + "") : n >= 1e4 ? (n = parseInt(n / 1e4), t = n + "" + lang.TenThousand + "") : t = n, t
    }, Backbone.History.prototype.getFragment = function () {
        var e = window.location.href;
        return e.indexOf("#") >= 0 && (e = e.substring(e.indexOf("#") + 1)), e
    }, Backbone.View.prototype.delegateEvents = function (e) {
        var t = /^(\S+)\s*(.*)$/;
        if (!e && !(e = _.result(this, "events")))return this;
        this.undelegateEvents();
        for (var n in e) {
            var r = e[n];
            _.isFunction(r) || (r = this[e[n]]);
            if (!r)continue;
            var i = n.match(t), s = i[1], o = i[2];
            r = _.bind(r, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.on(s, r) : this.$el.find(o).length == 0 && this.$el.on(s, o, r)
        }
        return this
    }, window.addEventListener("online", function (e) {
    }, !1), window.addEventListener("offline", function (e) {
    }, !1), $.getSkins = function (e) {
        $.ajax({url: e, type: "get", dataType: "json", error: function (e) {
            e.status != "404" && MarketApp.exception.handerException("ajaxGetSkins", e.status, e), Backbone.history.start()
        }, success: function (e) {
            MarketApp.tplUrls = e, Backbone.history.start()
        }})
    }, $.getPathName = function () {
        var e = window.location.pathname;
        return e.indexOf("/index.html") == 0 && (e = e.substring("/index.html".length)), e == "" && (e = "/"), e
    }, $.upVersionTip = function () {
        var e = new Util.BrowserSupport;
        if (!e.checkLocalStorageSupport() || $.browser.firefox)return;
        var t = "newhiapk", n = window.localStorage;
        for (var r in n)r == "hiapkv" && (t = "uphiapk");
        var i = $(Zepto('<div id="verTipFilter"><div class="verCenter"><div class="tipText">' + lang[t] + "</div>" + '<div class="progressBar"><div class="progressLeft">0</div><div class="progressRight">100%</div><div class="z"></div>' + '<div class="verProgress"><div class="verLoading"></div></div></div></div></div>')), s = document.documentElement.clientHeight, o = (s - 105) / 2;
        i.css({height: s}), i.find(".verCenter").css({marginTop: o});
        var u = function () {
            t != "error" && (t == "newhiapk" ? $(".tipText").text(lang.upall) : $(".tipText").text(lang.reloadWeb), $(".tipText").css({padding: "0px", lineHeight: "105px"}), $(".progressBar").hide()), setTimeout(function () {
                $("#verTipFilter").animate({opacity: "0"}, 500, "ease-out", function () {
                    n.removeItem("versionTip"), $(this).remove(), t == "uphiapk" && window.location.reload()
                })
            }, 1500)
        };
        window.applicationCache.ondownloading = function (e) {
            $("body").append(i);
            var t = function () {
                var e = document.documentElement.clientHeight, t = (e - 105) / 2;
                $("#verTipFilter").css({height: e}), $(".verCenter").css({marginTop: t})
            };
            n.setItem("versionTip", t)
        }, window.applicationCache.onprogress = function (e) {
            var t = e.loaded + 1, n = e.loaded / e.total * 100 + "%";
            $("#verTipFilter").length == 0 ? (i.find(".verLoading").css({width: n}), $("body").append(i)) : $(".verLoading").css({width: n}), t >= e.total && u()
        }, window.applicationCache.oncached = function (e) {
            window.localStorage.setItem("hiapkv", "uphiapk")
        }, window.applicationCache.onerror = function (e) {
            t = "error", u()
        }
    }, $.fn.childrenRemove = function () {
        $(this).each(function () {
            $(this).is("#verTipFilter") || $(this).remove()
        })
    }, $.isUcBrowse = function () {
        var e = !1;
        return Boolean(window.navigator.vendor) ? window.navigator.vendor.toLowerCase().indexOf("ucweb") == -1 ? e = !1 : e = !0 : e = !1, e
    }, $.parseJSON = function (value) {
        try {
            return JSON.parse(value)
        } catch (ex) {
            return eval("(" + value + ")")
        }
    }, $.orientationPopImg = function (e, t, n) {
        if (Math.abs(window.orientation) != 90) {
            var r = t - 140;
            e.removeClass("orientation_img"), e.css({height: r, marginTop: 70}), e.each(function (r) {
                var i = $(this), s = i.attr("src"), o = new Image;
                o.onload = function () {
                    var i = o.width, s = o.height;
                    if (i > s && i > n) {
                        var u = n - 20, a = (n - 20) / i * s, f = (t - a) / 2;
                        e.eq(r).css({width: u, height: a, marginTop: f})
                    }
                }, o.src = s
            })
        } else {
            var r = n - 200;
            e.addClass("orientation_img"), e.height(r);
            var i = -(r * .6 / 4);
            e.css({marginTop: i}), e.each(function (n) {
                var r = $(this), i = r.attr("src"), s = new Image;
                s.onload = function () {
                    var i = s.width, o = s.height, u = t - 20;
                    if (i > o && i > u) {
                        var a = u / i * o, f = (t - a) / 2;
                        e.eq(n).css({width: u, height: a, marginTop: f}), e.eq(n).removeClass("orientation_img")
                    } else if (r.height() > u) {
                        var a = u / i * o, f = (t - a) / 2;
                        e.eq(n).css({width: u, height: a, marginTop: f})
                    } else {
                        var f = (t - r.width()) / 2;
                        e.eq(n).css({marginTop: f})
                    }
                }, s.src = i
            })
        }
    }
}(), function () {
    function t() {
        this.baseUrl = ""
    }

    t.prototype.loadTemplate = function (e, t) {
        var n = this;
        if (sessionStorage.getItem(t)) {
            e();
            return
        }
        Boolean(MarketApp.baseUrl) && (this.baseUrl = MarketApp.baseUrl), $.ajax({url: this.baseUrl + t + "?" + Date.parse(new Date), dataType: "text", error: function (e) {
            e.status == "404" ? (alert("teplete"), MarketApp.exception.RouterErrorTip($("body"), lang[404])) : window.location.reload()
        }, success: function (r, i) {
            var s = r, o = /{ lang (\w+) }/g, u = /{baseUrl}/g, s = s.replace(o, function (e, t) {
                return lang[t]
            });
            s = s.replace(u, function (e, t) {
                return n.baseUrl
            }), sessionStorage.setItem(t, s), e()
        }})
    }, t.prototype.getTplUrl = function (e) {
        return Boolean(MarketApp.tplUrls[e]) ? MarketApp.tplUrls[e] : e
    }, Util.LoadTemplate = t
}(), function () {
    function t() {
    }

    t.prototype.getTplUrl = function (e) {
        return Boolean(MarketApp.tplUrls[e]) ? MarketApp.tplUrls[e] : e
    }, Util.Partners = t
}(), function namespace() {
    function DownloadManage() {
    }

    DownloadManage.prototype.downloadApp = function (e, t) {
        var n = function (t) {
            var n = Manager.TaskMarkHandler.getDownLoadUrl(e);
            $.ajax({url: n, type: "POST", data: t(), dataType: "json", error: function (e, t, n) {
                $(".down_btn").removeClass("down_btn_hover"), e.status == "404" ? MarketApp.Toast.makeText(lang.softShelves, "lengthShort") : MarketApp.Toast.makeText(lang.netWorkError, "lengthShort")
            }, success: function (e) {
                $(".down_btn").removeClass("down_btn_hover"), e.success ? window.location.href = e.data.downurl : MarketApp.Toast.makeText(lang.netWorkError, "lengthShort")
            }})
        };
        this.getCheckValide(n)
    }, DownloadManage.prototype.getHiMarketApp = function () {
        var e = function (e) {
            var t = Manager.TaskMarkHandler.getDownHimarketUrl(MarketApp.hiMarketModel.get("id"));
            $.ajax({url: t, type: "POST", data: e(), dataType: "json", success: function (e) {
                e.success ? window.location.href = e.data.downurl : MarketApp.Toast.makeText(lang.netWorkError, 300), MarketApp.downloadApp = !1
            }, error: function (e, t) {
                MarketApp.downloadApp = !1, e.status == "404" && MarketApp.Toast.makeText(lang.nopackage, "lengthShort")
            }})
        };
        this.getCheckValide(e)
    }, DownloadManage.prototype.getCheckValide = function (callback) {
        var postData;
        Boolean(MarketApp.checkCode) ? postData = MarketApp.checkCode() : postData = {}, $.ajax({url: Manager.TaskMarkHandler.getCheckCodeUrl(), type: "POST", dataType: "text", data: postData, error: function (e) {
        }, success: function (response) {
            eval(response), MarketApp.checkCode = abdcdr, callback(abdcdr)
        }})
    }, Util.DownloadManage = DownloadManage
}(), function () {
    var t = function () {
    };
    Util.Validater = t
}, function () {
    function t() {
    }

    var n = {BIGLOAD: {value: '<div class="loadingbox loadview"><div id="circleG"><div id="circleG_1" class="circleG"></div><div id="circleG_2" class="circleG"></div><div id="circleG_3" class="circleG"></div><div class="z"></div></div><div class="list_load_font">' + lang.waitTingLoad + "</div></div>", writeable: !1, enumerable: !0, configurable: !1}, LISTLOAD: {value: '<div class="loadingbox loadview"><div id="circleG"><div id="circleG_1" class="circleG"></div><div id="circleG_2" class="circleG"></div><div id="circleG_3" class="circleG"></div><div class="z"></div></div><div class="list_load_font">' + lang.waitTingLoad + "</div></div>", writable: !1, enumerable: !0, configurable: !1}, TINYLOAD: {value: '<div class="loadingbox" id="circleG"><div id="circleG_1" class="circleG"></div><div id="circleG_2" class="circleG"></div><div id="circleG_3" class="circleG"></div><div class="z"></div></div>', writable: !1, enumerable: !0, configurable: !1}};
    Object.defineProperties(t, n), t.buildBigload = function (e) {
        if (e.find(".loadingbox").length != 0)return;
        e.children().each(function (e) {
            $(this).is("#verTipFilter") || $(this).remove()
        }), e.append(t.BIGLOAD)
    }, t.buildListload = function (e) {
        if (e.find(".loadingbox").length != 0)return;
        var n = $(t.LISTLOAD);
        e.append(n)
    }, t.buildTingload = function (e) {
        if (e.find(".loadingbox").length != 0)return;
        var n = $(t.TINYLOAD), r = document.documentElement.clientWidth, i = document.documentElement.clientHeight, s = r > i ? r : i, o = parseInt(s / 22) + 5;
        for (var u = 0; u < o; u++)n.find("#warningGradientFrontBarG").append('<div class="warningGradientBarLineG"></div>');
        e.append(n)
    }, t.buildLoading = function (e, t) {
        e.find(".error_box").remove(), e.find(".errorFrame").remove();
        switch (t) {
            case"BIG":
                return this.buildBigload(e), e;
            case"LIST":
                return this.buildListload(e), e;
            case"TINY":
                return this.buildTingload(e), e
        }
    }, t.removeLoading = function (e) {
        e.find(".loadingbox").length > 0 && e.find(".loadingbox").remove()
    }, Util.Loading = t
}();