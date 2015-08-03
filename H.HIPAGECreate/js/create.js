!(function (win, undefined) {


    var Create = function () {
        this.$mainc = document.querySelector('.g-mainc');
        this.buildAnimateControl();
    };

    Create.prototype = {
        constructor: Create,
        version: '0.0.1',
        buildAnimateControl: function () {
            var effects = [
                {
                    "index": 1,
                    "name": "",
                    "desc": "无动画"
                },
                {
                    "index": 2,
                    "name": "fromleft",
                    "desc": "从左飞入"
                },
                {
                    "index": 3,
                    "name": "frombottom",
                    "desc": "从下飞入"
                },
                {
                    "index": 4,
                    "name": "fromright",
                    "desc": "从右飞入"
                },
                {
                    "index": 5,
                    "name": "fromtop",
                    "desc": "从上飞入"
                },
                {
                    "index": 6,
                    "name": "fade",
                    "desc": "淡出"
                },
                {
                    "index": 7,
                    "name": "rotation",
                    "desc": "旋转"
                },
                {
                    "index": 8,
                    "name": "rotation2d",
                    "desc": "旋转2D"
                },
                {
                    "index": 9,
                    "name": "bounceIn",
                    "desc": "跳跃"
                },
                {
                    "index": 10,
                    "name": "show",
                    "desc": "从大到小"
                },
                {
                    "index": 11,
                    "name": "small2big",
                    "desc": "从小到大"
                },
                {
                    "index": 12,
                    "name": "fadeFromLeft",
                    "desc": "从左淡出"
                },
                {
                    "index": 13,
                    "name": "fadeFromBottom",
                    "desc": "从下淡出"
                },
                {
                    "index": 14,
                    "name": "fadeFromRight",
                    "desc": "从右淡出"
                },
                {
                    "index": 15,
                    "name": "fadeFromTop",
                    "desc": "从上淡出"
                },
                {
                    "index": 16,
                    "name": "light",
                    "desc": "闪烁"
                }
            ];

            var div = document.createElement('div');
            div.className = 'animate-control';
            //div.classList.add('fn-vhide');

            var htmlStr = '<ul class="effects fn-clear">';
            effects.forEach(function (el, i, arr) {
                htmlStr += '<li class="effect-item fn-left">' +
                '<div class="effect-obj" data-effect-name="' + el['name'] + '" data-effect-desc="' + el['desc'] + '"></div>' +
                '</li>';
            });
            htmlStr += '<div class="input-bar duration-time">' +
            '<span class="icon">&nbsp;</span>' +
            '<span class="text">持续时间:</span>' +
            '<input type="number" step="0.1" min="0" class="num">' +
            '</div> <div class="input-bar delay-time">' +
            '<span class="icon">&nbsp;</span>' +
            '<span class="text">延迟时间:</span>' +
            '<input type="number" step="0.1" min="0" class="num">' +
            '</div>';
            div.innerHTML = htmlStr;

            this.$mainc.appendChild(div);
            this.$duration = div.querySelector('.duration-time .num');

        },
        select: function () {

        },
        updateAttr: function () {

        }
    };
    win.Create = Create;


    var create = new win.Create();
})(window);