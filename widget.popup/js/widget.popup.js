/**
 * �����¼�
 * @example:
 var popup = new Popup({
       // �¼�����
       triggerObj: document.getElementById('j_btn'),
       // ��������
       type: 'error',
       // ��Ϣ����
       msg: '��������������<br>�ظ��������⽱��'
   });
 */
!(function (win, undefined) {
    var body = document.body;
    var doc = document.documentElement;
    var eventType = 'ontouchend' in document ? 'touchstart' : 'click';

    var Popup = function (opt) {
        var self = this;
        this.triggerObj = opt.triggerObj;
        try {
            this.triggerObj.addEventListener(eventType, function () {
                self.init();
                self.show();
            });
        } catch (e) {
            console.log(e);
        }
        this.type = opt.type || 'error';
        this.msg = opt.msg || 'δ����';
    };

    Popup.prototype = {
        constructor: Popup,
        version: '0.0.1',
        init: function () {
            this.size();
            this.el = document.createElement('div');
            this.el.innerHTML = '<div class="popup-mask" style="top:' + this.top + '">' +
            '<div class="popup-wrap">' +
            '<i class="icon"></i>' +
            '<p class="popup-txt">' + this.msg + '</p>' +
            '<a href="javascript:;" class="btn-close">OK</a>' +
            '</div>' +
            '</div>';
            this.el.classList.add(this.type);
            body.appendChild(this.el);
            this.closeBtn = this.el.querySelector('.btn-close');
            this.mask = this.el.querySelector('.popup-mask');
            this.events('bind');
        },
        size: function () {
            this.top = (body.scrollTop || doc.scrollTop) + 'px';
        },
        show: function () {
            this.el.classList.add('active');
        },
        hide: function () {
            this.el.parentNode.removeChild(this.el);
            this.events('off');
            delete this;
        },
        events: function (type) {
            var self = this;
            this.closeBtn[type == 'bind' ? 'addEventListener' : 'removeEventListener'](eventType, function () {
                self.hide();
            }, false);
            this.mask[type == 'bind' ? 'addEventListener' : 'removeEventListener']('touchmove', function (e) {
                e.preventDefault();
            }, false);
        }
    };

    win.Popup = Popup;
})(window);