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