/**
 * Created by zplus on 2015/5/12.
 */
// 实现 特征
var supportsDOM2CSS = document.implementation.hasFeature('CSS', '2.0');
var supportsDOM2CSS2 = document.implementation.hasFeature('CSS2', '2.0');
console.log(supportsDOM2CSS, supportsDOM2CSS2);


var oDiv = document.createElement('div');
document.body.appendChild(oDiv);
oDiv.style.cssText = 'width:20px; height:100px; background-color:green';
// console.log(oDiv.style.cssText);

getPropertyValue();

function getPropertyValue() {
    for (var i = 0, len = oDiv.style.length; i < len; i++) {
        var prop = oDiv.style[i]; // 或者 oDiv.style.item(i)
        var value = oDiv.style.getPropertyValue(prop);
        console.log(prop + ' : ' + value);
    }
}

// getPropertyCSSValue();
function getPropertyCSSValue() {
    for (var i = 0, len = oDiv.style.length; i < len; i++) {
        var prop = oDiv.style[i];
        var value = oDiv.style.getPropertyCSSValue(prop); // 【？不支持】
        console.log(prop + ' : ' + value.cssText + ' (' + value.cssValueType + ')');
    }
}