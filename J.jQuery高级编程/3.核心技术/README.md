###
* $.markArray() 将一个类似于数组的对象转换为一个真正的数组
* $.merge()
* $.inArray() 检查数组中是否存在某个指定的值
* $.unique() 从DOM元素的数组中移除重复的元素
* $.each()
```js
$.each(Array, function(index, value){

});
```

* $.queue()
$.queue队列支持push和pop操作。要从队列中移除所有函数，可以使用.clearQueue()方法。
使用.dequeue()可以从队列中移除一个函数并执行它

* $.contains() 用于检查一个DOM节点是否是另外一个节点的子节点
第一个参数是容器节点，第二个参数是要检查的目标节点
`$.contains($('head')[0], $('title')[0])`


