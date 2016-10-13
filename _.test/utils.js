/*
 * @Author: zplus
 * @Date:   2016-10-09 15:15:06
 * @Last Modified by:   zplus
 * @Last Modified time: 2016-10-12 16:52:36
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
