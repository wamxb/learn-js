
'use strict';
(function($){

    $.fn.extend({
        // 文本计数器
        text_counter: function(opts) {
            var that = this;
            var opts = $.extend({
                msgTarget: null,
                maxLength: 140,
                template: '最多可输入{max}个文字，已输入{num}个'
            }, opts);

            function counter(){
                var sender = $(this);
                // 统计字符数时，要去掉其中的回车符
                var len = sender.val().replace(/[\n\r]/g, '').length;
                if (len > opts.maxLength) {
                    len = opts.maxLength;
                    sender.val(sender.val().substring(0, len));
                }

                changed(len);
            }

            function changed(num) {
                if (opts.msgTarget) {
                    var msgText = opts.template.replace('{max}', opts.maxLength).replace('{num}', num);
                    $(opts.msgTarget).html(msgText);
                    $(that).attr('data-num', num);
                }
            }
            $(this).off('input').on('input', function(){
                counter.call(this);
            });
            var curVal = $(that).val() || '';
            changed(curVal.length);
        }
    })

})(window.jQuery);
