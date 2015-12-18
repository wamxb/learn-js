!(function (win, $, undefined) {
    var Tree = function ($el, opt) {
        this.$el = $el;
        this.cfg = $.extend(true, {}, opt);
        this.init();
    };

    Tree.prototype = {
        construct: Tree,
        init: function () {
            var that = this;
            that.createMenu(that.$el[0], that.cfg.data, true);
            that.bindEvent();
        },
        createMenu: function (el, arr, isShow) {
            var that = this;
            var i = 0, len = arr.length;
            var docfrag = document.createDocumentFragment();
            for (; i < len; i++) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                var data = arr[i];
                a.setAttribute('data-level', data.level);
                var flag = that.cfg.activeId.indexOf(data.level) > -1;
                a.innerHTML = '<i></i>' + data.title;
                if (data.submenu) {
                    a.setAttribute('href', data.url || '#');
                    a.className = flag ? ( that.cfg.activeId === data.level ? 'active' : '') : 'fold';
                } else {
                    a.setAttribute('href', 'javascript:;');
                    a.className = flag ? 'active' : '';
                }
                li.appendChild(a);
                if (data.submenu) {
                    li.className = 'submenu';
                    that.createMenu(li, data.submenu, flag);
                }
                docfrag.appendChild(li);
            }
            var ul = document.createElement('ul');
            ul.appendChild(docfrag);
            ul.style.display = isShow ? 'block' : 'none';
            el.appendChild(ul);
        },
        bindEvent: function () {
            var that = this;
            that.$el.on('click', 'li.submenu > a i', function (event) {
                var $that = $(this);
                var $a = $that.closest('a');
                var $li = $that.closest('li')
                $li.siblings('li').find('a').addClass('fold')
                    .next('ul').hide();
                $a.toggleClass('fold');
                $a.next('ul').slideToggle(300);
//                    $li.children('ul').toggle();
            });
            that.$el.on('click', 'a', function () {
                var $that = $(this);
                that.$el.find('a').removeClass('active');
                $that.addClass('active');
            });
        }
    };


    $.fn.treeNav = function (opt) {
        return this.each(function () {
            new Tree($(this), opt);
        });
    };
})(window, window.jQuery);

var treeNavData = [
    {
        "title": "一级菜单",
        "level": "level_1",
        "submenu": [
            {
                "title": "二级菜单",
                "level": "level_1_1",
                "url": "#"
            },
            {
                "title": "二级菜单",
                "level": "level_1_2",
                "submenu": [
                    {
                        "title": "三级菜单",
                        "level": "level_1_2_1",
                        "submenu": [
                            {
                                "title": "四级菜单",
                                "level": "level_1_2_1_1",
                                "url": "#"
                            },
                            {
                                "title": "四级菜单",
                                "level": "level_1_2_1_2",
                                "submenu": [
                                    {
                                        "title": "五级菜单",
                                        "level": "level_1_2_1_2_1",
                                        "url": "#"
                                    },
                                    {
                                        "title": "五级菜单",
                                        "level": "level_1_2_1_2_2",
                                        "url": "#"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "三级菜单",
                        "level": "level_1_2_2",
                        "url": "#"
                    }
                ]
            },
            {
                "title": "二级菜单",
                "level": "level_1_3",
                "url": "#"
            }
        ]
    },
    {
        "title": "一级菜单",
        "level": "level_2",
        "submenu": [
            {
                "title": "二级菜单",
                "level": "level_2_1",
                "url": "#"
            },
            {
                "title": "二级菜单",
                "level": "level_2_2",
                "submenu": [
                    {
                        "title": "三级菜单",
                        "level": "level_2_2_1",
                        "submenu": [
                            {
                                "title": "四级菜单",
                                "level": "level_2_2_1_1",
                                "url": "#"
                            },
                            {
                                "title": "四级菜单",
                                "level": "level_2_2_1_2",
                                "submenu": [
                                    {
                                        "title": "五级菜单",
                                        "level": "level_2_2_1_2_1",
                                        "url": "#"
                                    },
                                    {
                                        "title": "五级菜单",
                                        "level": "level_2_2_1_2_1",
                                        "url": "#"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "三级菜单",
                        "level": "level_2_2_2",
                        "url": "#"
                    }
                ]
            },
            {
                "title": "二级菜单",
                "level": "level_2_3",
                "url": "#"
            },
            {
                "title": "二级菜单",
                "level": "level_2_4",
                "submenu": [
                    {
                        "title": "三级菜单",
                        "level": "level_2_4_1",
                        "submenu": [
                            {
                                "title": "四级菜单",
                                "level": "level_2_4_1_1",
                                "url": "#"
                            },
                            {
                                "title": "四级菜单",
                                "level": "level_2_4_1_2",
                                "submenu": [
                                    {
                                        "title": "五级菜单",
                                        "level": "level_2_4_1_2_1",
                                        "url": "#"
                                    },
                                    {
                                        "title": "五级菜单",
                                        "level": "level_2_4_1_2_1",
                                        "url": "#"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "三级菜单",
                        "level": "level_2_4_2",
                        "url": "#"
                    }
                ]
            },
            {
                "title": "二级菜单",
                "level": "level_2_5",
                "url": "#"
            }
        ]
    },
    {
        "title": "一级菜单",
        "level": "level_3",
        "submenu": [
            {
                "title": "二级菜单",
                "level": "level_3_1",
                "url": "#"
            },
            {
                "title": "二级菜单",
                "level": "level_3_2",
                "url": "#"
            },
            {
                "title": "二级菜单",
                "level": "level_3_3",
                "url": "#"
            }
        ]
    }
];
$('#side_menu').treeNav({
    data: treeNavData,
    activeId: 'level_1_2_1'
});