/**
 * 加载更多
 * 可用于document滚动，或者小窗口滚动
 * 用法：
new Refresh({
    ajax: {  // ajax请求参数
        url: '',
        data: {
            page: 1  //第一次请求索引
        },
        done: function (data) { // 数据请求成功事件,如填充数据
        },
        end: null // 结束时的特别处理事件
    },
    render: {
        oList: null // 渲染的位置
    }
});
 */
;(function($, win, undefined){

    var Refresh = function (options) {
        var self = this,
            $win = $(win),
            $doc = $(document),
            cfg,
            DISTANCE = 50,
            scrollWrap = $win,
            scrollCon = $doc,
            isDuringAjax = false,
            duringCls = 'z-during';

        self.init = function(opt) {
            cfg = $.extend(true, self.defaults, options, opt);
            var $wrap = cfg.render.oList.parent();
            if ('auto' === $wrap.css('overflow-y')) {
                scrollWrap = $wrap;
                scrollCon = cfg.render.oList;
            }
            scrollWrap.on('scroll.HI', function () {
                throttle(scrollRequest, this);
            });
            createBtn();
        };

        function scrollRequest() {
            if (!isReachBottom() || isDuringAjax) return;
            isDuringAjax = true;
            self.loadData();
        }

        function isReachBottom() {
            return scrollWrap.scrollTop() + DISTANCE >= scrollCon.height() - scrollWrap.height();
        }

        self.loadData = function () {
            ajaxRequest(cfg.ajax.url, cfg.ajax.data, cfg.ajax.done);
        };

        function ajaxRequest(url, data, successHandler) {
            var xhr = $.ajax({
                type: 'GET',
                url: url,
                data: data,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            });
            xhr.done(function (data) {
                (typeof  successHandler === 'function') && successHandler(data);
                isDuringAjax = false;
                cfg.ajax.data.page++;
                if (!data['Data']['canReqMoreData'] || data['ResultCode'] !== '1') {
                    events('end');
                }
            });
            xhr.fail(function () {
                events('error');
            });
        }

        function events(type) {
            scrollWrap.off('scroll.HI');
            var html = '';
            if (type === 'end') {
                html = isFunction(cfg.ajax.end) ? cfg.ajax.end() : '所有都在这里了';
            } else {
                html = '网络异常';
            }
            self.oBtn.find('.ui-refresh-tip')
                .html(html)
                .removeClass(duringCls);
        }

        function createBtn() {
            var $refreshBtn = $('.ui-refresh-btn');
            if ($refreshBtn.length) {
                self.oBtn = $refreshBtn;
            } else {
                self.oBtn = $('<div class="ui-refresh-btn"><span class="ui-refresh-tip ' + duringCls + '">正在加载中</span></div>');
                self.oBtn.insertAfter(cfg.render.oList);
            }
        }

        // 图片懒加载

        self.defaults = {
            ajax: {
                url: '',
                data: {
                    page: 1
                },
                done: function () {
                },
                end: null
            },
            render: {
                oList: null
            },
            img: {
                selector: null,
                distance: 200
            }
        };
    };

    function isFunction(obj) {
        if (typeof (/./) !== 'function') {
            return typeof obj === 'function';
        }
    }

    function throttle(method, context) {
        clearTimeout(context.tId);
        context.tId = setTimeout(function () {
            method.call(context);
        }, 200);
    }

    win.Refresh = Refresh;

})(window.jQuery || window.Zepto, window);