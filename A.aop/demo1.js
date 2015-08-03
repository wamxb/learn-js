/**
 * Function: javascript AOP的实现
 * From: http://www.cnblogs.com/rubylouvre/archive/2009/08/08/1541578.html
 *
 */

function Person() {
    this.say = function (name) {
        console.log(name + ': 高谈阔论……');
    };
    this.cry = function () {
        console.log('鬼哭神嚎');
    };
    this.round = function () {
        console.log('天地无用');
    };
}

Aspects = function () {
};

Aspects.prototype = {
    before: function (target, method, advice) {
        var original = target[method];
        target[method] = function () {
            (advice)();
            original.apply(target, arguments);
        };
        return target;
    },
    after: function (target, method, advice) {
        var original = target[method];
        target[method] = function () {
            original.apply(target, arguments);
            (advice)();
        };
        return target;
    },
    around: function (target, method, advice) {
        var original = target[method];
        target[method] = function () {
            (advice)();
            original.apply(target, arguments);
            (advice)();
        };
        return target;
    }
};

window.onload = function () {
    var t = new Person();
    var a = new Aspects;
    t = a.before(t, 'say', function () {
         console.log('下面有请：');
    });
    console.log('=========');
    t.say('zplus');
};