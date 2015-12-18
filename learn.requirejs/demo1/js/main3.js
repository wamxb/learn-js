require.config({
    baseUrl: './js',
    paths: {
        myjquery: 'http://apps.bdimg.com/libs/jquery/1.11.1/jquery.min'
    },
    shim: {
        myjquery: {
            init: function () {
                return jQuery.noConflict(true);
            }
        }
    }
});

require(['myjquery'], function(jq) {
    alert($);
});