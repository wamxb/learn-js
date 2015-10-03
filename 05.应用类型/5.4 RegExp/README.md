元字符必须转义
`( ) [ ] { } \ ^ $ | ? * + .`

ECMAScript 3
正则表达式字面量始终会共享**同一个** RegExp 实例
构造函数创建的每一个新 RegExp 实例都是一个**新实例**

ECMAScript 5
规定使用正则表达式字面量必须像直接调用 RegExp 构造函数一样，每次创建新的 RegExp 实例。
IE9+,Firefox 4+和 Chrome 都据此做出了修改


### RegExp 实例方法
exec() - 不匹配返回 null，否者返回 Array 的实例，但包含两个额外的属性：index 和 input
test() - 返回 Boolean

### RegExp 构造函数属性
*Opear 不支持 input, lastMatch, lastPattern 和 multiline 属性*
*IE 不支持 multiline*
  


