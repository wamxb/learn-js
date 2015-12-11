### 事件传播机制
	事件类型(event type)
	事件目标(event target)
	事件处理程序(event handler)

### 设置JavaScript对象属性为事件处理程序
1. addEventListener()
> 第三个参数
  为flase表示在冒泡阶段执行
  为true事件捕获过程
2. attachEvent()
> lt<IE8不支持事件捕获，所以没有第三个参数
第一个参数使用了带"on"前缀的时间处理程序属性名

> 移除事件采用 detachEvent()

### 事件处理程序的调用
lt<IE8全局变量event才是事件对象
```js
var div1 = document.getElementById('div1');
if (div1.addEventListener) {
	div1.addEventListener('click', div1Fun, false);
} else if (div1.attachEvent) {
	div1.attachEvent('onclick', div1Fun);
}
function div1Fun(event) {
	event = event || window.event;
	var target = event.target || event.srcElement;
	console.log(event.type);
	console.log(target);
}
```

#### 事件处理程序的调用顺序
1. 通过HTML属性注册的处理程序和通过设置对象属性的处理程序一直优先调用；
2. 使用addEventListener()注册的处理程序按照它们的注册顺序依次调用
3. 使用attachEvent()注册的处理程序可能按照任何顺序调用，所以代码不应该依赖于调用顺序

### 事件取消
1. 取消事件的浏览器默认操作
```js
function cancelHandler(event) {
	var event = event || window.event;
	if (event.preventDefault) {
		event.preventDefault();
	}
	if (event.returnValue) {
		event.returnValue = false;
	}
	return false;
}
```
2. 取消事件传播
在支持addEventListener的浏览器中，可以调用事件对象的一个stopPropagation()方法阻止事件的继续传播，它能工作在事件传播期间的任何阶段（捕获期阶段，事件目标本身，冒泡阶段）
IE对象有一个cancelBubble属性，设置这个属性为true能阻止事件进一步传播（即阻止其冒泡）
```js
function stopEventPropagation(event) {
	var event = event || window.event;
	if (event.stopPropagation) {
		event.stopPropagation();
	} else {
		event.cancelBubble = true;
	}
}
```



## jQuery事件
* focus和blur事件不支持冒泡，但focusin和focusout事件支持
* mouseover和mouseout事件支持冒泡，但这经常不方便，因为很难知道鼠标是从自己感兴趣的元素中移开了，还只是从该元素的子孙元素中移开了。
mouseenter和mouseleave是非冒泡事件，可以解决刚才的问题。
这几个事件类型最初是由IE引入的，jQuery确保它们可在所有浏览器下正确工作。
* resize和unload事件类型只在Window对象中触发
* scroll()方法经常也用于$(window)对象上
* hover方法用来给mouseenter和mouseleave事件注册处理程序。
* 调用hover(f,g)就和调用mouseenter(f)，然后调用mouseleave(g)一样。

* target, currentTarget, relatedTarget
target属性表示在其上发生事件的文档元素。
currentTarget是当前正在执行的事件处理程序所注册的元素，与this应该始终一样。

如果currentTarget和target不一样，那么正在处理的事件是从触发它的元素冒泡上来，此时使用is()方法来检测target元素可能会很有用。

对于mouseover事件，relatedTarget属性指鼠标指针移开的元素，target则是鼠标指针悬浮的元素。

* jQuery的事件触发机制是同步的，不涉及事件队列。

* 如果想调用事件处理程序，但不执行默认操作，可以使用triggerHandler()代替trigger()。该方法和trigger类似，除了首先会调用Event对象的preventDefault()和cancelBubble()方法。这意味着通过triggerHandler()手动触发的事件不会冒泡，也不会执行相关的默认操作


