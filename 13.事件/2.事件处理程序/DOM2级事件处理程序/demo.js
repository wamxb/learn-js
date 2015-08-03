/**
 * Created by zplus on 2015/6/4.
 */

var obj = {
    init: function () {
        var btn = document.getElementById('myBtn');
        btn.addEventListener('click', this, fasle);
        btn.addEventListener('touchstart', this, fasle);
    },
    handleEvent: function (e) {
        switch (e.type) {
            case 'click':
                this.action();
                break;
            case 'touchstart':
                this.action();
                break;
        }
    },
    action: function () {
        console.log('Click or touched!');
    }
};

obj.init();


function registerObjectEventHandler(element, eventType, listener, captures) {
    element.addEventListener(eventType, function (event) {
        listener.handleEvent(event);
    }, captures);
}

// 参考：http://mangguo.org/addeventlistener-and-handleevent/
// http://www.thecssninja.com/javascript/handleevent
function on(el, ev, fn, bubble) {
    if (el.addEventListener) {
        try {
            el.addEventListener(ev, fn, bubble);
        } catch (e) { // 黑莓等系统不支持 handleEvent 方法
            if (typeof fn == 'object' && fn.handleEvent) {
                el.addEventListener(ev, function (e) {
                    // 以第一参数为事件对象
                    fn.handleEvent.call(fn, e);
                })
            }
        }
    } else if (el.attachEvent) {
        // 检测参数是否拥有 handleEvent 方法
        if (typeof fn == 'object' && fn.handleEvent) {
            el.attachEvent('on' + ev, function (e) {
                fn.handleEvent.call(fn, e);
            });
        } else {
            el.attachEvent('on' + ev, fn);
        }
    }
}