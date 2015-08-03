/**
 * Dialog
 */
;(function($, window) {

	var win = $(window),
		count = 1,
		isLock = false;

	var Dialog = function(opt) {

		this.settings = $.extend({}, Dialog.def, opt);

		this.init();

	}

	Dialog.prototype = {

		init : function() {

			this.create();
			if (this.settings.lock) this.lock();
		},

		create : function() {

			var templates = '<div class="gDialog-wrap">' +
								'<div class="gDialog-header">'+ this.settings.title +'</div>' +
								'<div class="gDialog-content">'+ this.settings.content +'</div>' +
								'<div class="gDialog-footer"></div>' +
							'</div>';

			this.dialog = $('<div>').addClass('gDialog').css({
							zIndex : this.settings.zIndex + (count++) 
							}).html(templates).prependTo('body');

			if ($.isFunction(this.settings.ok)) this.ok();

			if ($.isFunction(this.settings.cancel)) this.cancel();

			this.size();
			this.position();
			this.bindEvent();

		},

		ok : function() {

			var _this = this,
				footer = this.dialog.find('.gDialog-footer');

			$('<a>', {
				href : 'javascript:;',
				text : this.settings.okText,
				class : this.settings.disableClass,
				click : function() {
					var okCallback = _this.settings.ok();

					if (okCallback == undefined || okCallback) _this.close();
				}
			}).addClass('gDialog-ok').appendTo(footer);

		},

		cancel : function() {

			var _this = this,
				footer = this.dialog.find('.gDialog-footer');

			$('<a>', {
				href : 'javascript:;',
				text : this.settings.cancelText,
				click : function() {
					var cancelCallback = _this.settings.cancel();
					if (cancelCallback == undefined || cancelCallback) _this.close();
				}
			}).addClass('gDialog-cancel').prependTo(footer);

		},

		size : function() {

			var content = this.dialog.find('.gDialog-content'),
				wrap = this.dialog.find('.gDialog-wrap');

			content.css({
				width : this.settings.width,
				height : this.settings.height
			});

			wrap.width(content.innerWidth());

		},

		position : function() {

			var _this = this,
				winWidth = win.width(),
				winHeight = win.height();

			this.dialog.css({
				left : (winWidth - _this.dialog.width()) / 2,
				top : (winHeight - _this.dialog.height()) / 2
			});

		},

		lock : function() {

			if (isLock) return;

            var _this = this;
            _this.lock = $('<div>').css({ zIndex : _this.settings.zIndex })
							.addClass('gDialog-mask')
							.appendTo('body');
            _this.lock.on('touchmove', function(e) { e.preventDefault(); });
            _this.lock.on('touchmove click', function(e){
                if(e.type == 'touchmove') {
                    e.preventDefault();
                } else if(e.type == 'click') {
                    _this.close();
                }
            });

			isLock = true;
		},

		unLock : function() {
			if (this.settings.lock) {
				if (isLock) {
					this.lock.remove();
					isLock = false;
				}
			}
		},

		close : function() {
			this.dialog.remove();
			this.unLock();
		},

		bindEvent : function() {
			var _this = this;

			win.on('resize', function() {
				_this.position();
			});
		}

	}

	Dialog.def = {
		content: 'loading...',
		title: 'title',
		width: 'auto',
		height: 'auto',
		// 确定按钮回调函数
		ok: null,
		cancel: null,
		okText: '确定',
		cancelText: '取消',
		disableClass: '',
		lock: false,
		zIndex: 9999

	}

	var gDialog = function(opt) {
		new Dialog(opt);
	}

	window.gDialog = $.gDialog = $.dialog = gDialog;

})(jQuery, window);