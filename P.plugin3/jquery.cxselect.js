/*!
 * jQuery cxSelect
 * @name jquery.cxselect.js
 * @version 1.3.4
 * #date 2013-12-18
 * @author ciaoca
 * @email ciaoca@gmail.com
 * @site https://github.com/ciaoca/cxSelect
 * @license Released under the MIT license
 */
 
// 检测是否为数组
var isArray = function(o){
	if (Array.isArray) {
		return Array.isArray(o);
	} else {
		return Object.prototype.toString.call(o) === '[object Array]';
	}
};

