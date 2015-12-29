/**
 * drag.js 拖动绝对定位的HTML元素
 * @param elementToDrag
 * @param event
 */
function drag(elementToDrag, event) {
    // 初始化鼠标位置,转为文档坐标
    var scroll = getScrollOffsets();
    var startX = event.clientX + scroll.x;
    var startY = event.clientY + scroll.y;

    // 在文档坐标下,待拖动元素的坐标
    var origX = elementToDrag.offsetLeft;
    var origY = elementToDrag.offsetTop;

    // 计算 mousedown 事件和元素左上角之间的距离
    var deltaX = startX - origX;
    var deltaY = startY - origY;

    if (document.addEventListener) {
        document.addEventListener('mousemove', moveHandler, true);
        document.addEventListener('mouseup', upHandler, true);
    } else if (document.attachEvent) { // 用于IE5~8的IE事件模式
        // 在 IE事件模型中,捕获是通过调用元素的 setCapture()捕获它们
        elementToDrag.setCapture();
        elementToDrag.attachEvent('onmousemove', moveHandler);
        elementToDrag.attachEvent('onmouseup', upHandler);
        // 作为mouseup事件看待鼠标捕获的丢失
        elementToDrag.attachEvent('onlosecapture', upHandler);
    }

    // 阻止事件传播
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    // 阻止默认操作
    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    function moveHandler(e) {
        if (!e) e = window.event;

        var scroll = getScrollOffsets();
        elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + 'px';
        elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + 'px';
        // 阻止事件传播
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    }

    function upHandler(e) {
        if (!e) e = window.event;

        if (document.removeEventListener) {
            document.removeEventListener('mousemove', moveHandler, true);
            document.removeEventListener('mouseup', upHandler, true);
        } else if (document.detachEvent) {
            elementToDrag.detachEvent('onlosecapture', upHandler);
            elementToDrag.detachEvent('onmousemove', moveHandler);
            elementToDrag.detachEvent('onmouseup', upHandler);
            elementToDrag.releaseCapture();
        }
        // 阻止事件传播
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    }
}