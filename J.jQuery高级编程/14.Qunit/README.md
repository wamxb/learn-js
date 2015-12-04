### Qunit断言

断言 | 参数 | 描述
--- | --- | ---
ok | state, message | 布尔断言，如果state为真则通过测试
equal | actual,expected,message | 比较断言。将actual与expected进行比较。如果actual等于(==)expected则通过测试
notEqual | actual,expected,message | 比较断言。将actual与expected进行比较，如果actual不等于expected则通过测试
deepEqual | actual,expected,message | 深度递归比较断言。递归比较对象。如果有某一个属性不相等则测试失败
notDeepEqual | actual,expected,message | 深度递归比较断言。递归比较对象。与deepEqual正好相反。如果有某一个属性不相等则通过测试
strictEqual | actual,expected,message | 比较断言。将actual与expected进行比较。如果actual与expected严格相等(===)则通过测试
notStrictEqual | actual,expected,message | 比较断言。将actual与expected进行比较。如果actual与expected严格不相等则通过测试
Raises | block,expected,message | 该断言测试代码是否抛出一个错误