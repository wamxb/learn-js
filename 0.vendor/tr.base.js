/*!
 *  Item: trlib.base    铁人javascript库
 *  Copyright: ? 2009-2013 Teiron Network Technology Co.,Ltd
 *  Author: Inv
 *  Update: Inv(2013.09.18)
 *  http://www.996.com/style/js/tr.base.js
 */

var $id = function (id) {
    return !document.getElementById(id) ? null : document.getElementById(id);
};
var tr = tr || {};

//
;
(function () {

    //绑定事件
    // @param   obj     Object       绑定对象
    // @param   eType   String       绑定事件的名称
    // @param   fn      Function	 事件触发后执行的函数
    tr.bindEvent = function (obj, eType, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(eType, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + eType, fn);
        } else {
            obj["on" + eType] = fn;
        }
    }

    //阻止事件冒泡
    //@param    e    Event
    tr.stopProp = function (e) {
        var e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
    }

    //获取对象样式表
    //@param    obj    Object    元素对象
    tr.getStyle = function (obj) {
        return obj.currentStyle || document.defaultView.getComputedStyle(obj, null);
    }

    //将普通文本转换为HTML代码
    //@param    text    String    要转换的文本
    tr.htmlEncode = function (text) {
        return text.replace(/&amp;/g, '&').replace(/&acute;/g, "\'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<br>/g, "\n");
    }

    //将文本复制到剪贴板
    //@param    text    String    要复制的文本
    //备注：火狐17.0以上版本已经不支持对粘贴板操作，所以此方法无效
    tr.copyClip = function (text) {
        if (window.clipboardData) {
            window.clipboardData.setData("Text", text);
        } else if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
                var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
                if (!clip) return;
                var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
                if (!trans) return;
                trans.addDataFlavor('text/unicode');
                var len = new Object(), str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString), copytext = text;
                str.data = copytext;
                trans.setTransferData("text/unicode", str, copytext.length * 2);
                var clipid = Components.interfaces.nsIClipboard;
                if (!clip) return false;
                clip.setData(trans, null, clipid.kGlobalClipboard);
            } catch (error) {
                //console.log("你使用的FF浏览器,复制功能被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
            }
        }
    }

    //获取URL参数
    //@param    name    String    参数名
    tr.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = (window.location.search || window.location.hash).substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return "";
    }

    /**
     * 让日期和时间按照指定的格式显示的方法
     * @method date
     * @memberOf format
     * @param {String} format 格式字符串
     * @return {String} 返回生成的日期时间字符串
     *
     * @example
     *     var d = new Date();
     *     // 以 YYYY-MM-dd hh:mm:ss 格式输出 d 的时间字符串
     *     tr.formatDate(d, "YYYY-MM-DD hh:mm:ss");
     */
    tr.formatDate = function (date, formatString) {
        if (/\d{9,10}/.test(date)) date = new Date(parseInt(date + "000"));
        if (/\d{12,13}/.test(date)) date = new Date(parseInt(date));

        var o = {
            "M+": date.getMonth() + 1,    //month
            "D+": date.getDate(),    //day
            "h+": date.getHours(),    //hour
            "m+": date.getMinutes(),    //minute
            "s+": date.getSeconds(),    //second
            "q+": Math.floor((date.getMonth() + 3) / 3),    //quarter
            "S": date.getMilliseconds()    //millisecond
        }

        if (/(Y+)/.test(formatString)) formatString = formatString.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(formatString)) {
                formatString = formatString.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return formatString;
    }

    //获取浏览器尺寸可见区域尺寸
    tr.getWinSize = function () {
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        } else if ((document.body) && (document.body.clientWidth)) {
            winWidth = document.body.clientWidth;
        }
        if (window.innerHeight) {
            winHeight = window.innerHeight;
        } else if ((document.body) && (document.body.clientHeight)) {
            winHeight = document.body.clientHeight;
        }
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
        }
        return {height: winHeight, width: winWidth}
    }

    //ping测试网络，未完善
    tr.ping = function (domain, fSuccess, fFail) {
        var img = new Image(),
            start = new Date().getTime(),
            flag = false,
            hasFinish = false,
            t;

        function startPing() {
            if (!hasFinish) {
                flag = true;
                hasFinish = true;
                img.src = 'X:\\';
                console.log('Ping ' + domain + ' success. ');
                //return "ping success";
            }
        };

        img.onload = img.onerror = startPing;
        img.src = 'http://' + domain + '/' + start;

        t = setTimeout(function () {
            if (!flag) {
                hasFinish = true;
                img.src = 'X://';
                console.log('Ping ' + domain + ' fail. ');
                //return "ping fail";
            }
        }, 1500);
    }

})();


//tr.cookie
;
(function () {
    /**
     * 设置一个cookie
     *
     * @param {String} name cookie名称
     * @param {String} value cookie值
     * @param {String} domain 所在域名
     * @param {String} path 所在路径
     * @param {Number} hour 存活时间，单位:小时
     * @return {Boolean} 是否成功
     */
    tr.setCookie = function (name, value, domain, path, hour) {
        if (hour) {
            var today = new Date();
            var expire = new Date();
            expire.setTime(today.getTime() + 3600000 * hour);
        }
        window.document.cookie = name + "=" + value + "; " + (hour ? ("expires=" + expire.toGMTString() + "; ") : "") + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
        return true;
    }

    /**
     * 获取指定名称的cookie值
     *
     * @param {String} name cookie名称
     * @return {String} 获取到的cookie值
     */
    tr.getCookie = function (name) {
        var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
        // var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*?)(?:;|$)");
        var m = window.document.cookie.match(r);
        return (!m ? "" : m[1]);
        // document.cookie.match(new
        // RegExp("(?:^|;+|\\s+)speedMode=([^;]*?)(?:;|$)"))
    }
})();

//tr.browser
;
(function () {
    var sUa = navigator.userAgent.toLowerCase();

    //取得系统平台的类型、版本
    tr.platform = function () {
        var aTmp1 = ["", ""], sName = "unkonw";
        if (sUa.indexOf("windows") > -1) {
            aTmp1 = sUa.match(/windows ([\d.]+)/);
            sName = "windows";
        }
        if (sUa.indexOf("windows nt") > -1) {
            aTmp1 = sUa.match(/windows nt ([\d.]+)/);
            sName = "windows";
        }
        if (sUa.indexOf("linux") > -1) {
            aTmp1 = sUa.match(/linux ([\d.]+)/);
            sName = "linux";
        }
        if (sUa.indexOf("mac") > -1) {
            aTmp1 = sUa.match(/mac ([\d.]+)/);
            sName = "mac";
        }
        if (sUa.indexOf("ipod") > -1) {
            aTmp1 = sUa.match(/ipod ([\d.]+)/);
            sName = "iPod";
        }
        if (sUa.indexOf("ipad") > -1) {
            aTmp1 = sUa.match(/ipad ([\d.]+)/);
            sName = "iPad";
        }
        if (sUa.indexOf("iphone") > -1) {
            aTmp1 = sUa.match(/iphone ([\d.]+)/);
            sName = "iPhone";
        }
        if (sUa.indexOf("android") > -1) {
            aTmp1 = sUa.match(/android ([\d.]+)/);
            sName = "android";
        }

        //alert(sName + " | " + aTmp1[1]);
        return {"name": sName, "version": fFixVersion(aTmp1[1])}
    };

    tr.browser = function () {
        var aTmp1 = ["", ""], sName = "unkonw";
        if (sUa.indexOf("msie") > -1) {
            aTmp1 = sUa.match(/msie ([\d.]+)/);
            sName = "ie";
        }
        if (sUa.indexOf("firefox") > -1) {
            aTmp1 = sUa.match(/firefox\/([\d.]+)/);
            sName = "firefox";
        }
        if (sUa.indexOf("chrome") > -1) {
            aTmp1 = sUa.match(/chrome\/([\d.]+)/);
            sName = "chrome";
        }
        if (sUa.indexOf("opera") > -1) {
            aTmp1 = sUa.match(/opera.([\d.]+)/);
            sName = "opera";
        }
        if (sUa.indexOf("adobeair") > -1) {
            aTmp1 = sUa.match(/adobeair\/([\d.]+)/);
            sName = "adobeAir";
        }
        if (sUa.match(/version\/([\d.]+).*safari/)) {
            aTmp1 = sUa.match(/version\/([\d.]+).*safari/);
            sName = "safari";
        }
        if (sUa.match(/version\/([\d.]+).*mobile.*safari/)) {
            aTmp1 = sUa.match(/version\/([\d.]+).*mobile.*safari/);
            sName = "mobileSafari";
        }

        //alert(sName + " | " + aTmp1[1]);
        return {
            "name": sName,
            "version": fFixVersion(aTmp1[1]),
            "ua": navigator.userAgent,
            "plug": navigator.plugins
        }
    };


    //格式化版本号显示
    function fFixVersion(ver, floatLength) {
        ver = ("" + ver).replace(/_/g, ".");
        floatLength = floatLength || 1;
        ver = String(ver).split(".");
        ver = ver[0] + "." + (ver[1] || "0");
        ver = Number(ver).toFixed(floatLength);
        return ver;
    };

    // ie6 背景图片不能被缓存的问题
    if (tr.browser.name == "ie" && tr.browser.version < 7) {
        try {
            document.execCommand('BackgroundImageCache', false, true);
        } catch (error) {
        }
    }
})();


//tr.Core
;
(function () {
    tr.isNumber = function (val) {
        if (val == "" && val != 0) return false;
        var reg = /^-?\d+\.?[\d]+?$/;
        return reg.test(val);
    }

    tr.isInt = function (val) {
        if (val == "" && val != 0) return false;
        var reg = /^-?\d+$/;
        return reg.test(val);
    }


})();
