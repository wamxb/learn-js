require.config({
    baseUrl: './js',
    paths: {
        hello: 'hello'
    },
    shim: {
        hello: {
            // 暴露多个变量：init
            // 当 exports 与 init 同时存在的时候， exports 将被忽略。
            init: function () {
                return {
                    hello: hello,
                    hello2: hello2
                }
            }
        }
    }
});

require(['hello'], function (hello) {
    hello.hello();
    hello.hello2();
});