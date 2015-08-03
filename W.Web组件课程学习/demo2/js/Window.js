/**
 + ---------------------------------------- +
 +
 + By: zplus
 + ---------------------------------------- +
 + Date: 2014/7/19
 + Update:
 + ---------------------------------------- +
 **/
define(['jquery', 'jqueryUI', 'widget'], function ($, $UI, widget) {
    function Window() {
        this.cfg = {
            width: 500,
            height: 300,
            title: '系统消息',
            content: '',
            hasCloseBtn: false,
            skinClassName: null,
            handler4AlertBtn: null,
            text4AlertBtn: '确定',
            handler4CloseBtn: null,
            hasMask: true,
            isDraggable: true,
            dragHandle: null
        };
    }

    Window.prototype = $.extend({}, new widget.Widget(), {

        alert: function (cfg) {
            var CFG = $.extend(this.cfg, cfg);

            var boundingBox = $('<div class="window_boundingBox">' +
                    '<div class="window_header">' + CFG.title + '</div>' +
                    '<div class="window_body">' + CFG.content + '</div>' +
                    '<div class="window_footer"><input class="window_alertBtn" type="button" value="' + CFG.text4AlertBtn + '"></div></div>'),
                btn = boundingBox.find('.window_alertBtn'),
                mask = null,
                that = this;

            boundingBox.appendTo('body');

            if (CFG.hasMask) {
                mask = $('<div class="window_mask"></div>');
                mask.prependTo('body');
            }

            boundingBox.css({
                width: CFG.width + 'px',
                height: CFG.height + 'px',
                left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
                top: (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
            });

            btn.on('click', function () {
                boundingBox.remove();
                mask && mask.remove();
                that.fire('alert');
            });

            if (CFG.hasCloseBtn) {
                var closeBtn = $('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(boundingBox);
                closeBtn.on('click', function () {
                    boundingBox.remove();
                    mask && mask.remove();
                    that.fire('close');
                });
            }

            if (CFG.handler4AlertBtn) {
                this.on('alert', CFG.handler4AlertBtn);
            }

            if (CFG.handler4CloseBtn) {
                this.on('close', CFG.handler4CloseBtn);
            }

            if (CFG.skinClassName) {
                boundingBox.addClass(CFG.skinClassName);
            }

            if (CFG.isDraggable) {
                if (CFG.dragHandle) {
                    boundingBox.draggable({handle: CFG.dragHandle});
                }
                boundingBox.draggable();
            }

            return this;
        },

        confirm: function () {
            console.log('confirm');
        },

        prompt: function () {
            console.log('prompt');
        }
    });

    return {
        Window: Window
    }
});

