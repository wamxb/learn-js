require.config({
    baseUrl: './js',
    paths: {
        jquery: ['jquery.min']
    }
});

require(['selector', 'event'], function ($, E) {
    var els = $('p');
    for (var i = 0, len = els.length; i < len; i++) {
        E.bind(els[i], 'click', function () {
            console.log(this.innerHTML);
        });
    }
});