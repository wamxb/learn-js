require.config({
    baseUrl: './js',
    paths: {
        jquery: ['http://apps.bdimg.com/libs/jquery/1.11.1/jquery.min'],
        'jquery-private': 'jquery-private'
    },
    // ???
    // 在除了jquery-private之外的任何依赖中，
    // 还可以直接使用 jqurey 这个模块名，
    // 并且总是被替换为对 jquery-private 的依赖，使得它最先被执行。
    map: {
        '*': { 'jquery': 'jquery-private'},
        'jquery-private': { 'jquery': 'jquery'}
    }
});

require(['jquery'], function($) {
    console.log($);
});