/*
* @Author: zplus
* @Date:   2016-07-04 19:37:44
* @Last Modified by:   zplus
* @Last Modified time: 2016-07-16 11:42:06
*/

'use strict';


/**
 * 原型链继承
 * @param  {[type]} p [description]
 * @return {[type]}   [description]
 */
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) return Object.create(p);
    var t = typeof p;
    if (t !== 'object' && t !== 'function') throw TypeError();
    function f(){};
    f.prototype = p;
    return new f();
}



/**
 * 遍历属性中的属性，依次删除
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function delProperty(obj) {
    if (!obj) throw TypeError();
    if (typeof obj != 'object') return;
    for (var p in obj) {
        delProperty(obj[p]);
    }
    delete obj[p];
}


/**
 * 把 p中的可枚举属性赋值到 o中，返回o
 */
// function extend(o, p) {
//     if (typeof o !== 'object' || o === null){
//         o = {};
//     }
//     for (var prop in p) {
//         o[prop] = p[prop];
//     }
//     return o;
// }
var extend = (function(){
    for (var p in {toString: null}) {
        return function extend(o){
            for (var i = 0; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) o[prop] = source[prop];
            }
            return o;
        }
    }
    return function patched_extend(o) {
        for (var i = 0; i < arguments.length; i++) {
            var source = arguments[i];
            for (var prop in source) o[prop] = source[prop];
            for (var j = 0; j < protoprops.length; j++) {
                prop = protoprops[j];;
                if (source.hasOwnProperty(prop)) o[prop] = source[prop];
            }
        }
        return o;
    }
    var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocalString'];
}());


Object.defineProperty(Object.prototype, 'extend', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(o) {
        // 得到所有自有属性，包括不可枚举属性
        var names = Object.getOwnPropertyNames(o);
        for (var i=0; i<names.length; i++) {
            if (names[i] in this) continue;
            var des = Object.getOwnPropertyDescriptor(o, names[i]);
            // 用它给 this 创建一个属性
            Object.defineProperty(this, names[i], des);
        }
    }
})

/**
 * 将 p中的可枚举属性(且不与 o同名的属性)复制到o中，并返回o
 */
function merge(o, p) {
    for (var prop in p) {
        if (o.hasOwnProperty(prop)) continue;
        o[prop] = p[prop];
    }
    return o;
}

/**
 * 删除o与 p不同名属性部分,返回o
 * 限制
 */
function restrict(o, p) {
    for (var prop in o) {
        if (!(prop in p)) delete o[prop];
    }
    return o;
}

/**
 * 删除与 p同名的属性部分
 * 减去
 */
function subtract(o, p) {
    for (var prop in o) {
        if (prop in p) delete o[prop];
    }
    return o;
}

/**
 * 返回一个新对象，这个对象同时拥有 o和 p的属性
 * 如果 o和 p有重名属性，则用 p的
 * 联盟
 */
function union(o, p) {
    return extend(extend({}, o), p);
}


/**
 * 返回一个新对象，包含 o和 p共同的属性名，值用 o部分
 * 交叉
 */
function intersection(o, p) {
    return restrict(extend({}, o), p);
}

/**
 * 返回一个数组，这个数组包含的是 o中可枚举的自有属性的名字
 */
function keys(o) {
    if (typeof o !== 'object') throw TypeError;
    var arr = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop)) {
            arr.push(prop);
        }
    }
    return arr;
}


function classof(o) {
    if (o === null) return 'Null';
    if (o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8, -1);
}
