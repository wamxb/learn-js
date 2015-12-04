require.config({
    paths: {
        'jquery1': ['http://apps.bdimg.com/libs/jquery/1.11.1/jquery.min'],
        'jquery2': ['http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min']
    },
    shim: {
        jquery1: {exports: 'jQuery'},
        jquery2: {exports: 'jQuery'}
    },
    map: {
        '*': {'jquery': 'jquery1'},
        'main5': {'jquery': 'jquery2'}
    }
});
// map?
// jquery ==> 1.11.1
// jquery1 ==> 1.11.1
// jquery2 ==> 2.1.4
// main5 ==> "Uncaught TypeError: Cannot read property 'fn' of undefined"
require(['main5'], function ($) {
    console.log($.fn.jquery);
}, function (err) {
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'jquery') {
        requirejs.undef(failedId);
    }
});