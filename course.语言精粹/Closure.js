/**
 * 好处：内部函数可以访问定义它们的外部函数的参数和变量(除了 this，argument）
 *
 * 内部函数拥有比它的外部函数更长的生命周期
 *
 *
 */

var myObject = (function(){
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function(){
            return value;
        }
    };
}());

var fade = function(node) {
    var level = 1;
    var step = function(){
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);