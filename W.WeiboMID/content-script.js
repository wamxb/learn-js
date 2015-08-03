var clip = document.createElement('input');
var sStyle =
    'border: none;' +
    'background: #fff;' +
    'font-size: 12px;' +
    'line-height: 1;' +
    'outline: none;' ;
clip.setAttribute('style', sStyle);

var timeoutId = null;
window.addEventListener('mouseover', function (event) {
    timeoutId && clearTimeout(timeoutId);
    setTimeout(function () {
        var target = event.target;
        if (target && target.nodeName == 'DIV') {
            if ((target.className.indexOf('WB_text') > -1) && (target.getAttribute('node-type') == 'feed_list_content')) {
                var WB_wrap = target.parentNode.parentNode.parentNode;
                var mid = WB_wrap.getAttribute("mid");
                if (mid) {
                    var WB_info = WB_wrap.querySelector('.WB_text');
                    WB_info.appendChild(clip);
                    clip.setAttribute('value', mid);
                    clip.select();
                    clip.focus();
                    document.execCommand('copy');
                }
            }
        }
    }, 200);

    /*        if (classes) {
     for (var x = 0; x < classes.length; x++) {
     if (classes[x] == "W_face_radius") {
     var WB_wrap = target.parentNode.parentNode.parentNode.parentNode.parentNode;
     var mid = WB_wrap.getAttribute("mid");
     if (mid) {
     var WB_info = WB_wrap.querySelector('.WB_info');
     WB_info.appendChild(clip);
     clip.setAttribute('value', mid);
     clip.select();
     clip.focus();
     document.execCommand('copy');
     }
     }
     }
     }*/
});