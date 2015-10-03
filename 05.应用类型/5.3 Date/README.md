## Date类型
parse() - 接收一个表示日期的字符串参数
UTC() - 与 parse 不同在于：日期和时间都基于本地时区而非 GMT 来创建
now() - ECMAScript5新增方法 *IE9+,Firefox3+,Safari3+,Opera10.5,Chrome*
		不支持的浏览器可使用+操作符获取 Date 对象的时间戳。

###  继承的方法
toLocalString() - 按照浏览器设置的地区相关相适应的格式，返回日期和时间
toString() - 返回带有时区的日期和时间
valueOf() - 返回日期的毫秒表示，可以方便使用比较操作符（小于或大于）来比较日期值

### 日期格式化方法
toDateString() - 以特定于实现的格式显示星期几、月、日和年
toTimeString() - 以特定于实现的格式显示时、分、秒和时区
toLocalDateString() - 以特定于地区的格式显示星期几、月、日和年
toLocalTimeString() - 以特定于实现的格式显示时、分、秒
toUTCString() - 以特定于实现的格式完整的 UTC 日期

### 日期/时间组件方法
getTime()
setTime(毫秒)

getFullYear()
getUTCFullYear()
setFullYear(年)
setUTCFullYear(年)

getMonth()
getUTCMonth()
setMonth()
setUTCMonth()

getDate()
getUTCDate()
setDate(日)
setUTCDate(日)

getDay()
getUTCDay()

getHours()
getUTCHours()
setHours(时)
setUTCHours(时)

getMinutes()
getUTCMinutes()
setMinutes(分)
setUTCMinutes(分)

getSeconds()
getUTCSeconds()
setSeconds(秒)
setUTCSeconds(秒)

getMilliSeconds()
getUTCMilliSeconds()
setMilliSeconds(毫秒)
setUTCMilliSeconds(毫秒)

getTimezoneOffset()











