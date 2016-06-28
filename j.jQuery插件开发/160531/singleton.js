var singleton = function (fn) {
    var result; // 寄存 div 的引用
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

// 桥接模式
var createMask = singleton(function () {
    return document.body.appendChild(document.createElement('div'));
});

// 策略模式 定义一系列的算法,把它们一个个封装起来,并且使它们可相互替换