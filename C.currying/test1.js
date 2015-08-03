function currying(fn) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(null, args.concat([].slice.call(arguments)));
    }
}

var getWife = currying(function () {
    var allWife = [].slice.call(arguments);
    console.log(allWife.join(';'));
}, '合法老婆');

getWife("大老婆", "小老婆", "俏老婆", "刁蛮老婆", "乖老婆", "送上门老婆");

getWife("超越韦小宝的老婆");


function bind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    };
}