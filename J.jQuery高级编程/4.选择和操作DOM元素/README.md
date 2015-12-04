### Firefox浏览器和Event对象的兼容性
名称 | 属性或方法 | IE对应的属性或方法
--- | --- | ----
stopPropagation() | 方法 | cancelBubble()
layerX, layerY | 属性 | offsetX, offset
Target | 属性 | srcElement
Type | 属性 | Type
preventDefault | 方法 | return Value()
altKey, ctrlKey, shiftKey | 属性 | altKey, ctrlKey, shiftKey
Button | 属性 | Button
charCode | 属性 | keyCode
relatedTarget | 属性 | fromElement, toElement
Bubbles | 属性 | N/A


### jQuery 事件
* blur()
* focus()
* select()
* submit()
* click()
* dblclick()
* focusin()
* focusout()
* hover()
* mousedown()
* mouseenter()
* mousemove()
* mouseout()
* mouseover()
* mouseup()
* toggle()
* error()
* risize()
* scroll()

* .trigger() & .triggerHandler()
.triggerHandler() 只执行第一个匹配对象的时间处理程序，不会向上冒泡
.trigger()
