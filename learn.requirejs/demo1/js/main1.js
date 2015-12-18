require.config({
    baseUrl: './js',
    paths: {
        hello: 'hello'
    },
    shim: {
        hello: {
            // exports 可以把某个非requirejs方式的代码中的某一个全局变量暴露出去，当作该模块以引用。
            exports: 'hello'
        }
    }
});

require(['hello'], function (hello) {
    hello();
});