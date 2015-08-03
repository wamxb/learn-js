/**
 * Created by zplus on 2015/5/27.
 */
// http://auction1.paipai.com/5A48CA2B00000000040100002A67DE9D?PTAG=12474.1432091603.15


$initItemStock({
    stockStr: $id("stockStringNew").value,
    stockDom: $id("j_buyArea")
});

function $initItemStock(option) {
    var opt = {
        stockStr: "",
        stockDom: null,
        tagName: "a",
        checkedStr: "",
        cssConfig: {
            "selected": "cur",
            "disabled": "dis",
            "normal": "pp_normal"
        }
    };
    $extend(opt, option);
    if (!opt.stockStr || !opt.stockDom) return;
    opt.stock = decodeStock(opt.stockStr, opt.checkedStr);
    console.log(opt.stock);
    opt.hasStock = function (fobj) {
        var count = 0
            , ready = true
            , reg = null;
        for (var i in fobj) {
            if (fobj[i] == "") {
                fobj[i] = "[^|:]+";
                ready = false;
            }
        }
        reg = $formatStr(this.stock.regTmp, fobj);
        if (ready) {
            var readyItem = this.stock.info[reg];
            readyItem && (count = parseInt(readyItem[3], 10));
        } else {
            reg = new RegExp((reg + "~[1-9][0-9]*").replace(/\|/g, "\\|"), "g");
            var mr = this.stock.countRegStr.match(reg);
            mr && (count = 1);
        }
        return count != 0;
    };
    opt.display = function () {
        var show = {}
            , reg = null
            , fobj = {} // selector
            , count = 0
            , price = 0
            , ready = true;
        $extend(fobj, this.stock.selector);
        for (var i in fobj) {
            if (fobj[i] == "") {
                fobj[i] = "[^|:]+";
                ready = false;
            }
        }
        reg = $formatStr(this.stock.regTmp, fobj);
        if (ready) {
            var readyItem = this.stock.info[reg];
            if (readyItem) {
                this.stock.readyItem = readyItem;
                price = parseFloat(readyItem[2], 10);
                count = parseInt(readyItem[3], 10);
            }
        } else {
            // "颜色:港版太空灰（支持联通移动4G）\|版本:[^\|:]+~[1-9][0-9]*"
            reg = new RegExp((reg + "~[1-9][0-9]*").replace(/\|/g, "\\|"), "g");
            var mr = this.stock.countRegStr.match(reg);
            if (mr) {
                for (var i = 0, l = mr.length; i < l; i++) {
                    count += ~~(mr[i].match(/~(\d+)/)[1]);
                }
            }
        }
        if (count == 0) return;
        this.stock.count = count;
        this.stock.price = price;
        var doms = this.stockDom.getElementsByTagName(this.tagName);
        for (var i = 0, l = doms.length; i < l; i++) {
            var dom = doms[i];
            var name = encodeRegStr(dom.getAttribute("attrname")),
                value = encodeRegStr(dom.getAttribute("attrvalue")),
                css = null;
            dom.className = dom.className.replace(this.cssConfig.selected, "").replace(this.cssConfig.disabled, "");
            if (this.stock.selector[name] == value) {
                css = this.cssConfig.selected;
            } else {
                var sobj = {};
                $extend(sobj, this.stock.selector);
                sobj[name] = value;
                css = this.cssConfig[this.hasStock(sobj) ? "normal" : "disabled"];
            }
            css && $addClass(dom, css);
        }
    };
    $addEvent(opt.stockDom, "click", function (e) {
            var t = $getTarget(e, opt.stockDom, opt.tagName);
            if (t && t.className.indexOf(opt.cssConfig.disabled) < 0) {
                var name = encodeRegStr(t.getAttribute("attrname"))
                    , value = encodeRegStr(t.getAttribute("attrvalue"));
                if (t.className.indexOf(opt.cssConfig.selected) > -1) {
                    opt.stock.selector[name] = "";
                } else {
                    opt.stock.selector[name] = value;
                }
                opt.display();
            }
        }
    );
}


// 0#颜色:港版太空灰（支持联通移动4G）|版本:4.7寸16G iPhone6~,4400.000000,19,,140742364659408;
function decodeStock(str, checkedStr) {
    var stock = {
        info: {},
        selector: {},
        countRegStr: "",
        attrNames: null,
        regTmp: ""
    };
    var attrHash = {};
    var stockInfoReg = /(\d+#)?([^~;]+)~([^~;]+)/;
    var stockKeyReg = /([^|:]+):([^|:]+)/g;
    var stockAr = str.split(";");
    var countAr = [];
    for (var i = 0, l = stockAr.length; i < l; i++) {
        var mr = stockAr[i].match(stockInfoReg);
        // mr =
        // 0: "0#颜色:港版太空灰（支持联通移动4G）|版本:4.7寸16G iPhone6~,4400.000000,19,,140742364659408"
        // 1: "0#"
        // 2: "颜色:港版太空灰（支持联通移动4G）|版本:4.7寸16G iPhone6"
        // 3: ",4400.000000,19,,140742364659408"
        // index: 0
        // input: "0#颜色:港版太空灰（支持联通移动4G）|版本:4.7寸16G iPhone6~,4400.000000,19,,140742364659408"

        if (mr) {
            var attr = {};
            var key = encodeRegStr($strTrim(mr[2])); // "颜色:港版太空灰（支持联通移动4G）|版本:4&&2e7寸16G iPhone6"
            var atAr = key.split("|"); // ["颜色:港版太空灰（支持联通移动4G）", "版本:4&&2e7寸16G iPhone6"]
            var attrNames = [];
            for (var j = 0, k = atAr.length; j < k; j++) {
                var val = atAr[j].split(":"); // ["颜色","港版太空灰（支持联通移动4G）"]
                if (val.length >= 2) {
                    attr[val[0]] = val[1]; // attr = {"颜色":"港版太空灰（支持联通移动4G）"}
                    attrNames.push(val[0]); // attrNames = ["颜色"]
                    if (!attrHash[val[0]]) {
                        attrHash[val[0]] = {}; // attrHash = {"颜色": {}}
                    }
                    attrHash[val[0]][val[1]] = 1; // attrHash = {"颜色": {"港版太空灰（支持联通移动4G）": 1}}
                }
            }
            // null或长度小的时候说明有新的属性名
            if (!stock.attrNames || stock.attrNames.length < attrNames.length) {
                stock.attrNames = attrNames; // stock.attrNames = ["颜色","版本"]
            }
            /**
             * stock.info: Object
             颜色:港版太空灰（支持联通移动4G）|版本:4&&2e7寸16G iPhone6: Array[6]
             0: {"版本": "4&&2e7寸16G iPhone6", "颜色":"港版太空灰（支持联通移动4G）"}
             1: ""
             2: "4400.000000"
             3: "19"
             4: ""
             5: "140742364659408"
             */
            stock.info[key] = [attr].concat(mr[3].split(","));
            countAr.push(key + "~" + ~~mr[3].split(",")[2]); // countAr= ["颜色:港版太空灰（支持联通移动4G）|版本:4&&2e7寸16G iPhone6~19"]
        }
    }
    stock.countRegStr = countAr.join(";"); //"颜色:港版太空灰（支持联通移动4G）|版本:4&&2e7寸16G iPhone6~19;颜色:港版太空灰（支持联通移动4G）|版本:4&&2e7寸64G iPhone6~50"
    for (var _key in stock.info) {
        var oAttr = stock.info[_key][0];
        for (var _attr in oAttr) {
            stock.selector[_attr] = ""; // stock.selector = {"颜色": "", "版本":""}
        }
        stock.regTmp = _key.replace(stockKeyReg, "$1:{#$1#}"); // stock.regTmp = "颜色:{#颜色#}|版本:{#版本#}"
        break;
    }
    if (checkedStr) {
        var t = checkedStr.split("|");
        for (var i = 0; i < t.length; i++) {
            t[i] = t[i].split(":");
            var kk = encodeRegStr(t[i][0]);
            var vv = encodeRegStr(t[i][1]);
            if (kk && vv) {
                if (attrHash[kk] && attrHash[kk][vv]) {
                    stock.selector[kk] = vv;
                }
            }
        }
    } else {
        /**
         * attrHash: Object
         版本: Object
         4&&2e7寸16G iPhone6: 1
         4&&2e7寸64G iPhone6: 1
         颜色: Object
         日版有锁太空灰&&28联通移动2G电信4G &&29: 1
         日版有锁版金色&&28联通移动2G电信4G &&29: 1
         */
        for (var _hash in attrHash) { // _hash = "颜色"
            var ct = 0,
                vj = "";
            for (var j in attrHash[_hash]) {
                ct++;
                vj = j;
            }
            if (ct == 1 && vj) {
                stock.selector[_hash] = vj;
            }
        }
    }
    return stock;
}

// "." ==> "&&2e"
function encodeRegStr(str) {
    if (!str) return "";
    return str.replace(/([()*\/\\+\-.])/g, function (s) {
            var r = s.charCodeAt(0).toString(16);
            r = r.length < 2 ? '0' + r : r;
            return '&&' + r;
        }
    );
}

// "&&2e" ==> "."
function decodeRegStr(str) {
    if (!str) return '';
    return str.replace(/&&\w\w/g, function (s) {
            return String.fromCharCode(parseInt(s.replace('&&', ''), 16));
        }
    );
}

/**
 * 去掉字符串起始和结尾的空格，如果不传code参数的话
 * @param str 字符串
 * @param code 要去掉的字符串
 * @returns {*}
 */
function $strTrim(str, code) {
    var argus = code || "\\s";
    var temp = new RegExp("(^" + argus + "*)|(" + argus + "*$)", "g");
    return str.replace(temp, "");
}

function $extend() {
    var target = arguments[0] || {},
        options;
    (typeof target != "object" && typeof target != "function") && (target = {});
    for (var i = 1, length = arguments.length; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (var name in options) {
                var copy = options[name];
                if (target === copy) continue;
                (copy !== undefined) && (target[name] = copy);
            }
        }
    }
    return target;
}

// "颜色:{#颜色#}|版本:{#版本#}" ==> "颜色:港版太空灰（支持联通移动4G）|版本:[^|:]+"
function $formatStr(str, obj, replaceIfUnfind) {
    if (!str) return "";
    (typeof replaceIfUnfind == "undefined") && (replaceIfUnfind = true);
    str = str.replace(/{#([^#]+)#}/g, function (a, b) {
        return typeof obj[b] != "undefined" ? obj[b] : replaceIfUnfind ? "" : a;
    });
    return str;
}

function $id(id) {
    return typeof (id) == "string" ? document.getElementById(id) : id;
}

function $addEvent(obj, type, handle) {
    if (!obj || !type || !handle) return;
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
        };
    }

    function createDelegate(handle, context) {
        return function () {
            return handle.apply(context, arguments);
        };
    }

    if (window.addEventListener) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper);
        obj.addEventListener(type, wrapper, false);
    } else if (window.attachEvent) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper);
        obj.attachEvent("on" + type, wrapper);
    } else {
        obj["on" + type] = handle;
    }
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


function $addClass(ids, cName) {
    $setClass(ids, cName, "add");
}
function $hasClass(old, cur) {
    if (!old || !cur)
        return null;
    var arr = (typeof old == 'object' ? old.className : old).split(' ');
    for (var i = 0, len = arr.length; i < len; i++) {
        if (cur == arr[i]) {
            return cur;
        }
    }
    return null;
}

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