函数是对象，函数名是指针

### 函数内部属性
arguments - 保存函数参数
this - this引用的是函数据以执行的环境对象
callee - 是一个指针，指向拥有这个 arguments 对象的函数
caller - 保存着当前函数的函数的引用
> - 支持的浏览器：IE, Firefox, Chrome, Safari, Opera9.6
- 严格模式下运行时，访问 arguments.callee 会导致错误
- ECMAScript 5还定义了 arguments.caller，非严格下这个属性始终是 undefined, 严格下访问也会导致错误
- 不能为函数的 caller 属性赋值，否则会导致错误

### 函数属性和方法
length - 表示函数希望接收得命名参数的个数
prototype - 保存它们所有实例方法，ECMAScript 5,prototype 属性是不可以枚举的，因此使用 for-in 无法发现

非继承而来的方法
在特定的作用域中调用函数，实际上等于设置实体内 this 对象的值
apply
call
bind - ECMASCript 5 *支持的浏览器：IE9+， Firefox4+， Safari5.1+， Opera12+ 和 Chrome*



