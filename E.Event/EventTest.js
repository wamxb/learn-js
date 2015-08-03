(function () {
    var obj = {
        init: function () {
            // Isn't beautiful just passing "this" \o/
            EventUtil.on(document.getElementById("btn"), "click", this);
            EventUtil.on(document.getElementById("btn"), "contextmenu", this);
            EventUtil.on(document.getElementById("btn"), "touchstart", this);
            EventUtil.on(document.getElementById("btn2"), "click", this);
            EventUtil.on(document.getElementById("btn3"), "click", this);
        },
        handleEvent: function (e) {
            var evt = e || window.event,
                t = evt.target || evt.srcElement;

            switch (evt.type) {
                case "click":
                    if (t.id === "btn") {
                        this.button(e);
                    } else if (t.id === "btn2") {
                        this.changeHandleEvent(evt);
                    } else {
                        this.revertHandleEvent();
                    }
                    break;
                case "touchstart":
                    this.button();
                    break;
                case "contextmenu":
                    evt.preventDefault();
                    this.other(evt);
                    break;
            }
        },
        dude: "holla",
        button: function (e) {
            console.log(this.dude);
        },
        changeHandleEvent: function (evt) {
            this._handleEvent = this.handleEvent;
            this.handleEvent = function (e) {
                var evt = e || window.event,
                    t = evt.target || evt.srcElement;

                // 【！】没有给btn2的事件，所以再次点击btn2，无效
                if (t.id === "btn") {
                    document.getElementById("content")
                        .appendChild(
                        document.createTextNode("Change the action for all events ")
                    );
                } else if (t.id === "btn3") {
                    this.revertHandleEvent();
                }
            };
            console.log('Totally just changed the event handling');
        },
        revertHandleEvent: function () {
            if (!this._handleEvent) return; // If handleEvent hasn't been changed don't set it to null
            this.handleEvent = this._handleEvent;
            this._handleEvent = null;
            console.log("Original behaviour has been reverted!");
        },
        other: function (e) {
            alert(e.type);
        }
    };


    var EventUtil = {
        on: function (el, evt, fn, bubble) {
            var self = this;
            bubble = (bubble == 'undefined') ? false : bubble;
            if (el.addEventListener) {
                try {
                    self.on = function (el, evt, fn, bubble) {
                        el.addEventListener(evt, fn, bubble);
                    };
                } catch (e) {
                    if (typeof fn == "object" && fn.handleEvent) {
                        self.on = function (el, evt, fn, bubble) {
                            el.addEventListener(evt, function () {
                                fn.handleEvent.call(fn);
                            }, bubble);
                        };
                    } else {
                        throw e;
                    }
                }
            } else if (el.attachEvent) {
                if (typeof fn == "object" && fn.handleEvent) {
                    self.on = function (el, evt, fn) {
                        el.attachEvent("on" + evt, function () {
                            fn.handleEvent.call(fn);
                        });
                    };
                } else {
                    self.on = function (el, evt, fn) {
                        el.attachEvent("on" + evt, fn);
                    };
                }
            }
            return self.on(el, evt, fn, bubble);
        }
    };

    obj.init();
})();



