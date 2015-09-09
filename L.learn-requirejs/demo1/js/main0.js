require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    }
});

//require(['selector', 'event'], function ($, E) {
//    var els = $('p');
//    for (var i = 0, len = els.length; i < len; i++) {
//        E.bind(els[i], 'click', function () {
//            console.log(this.innerHTML);
//        });
//    }
//});
require(['event', 'selector'], function(E, S) {
    alert(E, S);
});