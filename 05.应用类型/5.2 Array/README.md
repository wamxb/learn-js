## Array的方法属性
length
Array.isArray(value) //ECMAScript5

###  转换方法
toLocalString()
toString()
valueOf()

### 栈，队列方法
push()
pop()
unshift()
shift()

### 排序
reverse()
sort()

### 操作方法
concat()
slice()
splice() // 会改变原始的数组

### 位置方法 
indexOf() 【！！！】查找的项必须严格相等 '===' 一样。
lastIndexOf()
*支持的浏览器：IE9+, Firefox2+, Safari3+, Opera9.5+, Chrome*

### 迭代方法
every(): 对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true
filter(): 对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组
some(): 对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true
forEach(): 对数组中得每一项运行给定函数。这个方法没有返回值
map(): 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
*支持的浏览器：IE9+，Firefox2+，Safari3+，Opera9.5+，Chrome*

### 并归方法
迭代数组的所有项，然后构建一个最终返回的值
```javascript
reduce(fn(prev, cur, index, array){
	// body...
}[, 基础初始值]);
```
reduceRight()
*支持的浏览器：IE9+，Firefox3+，Safari4+，Opera10.5+，Chrome*

**todo:**
*兼容*
