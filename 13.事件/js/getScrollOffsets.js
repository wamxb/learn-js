/**
 * 查询窗口滚动条的位置
 * @param w
 * @returns {*}
 */
function getScrollOffsets(w) {
    var w = w || window;

    // 除了IE8及更早的版本以外，其他浏览器都能用
    if (w.pageXOffset != null) return {x: w.pageXOffset, y: w.pageYOffset};

    // 标准模式下的IE(或任何浏览器)
    var d = w.document;
    if (document.compatMode == 'CSS1Compat') {
        return {x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop};
    }

    // 怪异模式
    return {x: d.body.scrollLeft, y: d.body.scrollTop};
}