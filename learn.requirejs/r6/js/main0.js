require.config({
    baseUrl: './js',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    }
});
require(['event', 'selector'], function(E, S) {
    alert(E, S);
});