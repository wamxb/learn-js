var whenReady = (function () {
    var fns = [];
    var isReady = false;

    function handler(e) {
        if (isReady) return;

        if (e.type == 'readystatechange' && document.readyState !== 'complete') return;

        for (var i = 0; i < fns.length; i++) {
            fns[i].call(document);
        }

        isReady = true;
        fns = null;
    }

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', handler, false);
        document.addEventListener('readystatechange', handler, false);
        document.addEventListener('load', handler, false);
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', handler);
        document.attachEvent('onload', handler);
    }

    return function whenReady(f) {
        if (isReady) {
            f.call(document);
        } else {
            fns.push(f);    // 否则，加入队列等候
        }
    };

}());