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

        renderUI: function () {

            var that = this,
                CFG = that.cfg;

            that.boundingBox = $(
                    '<div class="window_boundingBox">' +
                    '<div class="window_header">' + CFG.title + '</div>' +
                    '<div class="window_body">' + CFG.content + '</div>' +
                    '<div class="window_footer"><input class="window_alertBtn" type="button" value="' + CFG.text4AlertBtn + '"></div>' +
                    '</div>'
            );

            if (CFG.hasMask) {
                that._mask = $('<div class="window_mask"></div>');
                that._mask.appendTo('body');
            }

            if (CFG.hasCloseBtn) {
                that.boundingBox.append('<span class="window_closeBtn">X</span>');
            }
        },

        bindUI: function () {

            var that = this,
                CFG = that.cfg;

            that.boundingBox.delegate('.window_alertBtn', 'click', function () {
                that.fire('alert');
                that.destroy();
            }).delegate('.window_closeBtn', 'click', function () {
                that.fire('close');
                that.destroy();
            });

            if (CFG.handler4AlertBtn) {
                that.on('alert', CFG.handler4AlertBtn);
            }

            if (CFG.handler4CloseBtn) {
                that.on('close', CFG.handler4CloseBtn);
            }

        },

        syncUI: function () {
            var that = this,
                CFG = that.cfg;

            that.boundingBox.css({
                width: CFG.width + 'px',
                height: CFG.height + 'px',
                left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
                top: (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
            });

            if (CFG.skinClassName) {
                that.boundingBox.addClass(CFG.skinClassName);
            }

            if (CFG.isDraggable) {
                if (CFG.dragHandle) {
                    that.boundingBox.draggable({handle: CFG.dragHandle});
                }
                that.boundingBox.draggable();
            }
        },

        destructor: function () {
            this._mask && this._mask.remove();
        },


        alert: function (cfg) {
            $.extend(this.cfg, cfg);
            this.render();
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

