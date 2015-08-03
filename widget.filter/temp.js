/**
 * http://static.paipaiimg.com/js/version/2015/05/pp.c2ccommodity.buyareaV5.20150507.js?t=20150508165250
 */
function $initItemStock(option) {
    var opt = {
        stockStr: "",
        stockDom: null,
        tagName: "li",
        tagAttr: "tag",
        checkedStr: "",
        cssConfig: {
            "selected": {
                "className": "select",
                "className1": "current"
            },
            "disabled": {
                "className": "disable",
                "className1": "disable"
            },
            "normal": {
                "className": "",
                "className1": ""
            }
        },
        onSelectChange: $empty(),
        onSelectReady: $empty(),
        onSelectNotReady: $empty()
    };
    $extend(opt, option);
    if (!opt.stockStr || !opt.stockDom) {
        return;
    }
    opt.stock = decodeStock(opt.stockStr, opt.checkedStr);
    opt.getCheckedStr = function () {
        var str = [];
        if (this.stock.attrNames && this.stock.attrNames.length) {
            for (var i = 0; i < this.stock.attrNames.length; i++) {
                var attrName = this.stock.attrNames[i];
                var attrVal = this.stock.selector[attrName];
                if (attrVal) {
                    str.push(decodeRegStr(attrName) + ":" + decodeRegStr(attrVal));
                }
            }
        } else {
            for (var i in this.stock.selector) {
                if (this.stock.selector[i]) {
                    str.push(decodeRegStr(i) + ":" + decodeRegStr(this.stock.selector[i]));
                }
            }
        }
        return str.join("|");
    }
    opt.getSkuId = function () {
        var attr = encodeRegStr(this.getCheckedStr())
            , info = this.stock.info[attr] || []
            , skuid = info[5] || '';
        return skuid;
    }
    opt.getCheckedAttr = function () {
        var attr = [];
        for (var i in this.stock.selector) {
            if (this.stock.selector[i]) {
                attr.push(decodeRegStr(this.stock.selector[i]));
            }
        }
        return attr;
    }
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
            if (readyItem) {
                count = parseInt(readyItem[3], 10);
            }
        } else {
            reg = new RegExp((reg + "~[1-9][0-9]*").replace(/\|/g, "\\|"), "g");
            var mr = this.stock.countRegStr.match(reg);
            if (mr) {
                count = 1;
            }
        }
        return count != 0;
    };
    opt.display = function () {
        var show = {}
            , reg = null
            , fobj = {}
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
                count = parseInt(readyItem[3], 10);
                price = parseFloat(readyItem[2], 10);
            }
        } else {
            reg = new RegExp((reg + "~[1-9][0-9]*").replace(/\|/g, "\\|"), "g");
            var mr = this.stock.countRegStr.match(reg);
            if (mr) {
                for (var i = 0, l = mr.length; i < l; i++) {
                    count += ~~(mr[i].match(/~(\d+)/)[1]);
                }
            }
        }
        if (count == 0)
            return;
        this.stock.count = count;
        this.stock.price = price;
        var doms = this.stockDom.getElementsByTagName(this.tagName);
        for (var i = 0, l = doms.length; i < l; i++) {
            var dom = doms[i];
            if (dom.getAttribute(this.tagAttr)) {
                var name = encodeRegStr(dom.getAttribute("attrname"))
                    , value = encodeRegStr(dom.getAttribute("attrvalue"))
                    , css = null;
                dom.className = dom.className.replace(this.cssConfig.selected.className, "").replace(this.cssConfig.disabled.className, "");
                dom.firstChild.className = dom.firstChild.className.replace(this.cssConfig.selected.className1, "").replace(this.cssConfig.disabled.className1, "");
                if (this.stock.selector[name] == value) {
                    css = this.cssConfig.selected;
                } else {
                    var sobj = {};
                    $extend(sobj, this.stock.selector);
                    sobj[name] = value;
                    if (this.hasStock(sobj)) {
                        css = this.cssConfig.nornal;
                    } else {
                        css = this.cssConfig.disabled;
                    }
                }
                if (css) {
                    $addClass(dom, css.className);
                    $addClass(dom.firstChild, css.className1);
                }
            }
        }
        if (ready) {
            this.onSelectReady(count, price);
        } else {
            this.onSelectNotReady(count, price);
        }
    };
    if (!opt.check) {
        opt.check = function () {
            var ar = [];
            for (var i in this.stock.selector) {
                if (this.stock.selector[i] == "") {
                    ar.push(decodeRegStr(i));
                }
            }
            if (ar.length) {
                alert("请您选择“" + ar.join("”、“") + "”");
                return false;
            }
            return true;
        }
    }
    if (!opt.check1) {
        opt.check1 = function () {
            var ar = [];
            for (var i in this.stock.selector) {
                if (this.stock.selector[i] == "") {
                    ar.push(decodeRegStr(i));
                }
            }
            if (ar.length) {
                return false;
            }
            return true;
        }
    }
    $addEvent(opt.stockDom, "click", function (e) {
            var t = $getTarget(e, opt.stockDom, opt.tagName);
            if (t && t.getAttribute(opt.tagAttr) && t.className.indexOf(opt.cssConfig.disabled.className) < 0) {
                var name = encodeRegStr(t.getAttribute("attrname"))
                    , value = encodeRegStr(t.getAttribute("attrvalue"));
                if (t.className.indexOf(opt.cssConfig.selected.className) > -1) {
                    opt.stock.selector[name] = "";
                } else {
                    opt.stock.selector[name] = value;
                }
                opt.display();
                opt.onSelectChange(t);
            }
        }
    );
    opt.display();
    return opt;

    // 0#颜色:港版太空灰（支持联通移动4G）|版本:4.7寸16G iPhone6~,4400.000000,19,,140742364659408;
    // 0#颜色:港版太空灰（支持联通移动4G）|版本:4.7寸64G iPhone6~,5100.000000,50,,140742364659409;
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
            if (mr) {
                var attr = {};
                var key = encodeRegStr($strTrim(mr[2]));
                var atar = key.split("|");
                var attrNames = [];
                for (var j = 0, k = atar.length; j < k; j++) {
                    var val = atar[j].split(":");
                    if (val.length >= 2) {
                        attr[val[0]] = val[1];
                        attrNames.push(val[0]);
                        if (!attrHash[val[0]])
                            attrHash[val[0]] = {};
                        attrHash[val[0]][val[1]] = 1;
                    }
                }
                if (!stock.attrNames || stock.attrNames.length < attrNames.length) {
                    stock.attrNames = attrNames;
                }
                stock.info[key] = [attr].concat(mr[3].split(","));
                countAr.push(key + "~" + ~~mr[3].split(",")[2]);
            }
        }
        stock.countRegStr = countAr.join(";");
        for (var i in stock.info) {
            var attr = stock.info[i][0];
            for (var j in attr) {
                stock.selector[j] = "";
            }
            stock.regTmp = i.replace(stockKeyReg, "$1:{#$1#}");
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
            for (var i in attrHash) {
                var ct = 0
                    , vj = "";
                for (var j in attrHash[i]) {
                    ct++;
                    vj = j;
                }
                if (ct == 1 && vj) {
                    stock.selector[i] = vj;
                }
            }
        }
        return stock;
    }

    function encodeRegStr(str) {
        if (str) {
            return str.replace(/([()*\/\\+\-.])/g, function (s) {
                    var r = s.charCodeAt(0).toString(16);
                    r = r.length < 2 ? "0" + r : r;
                    return "&&" + r;
                }
            );
        }
        return "";
    }

    function decodeRegStr(str) {
        if (str) {
            return str.replace(/&&\w\w/g, function (s) {
                    return String.fromCharCode(parseInt(s.replace("&&", ""), 16));
                }
            );
        }
    }
}

window.stocker = $initItemStock({
    stockStr: $id("stockStringNew").value,
    stockDom: $id("buyArea"),
    checkedStr: ($getQuery("stock") ? unescape($getQuery("stock")) : ""),
    cssConfig: {
        "selected": {
            "className": "pp_select",
            "className1": "cur"
        },
        "disabled": {
            "className": "pp_disabled",
            "className1": "dis"
        },
        "normal": {
            "className": "pp_normal",
            "className1": "pp_normal"
        }
    },
    displayTips: function () {
    },
    onSelectChange: function (dom) {
        if (window.stocker) {
            if (window.stocker.check1() && $(".pp_prop_key").hasClass("pp_prop_key_err")) {
                $("#pp_twoBarCode").show();
                $(".pp_prop_key_errtips").hide();
                $(".pp_prop_key").removeClass("pp_prop_key_err");
            }
        }
        if (dom && (dom.className.indexOf(this.cssConfig.selected.className) > -1)) {
            var imgsrc = dom.getAttribute("info-img300");
            if (imgsrc) {
                if (window["itempic"] && window["itempic"].setMainPic) {
                    window["itempic"].setMainPic(imgsrc);
                }
            }
        }
        BA.twoBarCode.updateCommAttr(this.getCheckedStr(), this.getSkuId());
        BA.twoBarCode.creatPhoto();
    },
    onSelectReady: function (count, price) {
        $id("currentStockNum") && ($id("currentStockNum").innerHTML = $xss(count + "", "none"));
        $id("commodityattr") && ($id("commodityattr").value = this.getCheckedStr());
        $id("stockSkuId") && ($id("stockSkuId").value = this.getSkuId());
        var selprice = price
            , discount = 1
            , pricedom = $id("commodityCurrentPrice");
        if (pricedom) {
            discount = pricedom.getAttribute('data-discount') || 1;
            selprice = $arithmetic().multiply(selprice, discount);
            selprice = parseFloat(selprice) * 100;
            selprice = selprice.toFixed(0);
            selprice = $arithmetic().multiply(parseInt(selprice), 0.01);
            if (selprice < 0.01) {
                selprice = 0.01;
            }
            if (selprice > price) {
                selprice = price;
            }
            selprice = dealPrice(selprice);
            pricedom.innerHTML = $xss(selprice, "none");
        }
        setSelectNum && setSelectNum(count);
        this.displayTips();
        if (isFirst) {
            BA.twoBarCode.updateCommAttr(this.getCheckedStr(), this.getSkuId());
            BA.twoBarCode.creatPhoto();
            isFirst = false;
        }
        BA.twoBarCode.getWetchatPrice();
        BA.twoBarCode.showBatchPrice();
        return true;
    },
    onSelectNotReady: function (count, price) {
        $id("currentStockNum") && ($id("currentStockNum").innerHTML = $xss(count + "", "none"));
        $id("commodityattr") && ($id("commodityattr").value = "");
        var pricedom = $id("commodityCurrentPrice")
        defaultVal = pricedom.getAttribute("defaultVal") || '';
        if (pricedom) {
            pricedom.innerHTML = $xss(defaultVal, "none");
        }
        setSelectNum && setSelectNum(count);
        this.displayTips();
        BA.twoBarCode.getWetchatPrice();
        BA.twoBarCode.showBatchPrice();
        return true;
    }
});