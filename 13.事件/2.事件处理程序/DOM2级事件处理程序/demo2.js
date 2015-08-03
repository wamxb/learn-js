/**
 * Created by zplus on 2015/6/4.
 */
function Store() {
    this._data = 0;
}

Store.prototype = {
    init: function () {
        window.addEventListener('store_do', this);
        window.addEventListener('store_set', this);
    },

    handleEvent: function (evt) {
        switch (evt.type) {
            case 'store_do':
                this.doSomething();
                break;
            case 'store_set':
                this.setSomething(evt.detail.val);
                break;
        }
    },

    getSomething: function () {
        return this._data;
    },

    doSomething: function () {
        this._data += 1;
    },

    setSomething: function (val) {
        this._data = val;
    }
};

var App = function () {
    this.store = new Store();
    this.store.init();

    window.dispatchEvent(new CustomEvent('store_do'));
    window.dispatchEvent(new CustomEvent('store_set', {'detail':{'val':2}}));
};