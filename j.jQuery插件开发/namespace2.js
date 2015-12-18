/**
 * 通过闭包和Object实现
 */
window.NS = window.NS || {};
NS.Hello = (function () {

    var self = {};
    // 私有
    var name = 'world';
    // 公有
    self.sayHello = function (_name) {
        console.log('Hello ' + (_name || name));
    };
    return self;
}());
//    NS.Hello.sayHello();


/**
 * Object和闭包的改进型写法
 */
window.NS = window.NS || {};
NS.Hello2 = (function () {
    var name = 'world';

    var sayHello = function (_name) {
        console.log('Hello ' + (_name || name));
    };

    return {
        sayHello: sayHello
    };
}());
//    NS.Hello2.sayHello('js');

/**
 * Function的简洁写法
 */
window.NS = window.NS || {};
NS.Hello3 = new function () {
    var self = this;
    var name = 'world';
    self.sayHello = function (_name) {
        console.log('Hello ' + (_name || name));
    };
};
NS.Hello3.sayHello('Function的简洁写法');