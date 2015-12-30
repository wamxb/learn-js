/**
 * shake
 * @param el {Object || String} 元素对象或者元素的id
 * @param oncomplete {Function} 动画结束时调用
 * @param distance {Number} 震动的距离
 * @param time {Number} 震动的时间
 */
function shake(el, oncomplete, distance, time) {
    if (typeof el === 'string') el = document.getElementById(el);
    time = time || 500;
    distance = distance || 5;

    var originalStyle = el.style.cssText;
    el.style.position = 'relative';
    var start = new Date().getTime();
    animate();

    function animate() {
        var now = new Date().getTime();
        var elapsed = now - start;  // 从开始以来消耗了多长时间
        var fraction = elapsed / time; // 是总时间的几分之几

        if (fraction < 1) { // 动画未完成
            // 作为动画完成比例的函数，计算e的x位置
            // 使用正弦函数将完成比例*4pi
            // 所以，它来回往复两次
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            el.style.left = x + 'px';

            // 在25ms或最后的尝试再次运行函数
            // 目的是产生40帧/s的动画
            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            el.style.cssText = originalStyle; // 恢复原始样式
            oncomplete && oncomplete(el);
        }
    }
}