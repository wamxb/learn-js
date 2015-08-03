/**
 * 用AOP改善javascript代码
 * http://www.2cto.com/kf/201311/254838.html
 */

/**
 1, 防止window.onload被二次覆盖.
 2，无侵入的统计代码.
 3, 分离表单请求和校验.
 4，给ajax请求动态添加参数.
 5，职责链模式.
 6, 组合代替继承.
 */

Function.prototype.before = function (fn) {
    var me = this;
    return function () {
        var ret = fn.apply(this, arguments);
        if (ret === false) {
            return false;
        }
        return me.apply(this, arguments);
    }
};

Function.prototype.after = function (fn) {
    var me = this;
    return function () {
        var ret = me.apply(this, arguments);
        if (ret) {
            return ret;
        }
        return fn.apply(this, arguments);
    }
};

/**
 * 防止window.onload被二次覆盖.
 */
/*window.onload = function () {
 console.log(1);
 };
 window.onload = (window.onload || function () {
 }).after(function () {
 console.log(2);
 });
 window.onload = (window.onload || function () {
 }).before(function () {
 console.log(0);
 });*/

/**
 * 无侵入的统计代码.
 */
/*var append_doms = function () {
 var oFrag = document.createDocumentFragment();
 for (var i = 0; i < 1000; i++) {
 var div = document.createElement('div');
 var text = document.createTextNode(i);
 div.appendChild(text);
 oFrag.appendChild(div);
 }
 document.body.appendChild(oFrag);
 };

 var log_time = function (fn, fn_name) {
 return fn = (function () {
 var d;
 return fn.before(function () {
 d = +new Date();
 console.log(d);
 }).after(function () {
 console.log(fn_name, +new Date() - d);
 });
 })();
 };
 append_doms = log_time(append_doms, 'append_doms');
 append_doms();*/

/**
 * 分离表单请求和校验
 */
/*var validata_rules = {
 not_empty: function (value) {
 return value.length !== '';
 },
 max_length: function (value) {
 return value.length > length;
 }
 };

 var validata = function () {
 for (var i in validata_rules) {
 if (validata_rules[i].apply(this, arguments) == false) {
 return false;
 }
 }
 };

 var send = function (value) {
 if (validata(value) === false) {
 return;
 }
 form.submit();
 };*/

/**
 * 给ajax请求动态添加参数
 */
/*var send = function (type, param) {
 console.dir(param);
 Ajax[type].send(param);
 };

 send = send.before(function (type, param) {
 param.retype = tyep;
 });*/


/**
 * 职责链模式
 */
/*var get_plugin = function () {
 try {
 return new ActiveXObject('TXFTNActiveX.FTNUpload');
 }
 };
 var get_html5 = function () {

 };
 var get_flash = function () {

 };
 var get_form = function () {

 };
 var upload_obj = get_plugin.after(get_html5).after(get_flash).after(get_form);*/


function Person() {
    this.say = function (name) {
        console.log(name + ': 高谈阔论……');
    };
}

var p = new Person();

var say = p.say.after(function () {
    console.log('end...');
}).before(function () {
    console.log('before');
});
say('zplus');