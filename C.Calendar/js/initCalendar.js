var initCalendar = function () {
    return {

        init: function () {
            if (!jQuery().fullCalendar) {
                return;
            }

            var date = new Date();
            var _d = date.getDate();
            var _m = date.getMonth();
            var _y = date.getFullYear();

            var $calendar = $('#calendar');

            if ($calendar.width() <= 400) {
                $calendar.addClass("mobile");
            } else {
                $calendar.removeClass("mobile");
            }
//            console.log(new Date(_y, _m, 1));
            console.log(new Date(_y, _m, 1).toTimeString());

            $calendar.fullCalendar('destroy'); // destroy the calendar
            $calendar.fullCalendar({ //re-initialize the calendar
                //disableDragging: false,


                // ====== 1.普通显示设置
                header: {
                    left: 'today',
                    center: 'prev,title,next',
                    right: 'month,agendaWeek'
                },
                // 在月视图里显示周的模式，因为每月周数可能不同，所以月视图高度不一定。
                weekMode: "fixed",
                // 设置一周中显示的第一天是哪天，周日是0，周一是1，类推。
                firstDay: 0,
                // 设置日历的高度，包括header日历头部，默认未设置，高度根据aspectRatio值自适应。
                //height: '',


                // ====== 2.视图


                // ====== 3.日程选项
                // 定义日历上方显示全天信息的文本
                allDayText: "全天",
                // 设置日历agenda视图下左侧的时间显示格式，默认显示如：5:30pm
                axisFormat: "HH:mm",


                // ====== 4.当前日期设置


                // ====== 5.文本与时间定制
                // 设置显示的日程事件的时间格式，如timeFormat: 'H:mm' 则显示24小时制的像10:30
                timeFormat: "HH:mm",
                // 设置用于显示日历头部的文本信息
                titleFormat: {
                    month: "YYYY年MM月",
                    week: "YYYY年MM月DD日"
                },
                // 设置日历头部各按钮的显示文本信息
                buttonText: {today: "今天", month: "月", agendaWeek: "周"},
                // 月份全称
                monthNames: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                // 月份名称简写
                monthNamesShort: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                // 星期全称
                dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                // 星期名称简写
                dayNamesShort: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],


                // ====== 6.鼠标单击和滑过
                // ====== 7.选择操作
                // 是否允许用户通过单击或拖动选择日历中的对象，包括天和时间。
                selectable: true,
                // 当点击或拖动选择时间时，显示默认加载的提示信息，该属性只在周/天视图里可用。
                selectHelper: true,
                // 当点击页面日历以外的位置时，是否自动取消当前的选中状态。
                // unselectAuto: true,
                // 指定哪些元素不会清空当前的选中，以JQUERY选择器的方式指定 '#someId'。
                // unselectCancel: '',
                /**
                 * 被选中的函数回调
                 * @param startDate 被选中区域的开始时间
                 * @param endDate 被选中区域的结束时间
                 * @param allDay 是否为全天事件
                 * @param jsEvent javascript对象
                 * @param view  当前视图对象
                 */
                select: function (startDate, endDate, allDay, jsEvent, view) {
                    var title = prompt('Event Title:');
                    var eventData;
                    if (title) {
                        eventData = {
                            id: 'idString', // 可选，事件唯一标识，重复的事件具有相同的id
                            title: title,
                            allDay: allDay,
                            start: startDate,
                            // 如果对应的日程事件是allDay的, 那么10月1日8时到10月3日8时就表示跨度是3天
                            // 如果对应的日程时间不是allDay的, 那么10月1日8时10月3日8时则表示跨度是48个小时.
                            end: endDate,
                            url: '',
                            editable: true
//                            source: null
                        };
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $calendar.fullCalendar('unselect');
                },
                // 选中被取消时的回调  function( view, jsEvent )
//                unselect: null,


                // ====== 8.日程事件数据
                // ====== 9.事件渲染
                // ====== 10.日程事件拖动和缩放
                // 是否可编辑，即进行可拖动和缩放操作。
                editable: true,
                // 是否让事件在开始时就可以拖动。
                // eventStartEditable: true,
                // 如果拖拽不成功，多久回复原状，毫秒
                // dragRevertDuration: 500,
                // 拖动时候的不透明度
                /*                dragOpacity: {
                 agenda: .5, //对于agenda试图
                 '': 1.0 //其他视图
                 },*/
                // 当拖拽完成并且时间改变时触发
                /**
                 *
                 * @param event
                 * @param delta 保存日程向前或者向后移动了多少天
                 * @param revertFunc
                 * @param jsEvent
                 * @param ui
                 * @param view
                 */
                eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {

                    console.log(event.title + "移动到" + event.start.format('YYYY-MM-DD HH:mm:ss') + " 到 " + event.end.format('YYYY-MM-DD HH:mm:ss'));

                },
                // 在日程事件改变大小并成功后调用, 参数和eventDrop参数用法一致。
                eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                    console.log(event.title + "改变大小" + event.start.format('YYYY-MM-DD HH:mm:ss') + " 到 " + event.end.format('YYYY-MM-DD HH:mm:ss'));
                },

                // ====== 11.日期工具
                events: [
                    {
                        id: 'id1',
                        title: 'All Day Event',
                        start: new Date(_y, _m, 1),
                        editable: true
                    },
                    {
                        title: 'Long Event',
                        start: new Date(_y, _m, _d - 5),
                        end: new Date(_y, _m, _d - 2),
                        editable: true
                    },
                    {
                        title: 'Repeating Event',
                        start: new Date(_y, _m, _d - 3, 16, 0),
                        allDay: false,
                        editable: true
                    },
                    {
                        title: 'Repeating Event',
                        start: new Date(_y, _m, _d + 4, 16, 0),
                        allDay: false,
                        editable: true
                    },
                    {
                        title: 'Meeting',
                        start: new Date(_y, _m, _d, 10, 30),
                        allDay: false,
                        editable: true
                    },
                    {
                        title: 'Lunch',
                        start: new Date(_y, _m, _d, 12, 0),
                        end: new Date(_y, _m, _d, 14, 0),
                        allDay: false,
                        editable: true
                    },
                    {
                        id: 'Birthday Party id',
                        title: 'Birthday Party',
                        start: new Date(_y, _m, _d + 1, 19, 0),
                        end: new Date(_y, _m, _d + 1, 22, 30),
                        allDay: false,
                        editable: true
                    },
                    {
                        title: 'Click for Google',
                        start: new Date(_y, _m, 28),
                        end: new Date(_y, _m, 29),
                        url: 'http://google.com/',
                        editable: true
                    }
                ]
            });
        }
    };
}();