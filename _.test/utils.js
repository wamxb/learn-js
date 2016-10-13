/*
 * @Author: zplus
 * @Date:   2016-10-09 15:15:06
 * @Last Modified by:   zplus
 * @Last Modified time: 2016-10-13 10:41:14
 */

'use strict';

function $(selector, context) {
  if (typeof selector == 'object') return selector;
  return (context || document).querySelector(selector);
}

function $$(selector, context) {
  context = context || document;
  var els = context.querySelectorAll(selector);
  return Array.prototype.slice.apply(els);
}

var Event = {
  bind: function(el, type, handler) {
    if (el.addEventListener) {
      el.addEventListener(type, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, handler);
    } else {
      el['on' + type] = handler;
    }
  },
  off: function(el, type, handler) {
    if (el.removeEventListener) {
      el.removeEventListener(type, handler, false);
    } else if (el.detachEvent) {
      el.detachEvent('on' + type, handler);
    } else {
      el['on' + type] = null;
    }
  },
  domready: function(handler) {
    this.bind(window, 'load', handler);
  },
  getPoint: function(event) {
    var pageX = event.pageX,
      pageY = event.pageY;
    if (pageX === undefined) {
      pageX = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
    }
    if (pageY === undefined) {
      pageY = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
    }
    return {
      x: pageX,
      y: pageY
    };
  },
  cacelBubble: function(event) {
    (event || window.event).cancelBubble = true;
    event.stopPropagation();
    return false;
  }
};

var classfn = {
  has: function(el, cls) {
    if (el.classList) {
      return el.classList.contains(cls);
    }
    return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  },
  add: function(el, cls) {
    if (el.classList) {
      el.classList.add(cls);
    } else if (!classfn.has(el, cls)) {
      el.className += ' ' + cls;
    }
  },
  remove: function(el, cls) {
    if (el.classList) {
      el.classList.remove(cls);
    } else if (classfn.has(el, cls)) {
      el.className = el.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)', ''));
    }
  }
}

// 如果
var extend = (function() {
  var _obj = {
    toString: null
  };
  for (var p in _obj) {
    return function extend(o) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var prop in source) o[prop] = source[prop];
      }
      return o;
    };
  };

  return function patch_extend(o) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      // 复制所有可枚举属性
      for (var prop in source) o[prop] = source[prop];
      // 检查特殊属性
      for (var j = 0; j < properties.length; j++) {
        prop = properties[j];
        if (source.hasOwnProperty(prop)) o[prop] = source[prop];
      }
    }
    return o;
  };

  var properties = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocalString', 'toString', 'valueOf'];
})();
