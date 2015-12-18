var feature = {
    addEventListener: !!window.addEventListener,
    querySelectorAll: !!document.querySelectorAll
};

// Document Ready 事件
document.addEventListener("DOMContentLoaded", function () {
    // Code
}, false);

// 选择器API
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
// $(".element")[0].on("touchstart", handleTouch, false);


// Getting the parent node
var parent = document.querySelector("div").parentNode;
// Getting the next node
var next = document.querySelector("div").nextSibling;
// Getting the previous node
var prev = document.querySelector("div").previousSibling;
// Getting the first child element
var child = document.querySelector("div").children[0];
// Getting the last child
var last = document.querySelector("div").lastElementChild;

// [!]属性类名的读写会发生浏览器重绘
element.className += " foo";
function removeClass(el, cls) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g, "");
}

if ("classList" in document.documentElement) {
    // classList is supported, now do something with it
}

//用classList来添加、删除、转换类：
// Adding a class
element.classList.add("bar");
// Removing a class
element.classList.remove("foo");
// Checking if has a class
element.classList.contains("foo");
// Toggle a class
element.classList.toggle("active");


// Clone it
var clone = element.cloneNode(true);
// Replaces the original element with the new cloned one
element.parentNode.replaceChild(clone, element);


// var maxWidth = img.naturalWidth;
// 获得原始图片的大小
// IE9,Chrome,Firefox,Safari和Opera都支持这个方法
// 通过加载图片到内存中添加老浏览器的支持
// 【！】有问题
// http://ourjs.com/detail/535556a1ed9add0e26000002
function getMaxWidth(img) {
    var maxWidth;

    if (img.naturalWidth !== undefined) {
        maxWidth = img.naturalWidth;
    } else {
        var image = new Image();
        image.src = img.src;
        maxWidth = image.width;
    }

    return maxWidth;
}

function hasDimensions(img) {
    return !!((img.complete && typeof img.naturalWidth !== "undefined") || img.width);
}






















