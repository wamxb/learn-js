/**
 * 把内容元素放到一个指定大小(最小50x50)的窗体或视口内
 * 允许平移元素和缩放窗体
 * @param content
 * @param framewidth
 * @param frameheight
 * @param contentX 内容相对于窗体的偏移量，(必须<=0)
 * @param contentY
 */
function enclose(content, framewidth, frameheight, contentX, contentY) {
    framewidth = Math.max(framewidth, 50);
    frameheight = Math.max(frameheight, 50);
    contentX = Math.min(contentX, 0) || 0;
    contentY = Math.min(contentY, 0) || 0;

    // 创建frame元素
    var frame = document.createElement('div');
    frame.className = 'enclosure';
    frame.style.width = framewidth + 'px';
    frame.style.height = frameheight + 'px';
    frame.style.overflow = 'hidden';
    frame.style.boxSizing = 'border-box';
    frame.style.webkitBoxSizing = 'border-box';
    frame.style.mozBoxSizing = 'border-box';

    // 把frame放入文档中，并把内容移入frame中
    content.parentNode.insertBefore(frame, content);
    frame.appendChild(content);

    // 确定内容相对于frame的位置
    content.style.position = 'relative';
    content.style.left = contentX + 'px';
    content.style.top = contentY + 'px';

    var isMacWebkit = (navigator.userAgent.indexOf('Macintosh') !== -1 && navigator.userAgent.indexOf('Webkit') !== -1);
    var isFirefox = (navigator.userAgent.indexOf('Gecko') !== -1);

    // 注册mousewheel事件处理程序
    frame.onwheel = wheelHandler; // 未来浏览器
    frame.onmousewheel = wheelHandler;  // 大多数当前浏览器
    if (isFirefox) frame.addEventListener('DOMMouseScroll', wheelHandler, false);


    function wheelHandler(event) {
        var e = event || window.event;

        // 查找wheel事件对象,mousewheel事件对象和Firefox的DOMMouseScroll事件对象的属性
        // 一次鼠标滚轮“单击”相对于屏幕的缩放增量是30像素
        var deltaX = e.deltaX * -30 || // wheel事件
            e.wheelDeltaX / 4 ||    // mousewheel
            0;  // 属性未定义

        var deltaY = e.deltaY * -30 ||
            e.wheelDeltaY / 4 ||
            (e.wheelDeltaY === undefined && e.wheelDelta / 4) ||
            e.detail * -10 ||
            0;

        if (isMacWebkit) {
            deltaX /= 30;
            deltaY /= 30;
        }

        // 如果未来的版本的Firefox中得到mousewheel或wheel事件，就不需要DOMMouseScroll
        if (isFirefox && e.type !== 'DOMMouseScroll') frame.removeEventListener('DOMMouseScroll', wheelHandler, false);

        // 获取内容元素的当前尺寸
        var contentbox = content.getBoundingClientRect();
        var contentwidth = contentbox.right - contentbox.left;
        var contentheight = contentbox.bottom - contentbox.top;

        if (e.altKey) { // 如果按下Alt键，就可以调整frame大小
            if (deltaX) {
                framewidth -= deltaX;
                framewidth = Math.min(framewidth, contentwidth);    // 不能比内容大
                framewidth = Math.max(framewidth, 50);  // 不能比50小
                frame.style.width = framewidth + 'px';  // 在frame上设置它
            }
            if (deltaY) {
                frameheight -= deltaY;
                frameheight = Math.min(frameheight, contentheight);
                frameheight = Math.max(frameheight - deltaY, 50);
                frame.style.height = frameheight + 'px';
            }
        } else { // 没有按下Alt键，就可以平移frame中的内容
            if (deltaX) {
                var minoffset = Math.min(framewidth - contentwidth, 0);
                contentX = Math.max(contentX + deltaX, minoffset);  // 不能小于minoffset
                contentX = Math.min(contentX, 0);   // 或比0大
                content.style.left = contentX + 'px'; // 设置偏移量
            }
            if (deltaY) {
                var minoffset = Math.min(frameheight - contentheight, 0);
                contentY = Math.max(contentY + deltaY, minoffset);
                contentY = Math.min(contentY, 0);
                content.style.top = contentY + 'px';
            }
        }

        e.preventDefault ? e.preventDefault() : e.cancelBubble = true;
        e.stopPropagation ? e.stopPropagation() : e.returnValue = false;
        return false; // 对于设置JavaScript对象属性为事件处理程序（如：“onclick）来讲
    }
}