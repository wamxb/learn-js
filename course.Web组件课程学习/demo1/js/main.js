/**
 + ---------------------------------------- +
 +
 + By: zplus
 + ---------------------------------------- +
 + Date: 2014/7/19
 + Update:
 + ---------------------------------------- +
 **/

require.config({
    paths: {
        jquery: 'libs/jquery.min',
        jqueryUI: 'http://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min'
    }
});

require(['jquery', 'Window'], function ($, w) {
    $('#a').click(function () {
        var win = new w.Window();
        win.alert({
            content: 'Welcome',
            handler: function () {

            },
            width: 300,
            height: 150,
            y: 50,
            hasCloseBtn: true,
            skinClassName: 'window_skin_a',
            handler4AlertBtn: function () {
            },
            handler4CloseBtn: function () {
            },
            text4AlertBtn: 'O K',
            dragHandle: '.window_header'
        }).on('alert', function () {
            alert('you click the alert button');
        }).on('alert', function () {
            alert('the second alert handler');
        }).on('close', function () {
            alert('you click the close button');
        }).on('close', function () {
            alert('the second close handler');
        });
    });
});