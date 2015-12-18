;(function($) {

	function Turn(opt) {

		var def = {
			speed: opt.speed || 200,    // 开始运行速度 140
			maxLoop: opt.maxLoop || 4,  // 循环总圈数 4
			i: opt.i || 0,   // 奖品默认开始索引
			allAwards: opt.allAwards || 12,     // 奖品总数
			jewelNum: opt.jewelNum || 10,       // 需要的钻石数
			awardBarId: opt.awardBarId || 'awardBar',   // 奖品展示区id

			startBtnId: opt.startBtnId || 'btn',  // 开始按钮id
			disableClass: opt.disableClass || 'disabled',   // 不可点击样式

			runClass: opt.runClass || 'run',    // 滚动样式
			retClass: opt.retClass || 'ret'    // 结束样式

			// turnTimeEle: opt.turnTime || ''     // 可运行次数
		}

		var timer, speed, total, step;

		var isRunning = false;  // 可否点击标识
		var startBtn = $('#'+def.startBtnId);   // 开始按钮
		var awardBar = $('#'+def.awardBarId);   // 奖品展示区

		var turnTimeObj = $('#'+'btnTxt1');
		var freeTime = turnTimeObj.find('em');

		var i = def.i;


		startBtn.on('click', function() {
			start();
		});

		/**
		 * fun：转盘运行事件
		 * @returns {boolean}
		 */
		function start() {
			var turnTime = freeTime.text(); // 运行次数

			if (isRunning) {
				return false;
			} else {

				// 次数不够
				if (turnTime <= 0) {
					startBtn.unbind('click');
					// todo... 显示要镐头

					startBtn.addClass(def.disableClass);
					isRunning = true;
					return false;
				}

				// 初始化设置
				step = 0;	// 记录已跑的格数
				speed = def.speed;	// 初始速度
				isRunning = true;

				freeTime.text(turnTime - 1);

				total = Math.floor(def.allAwards*Math.random());	// 总共格数加上一个随机数
				console.log('total', total);

				awardBar.find('i').removeClass();
				$('i'+i).find('i').addClass(def.runClass);
				startBtn.addClass('disabled');

				ito = setTimeout(rolling, 300);
			}

			// todo.. 参加人数+1(服务端大哥，靠你了)
		}

		/**
		 * fun: 滚动事件
		 * @returns {boolean}
		 */
		function rolling() {

			if (step >= total) {
				clearTimeout(timer);
				isRunning = false;

				$('.i'+i).find('i').addClass(def.retClass);
				startBtn.removeClass(def.disableClass);

                showAward(i);

				console.log('奖品为：第'+(i+1)+'个！');
				return false;
			}

			i++;
			step++;

			// 跑一圈，回到起点
			if(i>=12) i=0;

			// 第一圈加速
			if(step<def.allAwards) speed -= 10;

			// 最后一圈减速
			if(step>=(total-def.allAwards)) speed += 15;

			if(speed<=15) speed=15;

			awardBar.find('i').removeClass();
			$('.i'+i).find('i').addClass(def.runClass);
			// console.log('speed: '+speed);
			timer = setTimeout(rolling, speed);
		}

	}

	Turn({});
})(jQuery);

function showAward(key) {
console.log('key', key);
    // 对话框设置
    //===== 对话框 标题 =======
    var titleArr = ['恭喜您，抽中', '洗洗手，再试一次'];
    var titleStr = '';
    switch (0) {
        case 0:
            titleStr = titleArr[0];
            break;
        case 1:
            titleStr = titleArr[1];
            break;
        default:
    }

    //==== 对话框 内容 =====
    var contentStr = '';
    if (1) {
        // 奖品展示
        contentStr = '<div class="i'+key+'"></div>';
    } else {
        // 镐头不足
        contentStr = '<div class="gDialog-tip2"></div>';
    }

    //===== 对话框 取消按钮 =====
    var cancelTextStr = '分享';

    function cancelFn() {
        window.location.href = 'http://www.baidu.com';
    }

    // 调用Dialog.js脚本
    $.dialog({
        content: contentStr,
        title: titleStr,
        width: 560,
        height: 140,
        ok: function() {},
        cancel: cancelFn,
        okText: '我不玩了',
        cancelText: cancelTextStr,
        disableClass: "",
        lock : true
    });
}
