// 识别呈现引擎
var client = function () {
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,

        // 具体的版本
        ver: null
    };

    var browser = {
        ie: 0,
        firefox: 0,
        safari: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        // 具体的版本
        ver: null
    };

    // 识别平台
    var system = {
        win: false,
        mac: false,
        x11: false,

        //移动设备
        iphone: false,
        ipod: false,
        ipad: false,
        ios: false,
        android: false,
        nokiaN: false,
        winMobile: false
    };

    // 要正确识别，检测顺序很关键
    var ua = navigator.userAgent;
    if (window.opera) {
        engine.ver = browser.ver = window.opera.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
    } else if (/AppleWebKit\/(\S+)/.test(ua)) {
        engine.ver = RegExp['$1'];
        engine.webkit = parseFloat(engine.ver);

        // 确定是Chrome还是safari
        if (/Chrome\/(\S+)/.test(ua)) {
            // "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
            browser.ver = RegExp['$1'];
            browser.chrome = parseFloat(browser.ver);
        } else if (/Version\/(\S+)/.test(ua)) {
            // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.4.4 (KHTML, like Gecko) Version/9.0.3 Safari/601.4.4"
            browser.ver = RegExp['$1'];
            browser.safari = parseFloat(browser.ver);
        } else {
            // 近似地确定版本号
            var safariVersion = 1;
            if (engine.webkit < 100) {
                safariVersion = 1;
            } else if (engine.webkit < 312) {
                safariVersion = 1.2;
            } else if (engine.webkit < 412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            }
            browser.safari = browser.ver = safariVersion;
        }

    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
        engine.ver = browser.ver = RegExp['$1'];
        engine.khtml = browser.konq = parseFloat(engine.ver);
    } else if (/rv:([^\)])+\) Gecko\/\d{8}/.test(ua)) {
        // "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0"
        engine.ver = RegExp['$1'];
        engine.gecko = parseFloat(engine.ver);

        if (/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp['$1'];
            browser.firefox = parseFloat(browser.ver);
        }
    } else if (/MSIE ([^;]+)/.test(ua)) {
        // "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)"
        engine.ver = browser.ver = RegExp['$1'];
        engine.ie = browser.ie = parseFloat(engine.ver);
    }

    var p = navigator.platform;
    system.win = p.indexOf('Win') == 0;
    system.mac = p.indexOf('Mac') == 0;
    system.x11 = (p.indexOf('X11') == 0) || (p.indexOf('Linux') == 0);
    system.iphone = ua.indexOf('iPhone') > -1;
    system.ipod = ua.indexOf('iPod') > -1;
    system.ipad = ua.indexOf('iPad') > -1;

    // 检测IOS版本
    if (system.mac && ua.indexOf('Mobile') > -1) {
        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
            system.ios = parseFloat(RegExp.$1.replace('_', '.'));
        } else {
            system.ios = 2;
        }
    }

    // determine Android version
    if (/Android (\d+\.\d+)/.test(ua)) {
        system.android = parseFloat(RegExp.$1);
    }
    return {
        engine: engine,
        browser: browser,
        system: system
    };
}();