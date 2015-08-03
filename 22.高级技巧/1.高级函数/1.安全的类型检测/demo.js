/**
 * Created by zplus on 2015/6/5.
 */

function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]';
}

function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}