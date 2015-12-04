requirejs.config({
    paths: {
        bar: 'demo6-bar',
        baz: 'demo6-baz'
    },
    config: {
        bar: {
            size: 'large'
        },
        baz: {
            color: 'blue'
        }
    }
});
require(['bar', 'baz'], function (bar, baz) {
    console.log(bar, baz);
});