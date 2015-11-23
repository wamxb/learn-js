// http://www.cnblogs.com/lvdabao/p/3203203.html
// http://www.cnblogs.com/trance/archive/2012/10/30/2746409.html
/**
 * @todo 删除本列还是删除全部
 *       先执行回调函数再渲染效果
 */
(function ($) {
    $.fn.clickSort = function (opts) {
        var defaults = {
            speed: 600 //移动速度
            , placement: 'right' // popover
            , wrap: 'table' // table
            , listSelector: 'tbody' // tbody
            , itemSelector: 'tr' // tr
            , upSelector: '[data-sort="up"]' // fix: 内嵌问题
            , downSelector: '[data-sort="down"]'
            , addSelector: '[data-sort="add"]'
            , addTemplate: ''
        };
        var cfg = $.extend(defaults, opts);

        var $body = $('body');
        $body.popover({
            selector: '[data-toggle="popover"]',
            content: '<button type="button" class="btn btn-white btn-single btn-sm" data-tooltip="cancel">取消</button><button type="button" class="btn btn-info btn-single btn-sm" data-tooltip="ensure">确定</button>',
            html: true,
            placement: cfg.placement,
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
        });

        return this.each(function () {
            var $sortWrap = $(this);

            renderState();
            // render button state
            function renderState() {
                var $items = $sortWrap.find(cfg.listSelector).find(cfg.itemSelector);
                var len = $items.length;

                $items.each(function (i, that) {
                    var $that = $(that);

                    if (len > 1) {
                        if (i === 0) {
                            $that
                                .find(cfg.upSelector).prop('disabled', true)
                                .end()
                                .find(cfg.downSelector).prop('disabled', false);
                        } else if (i === len - 1) {
                            $that
                                .find(cfg.upSelector).prop('disabled', false)
                                .end()
                                .find(cfg.downSelector).prop('disabled', true);
                        } else {
                            $that
                                .find(cfg.upSelector).prop('disabled', false)
                                .end()
                                .find(cfg.downSelector).prop('disabled', false);
                        }
                    } else if (len == 1) {
                        $that
                            .find(cfg.upSelector).prop('disabled', true)
                            .end()
                            .find(cfg.downSelector).prop('disabled', true);
                    }
                });
            }

            $sortWrap.off('click.sort.up');
            $sortWrap.on('click.sort.up', cfg.upSelector, function () {
                var $btn = $(this);
                var parent = $btn.parents(cfg.itemSelector);
                var prevItem = parent.prev(cfg.itemSelector);

                if (prevItem.length == 0)return;

                parent.insertBefore(prevItem);
                isFunction(cfg['cb_sort']) && cfg['cb_sort']({
                    id: parent.prop('id'),
                    sort: -1, // modify: 2015-10-12
                    $btn: $btn
                });
                renderState();
            });

            $sortWrap.off('click.sort.down');
            $sortWrap.on('click.sort.down', cfg.downSelector, function () {
                var $btn = $(this);
                var parent = $btn.parents(cfg.itemSelector);
                var nextItem = parent.next(cfg.itemSelector);
                if (nextItem.length == 0)return;

                parent.insertAfter(nextItem);
                isFunction(cfg['cb_sort']) && cfg['cb_sort']({
                    id: parent.prop('id'),
                    sort: 1, // modify: 2015-10-12
                    $btn: $btn
                });
                renderState();
            });

            // 添加按钮
            $sortWrap.off('click.sort.add');
            $sortWrap.on('click.sort.add', cfg.addSelector, function () {
                var $that = $(this);
                var $list = $that.closest(cfg.wrap).find(cfg.listSelector);
                $list.append(cfg.addTemplate);
                renderState();
                // todo: data for ajax
                isFunction(cfg['cb_add']) && cfg['cb_add']({});
            });

            // 删除确定按钮
            $sortWrap.off('click.sort.tooltip');
            $sortWrap.on('click.sort.tooltip', 'button[data-tooltip]', function () {
                var $btn = $(this);
                var $item = $btn.closest(cfg.itemSelector);
                var id = $item.prop('id');

                var type = $btn.data('tooltip');
                if (type == 'ensure') {
                    $item.remove();
                    isFunction(cfg['cb_delete']) && cfg['cb_delete']({
                        id: id,
                        $sortWrap: $sortWrap,
                        $btn: $btn
                    });
                } else {
                    $body.find('.popover').popover('hide');
                }
                renderState();
            });

            $sortWrap.tid = null;
            $sortWrap.off('click.sort.popover');
            $sortWrap.on('click.sort.popover', '[data-toggle="popover"]', function () {
                $body.find('.popover').popover('hide');
                clearTimeout($sortWrap.tid);
                // 自动消失
                $sortWrap.tid = setTimeout(function () {
                    $body.find('.popover').popover('hide');
                }, 1500);
            });

        });
    };
})(jQuery);