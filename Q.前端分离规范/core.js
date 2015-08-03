/**
 * 核心模块
 * 1.创建命名空间
 * 2.初始化公共事件
 */
!(function (win, jQuery) {
    'use strict';

    var Qclient = window.QClient = {
        // 框架类型
        $: jQuery,
        // 工具类
        utils: {},
        // UI集合
        ui: {},
        // 数据集合
        sync: {},
        // 事件
        events: {},
        // 调试模式
        DEBUG: false
    }

})(window, window.jQuery);