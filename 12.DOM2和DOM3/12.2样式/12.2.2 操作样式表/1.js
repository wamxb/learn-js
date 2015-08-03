var myDiv = document.getElementById('myDiv');
if (document.defaultView.getComputedStyle) {
    var computedStyle = document.defaultView.getComputedStyle(myDiv, null);

    console.log(computedStyle.backgroundColor); // rgb(255, 0, 0)
    console.log(computedStyle.width); // 100px;
    console.log(computedStyle.height); // 200px;
    console.log(computedStyle.border); // chrome:"1px solid rgb(0, 0, 0)" firfox 不返回值，不同浏览器解释综合（rollup）属性（如border）的方式不同
    console.log(computedStyle.visibility); // 'visible'
}

// IE下
if (myDiv.currentStyle) {
    var currentStyle = myDiv.currentStyle;
    console.log(currentStyle.backgroundColor); // red
    console.log(currentStyle.width); // 100px
    console.log(currentStyle.height); // 200px
    console.log(currentStyle.border); // '' 综合属性不返回
    console.log(currentStyle.visibility); // 'inherit'
}