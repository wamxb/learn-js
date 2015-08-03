/**
 * Created by zplus on 2015/6/2.
 */

var NS = (function (mod) {
    mod.toHtml = function (str, obj) {
        for (var p in obj) {
            str = str.replace(new RegExp('{' + p + '}', 'g'), obj[p]);
        }
        return str;
    };
    return mod;
})(window.NS || {});

var build = function (id, href) {
    var options = {
        id: id,
        href: href
    };

    return NS.toHtml('<div id="tab"><a href="{href}" id="{id}"></div>', options);
};

build('id12', 'http://www.baidu.com');