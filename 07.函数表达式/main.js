// 对于没个数组元素调用函数fn()，并返回一个结果数组
var map = Array.prototype.map ? function (arr, fn) {
    return arr.map(fn);
} : function (arr, fn) {
    var results = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (i in arr) results[i] = fn.call(null, arr[i], i, arr); // value, index, array
    }
    return results;
};

// 使用函数f()和可选的初始值将数组a减至一个值
var reduce = Array.prototype.reduce ? function (arr, fn, initial) {
    if (arguments.length > 2) { // 如果传入一个初始值
        return arr.reduce(fn, initial);
    } else {
        return arr.reduce(fn);
    }
} : function (arr, fn, initial) {
    var i = 0, len = arr.length, accumulator;

    if (arguments.length > 2) {
        accumulator = initial;
    } else { // 找到数组中第一个已定义的索引
        if (len == 0) throw TypeError();
        while (i < len) {
            if (i in arr) {
                accumulator = arr[i++];
                break;
            } else {
                i++;
            }
        }
        if (i == len) throw TypeError();
    }

    // 对于数组中剩下的元素依次调用f()
    while (i < len) {
        if (i in arr) {
            accumulator = fn.call(undefined, accumulator, arr[i], i, arr); // previousValue, currentValue, currentIndex, array
        }
        i++;
    }
    return accumulator;
};