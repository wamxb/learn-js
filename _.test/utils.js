/*
 * @Author: zplus
 * @Date:   2016-10-09 15:15:06
 * @Last Modified by:   zplus
 * @Last Modified time: 2016-10-09 17:22:42
 */

'use strict';

function $(selector, context) {
  context = context || document;
  if (typeof selector == 'object') return selector;
  return context.querySelector(selector);
}

function $$(selector, context) {
  context = context || document;
  var els = context.querySelectorAll(selector);
  return Array.prototype.slice.apply(els);
}

var Event = {
  on: function(el, type, fn) {
    if (el.addEventLisenter) {
      el.addEventLisenter(type, fn, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, fn);
    } else {
      el['on' + type] = fn;
    }
  }
}

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
