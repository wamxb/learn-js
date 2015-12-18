var namespace = {
    reg: function (s) {
        var arr = s.split('.');
        var namespace = window;

        for (var i = 0, len = arr.length; i < len; i++) {
            namespace[arr[i]] = namespace[arr[i]] || {};
            namespace = namespace[arr[i]];
        }
    },

    del: function (s) {
        var arr = s.split('.');
        var namespace = window;

        for (var i = 0, len = arr.length; i < len; i++) {
            if (typeof namespace[arr[i]] == 'undefined') {
                return;
            } else if (len == i + 1) {
                delete  namespace[arr[i]];
                return;
            } else {
                namespace = namespace[arr[i]];
            }
        }
    }
};