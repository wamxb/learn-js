/*
 * @Author: zplus
 * @Date:   2016-09-20 11:14:48
 * @Last Modified by:   zplus
 * @Last Modified time: 2016-09-21 13:51:46
 */

'use strict';

(function($) {
  $.fn.println = function() {
    var msg = Array.prototype.join.call(arguments, ' ');
    return this.each(function() {
      $(this).append(msg + '<br>');
    });
  };

  $.debug = function() {
    var el = $('#debug');
    if (!el.length) {
      el = $('<div id="debug"><h1>Debug Log</h1></div>');
      $(document.body).prepend(el);
    }
    el.println.apply(el, arguments);
  }
}(jQuery));

$(function() {
  $.debug('app init');
  localStorage.setItem('o', JSON.stringify({
    x: 1
  }));
  JSON.parse(localStorage.getItem('o')).x = 2;
  console.log(JSON.parse(localStorage.getItem('o')).x);

  $.debug(navigator.cookieEnabled);

});

var whenReady = (function() {
  var funcs = [];
  var ready = false;

  function handler(e) {
    if (ready) return;
    if (e.type === 'readystatechange' && document.readyState !== 'complete') {
      return;
    }

    for (var i = 0; i < funcs.length; i++) {
      funcs[i].call(document);
    }

    ready = true;
    funcs = null;
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false);
    document.addEventListener('readystatechange', handler, false);
    window.addEventListener('load', handler, false);
  } else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', handler);
    window.attachEvent('onload', handler);
  }

  return function whenReady(f) {
    if (ready) {
      f.call(document);
    } else {
      funcs.push(f);
    }
  };
})();


var editor, statusline, savebtn, idletimer;

whenReady(function() {

  if (localStorage.note == null) localStorage.note = '';
  if (localStorage.lastModified == null) localStorage.Modified = 0;
  if (localStorage.lastSaved == null) localStorage.lastSaved = 0;

  //
  editor = document.getElementById('editor');
  statusline = document.getElementById('statusline');
  savebtn = document.getElementById('savebtn');

  editor.value = localStorage.note;
  editor.disabled = true;

  editor.addEventListener('input', function() {
    localStorage.note = editor.value;
    localStorage.lastModified = Date.now();

    if (idletimer) clearTimeout(idletimer);
    idletimer = setTimeout(save, 5e3);
    savebtn.disabled = false;
  }, false);

  sync();
});

window.onbeforeunload = function() {
  if (localStorage.lastModified > localStorage.lastSaved) save();
};

window.ononline = function() {
  sync();
};

window.onoffline = function() {
  status('Offline');
};

window.applicationCache.onupdateready = function() {
  var reload = confirm('发现新版本，在这里查看更新详细，点击下方按钮进行更新操作。');
  if (reload) location.reload();
};

function status(msg) {
  statusline.innerHTML = msg;
}


function save() {
  if (idletimer) clearTimeout(idletimer);
  idletimer = null;

  if (navigator.onLine) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'target.json');
    xhr.send(editor.value);
    xhr.onload = function() {
      localStorage.lastSaved = Date.now();
      savebtn.disabled = true;
    }
  }
}


function sync() {
  if (navigator.onLine) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './target.json');
    xhr.send();
    xhr.onload = function() {
      var remoteModTime = 0;

      if (xhr.status == 200) {
        var remoteModTime = xhr.getResponseHeader('Last-Modified');
        remoteModTime = new Date(remoteModTime).getTime() * 10;
        console.log(remoteModTime);
      }

      if (remoteModTime > localStorage.lastModified) {
        status('Newer note found on server.');

        var useit = confirm('There is a newer version of the note\n' +
          'on the server. Click Ok to use that version\n' +
          'or click Cancle to continue editing this\n' +
          'version and overwrite the server');

        var now = Date.now();
        if (useit) {
          editor.value = localStorage.note = xhr.responseText;
          localStorage.lastSaved = now;
          status('Newest version downloaded.');
        } else {
          status('Ignoring newer version of the note.');
        }
        localStorage.lastModified = now;
      } else {
        status('You are editing the current version of the note.');
      }
      if (localStorage.lastModified > localStorage.lastSaved) {
        save();
      }

      editor.disabled = false;
      editor.focus();
    }
  } else {
    status('Cant\' sync while offline');
    editor.disabled = false;
    editor.focus();
  }
}
