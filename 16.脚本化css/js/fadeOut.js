function fadeOut(el, onComplete, time) {
    if (typeof el == 'string') el = document.getElementById(el);
    time = time || 500;
    var ease = Math.sqrt;

    var start = new Date().getTime();
    animate();

    function animate() {
        var elapsed = new Date().getTime() - start;
        var fraction = elapsed / time;
        if (fraction < 1) {
            var opacity = 1 - ease(fraction);
            el.style.opacity = String(opacity);
            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            el.style.opacity = '0';
            onComplete && onComplete(el);
        }
    }
}