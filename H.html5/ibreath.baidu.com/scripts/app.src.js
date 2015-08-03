// function preImage(url,callback){  //图片预加载
// 	var img = new Image();
// 	img.src = url;
//     if (img.complete) {
// 		callback.call(img);
// 		return;
//      }
//      img.onload = function () {
// 		callback.call(img);
//      };
// }
// (function($) {
// 	$.getUrlParam = function(name) {
// 		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
// 		var r = window.location.search.substr(1).match(reg);
// 		if (r != null) return unescape(r[2]);
// 		return null;
// 	}
// })(Zepto);
// var thisParam = $.getUrlParam("resef")
// if (thisParam === "1") {
// 	$(".start-wrap").hide()
// 	$(".wrap").fadeIn(300, function() {
// 		lock = false;
// 	});
// }
var itemJSON = baiduIbeath();
// fenshu: mark,
// duanzi: getDuanzi(section),
// jianyi: getJianyi()
var itemFenShu = itemJSON.fenshu;
if (itemFenShu < 10 && itemFenShu > 0) {
	itemFenShu = "0" + itemFenShu;
} else if (itemFenShu === 0) {
	itemFenShu = "00.0";
}
var itemPaiMing = itemJSON.paiming;
var itemDuanZi = itemJSON.duanzi;
var itemJianYi = itemJSON.jianyi;
// var timetest = setInterval(test111,1000);
// var timetest111 = 0;
// function test111()
// {

// 	var itemJSON = baiduIbeath()
// 	console.log(itemJSON.paiming + "///" + itemFenShu);
// 	timetest111 += 1;
// 	if(timetest111 > 100)
// 	{
// 		clearInterval(timetest);
// 	}
// }
//重力感应开关
var lock = true;


//gasFun(n2, o2, co2, h2o, other)
var breat = gasFun(78, 16.4, 4.63, 0.03, 0.94);
var breatArr = [breat.n2, breat.o2, breat.co2, breat.h2o, breat.other];
var qtArray = new Array(["N2", breatArr[0], "#83c1fc"], ["O2", breatArr[1], "#98cf7b"], ["CO2", breatArr[2], "#ddc676"], ["H2O", breatArr[3], "#3399ff"], ["Other", breatArr[4], "#cc66ff"]);

var startRun = $("#start");
var startIndex = 0;

var $window = $(window);
var liWidth = $window.width();
$("#start").css("width", liWidth * 3);
$("#start li").css("width", liWidth);
$(".start-wrap li").css("height", $(document).height());
$(".start-wrap").css("height", $(document).height() + 50);
startRun.on("swipeLeft", function() {
	startIndex++;
	if (startIndex !== 2) {
		var thisLeft = liWidth * startIndex;
		startRun.animate({
			left: -thisLeft
		}, 500, function() {
			startNum(startIndex);
			if (startIndex === 1) {
				$(".start-button").show();
			}
		})
	} else {
		startIndex--;
		/*
			startRun.animate({
				left: -liWidth*2
			}, 500, function() {
				$(".start-wrap").fadeOut(300, function() {
					$(".wrap").fadeIn(300,function(){setTimeout(ballreset,500);});
				})
			})
			*/
	}
	if (startIndex === 1) {
		$(".start-button").fadeIn(500);
	}
	//alert(startIndex);
})
startRun.on("click", function() {
	startIndex++;
	if (startIndex !== 2) {
		var thisLeft = liWidth * startIndex;
		startRun.animate({
			left: -thisLeft
		}, 500, function() {
			startNum(startIndex);
			if (startIndex === 1) {
				$(".start-button").show();
			}
		});
	} else {
		startIndex--;
		/*
			startRun.animate({
				left: -liWidth*2
			}, 500, function() {
				$(".start-wrap").fadeOut(300, function() {
					$(".wrap").fadeIn(300,function(){setTimeout(ballreset,500);})
				})
			})
			*/
	}

	//alert(startIndex);
})
$(".start-button").on("click", function() {
	$(".start-wrap").fadeOut(300, function() {
		$(".wrap").fadeIn(300, function() {
			setTimeout(ballreset, 500);
		});
	});
});
startRun.on("swipeRight", function() {
	//alert("right");
	$(".start-button").fadeOut(500);
	startIndex--;
	if (startRun.css("left") !== "0px") {
		startRun.animate({
			left: -startIndex * liWidth
		}, 500, function() {
			startNum(startIndex);
		})
	} else {
		startRun.animate({
			left: 0
		}, 500, function() {
			startIndex = 0;
		});
	}
	//alert(startIndex);
})

function startNum(index) {
	$(".start-num a").eq(index).addClass('active').siblings('a').removeClass('active');
}

if (!window.DeviceOrientationEvent) {
	$(".step-1").fadeOut(300, function() {
		$(".step-2").fadeIn(300);
		$("#btn-hand").fadeIn(300);
		$(".bottom li").eq(1).addClass('active');
		$(".bottom .step").animate({
			width: 50 + "%"
		})
	});
}
$("#resetApp").on("click", function() {
	againGame();
});

function ballreset() {
	num = 0;
	lock = false;
}

//再来一瓶
function againGame() {

	$(".start-wrap").hide();
	$(".step-4").fadeOut(300, function() {
		$(".bottom .step").animate({
			width: 25 + "%"
		})
		$(".bottom li").eq(0).addClass('active').siblings('li').removeClass('active');
		$(".gray-bg").css("position", "absolute");
		$(".step-1").fadeIn(300, function() {
			//alert("num:"+num);
			setTimeout(ballreset, 500);

		});
	});
	skipstart = false;
	canvasBtn(1);
	//重置数据
	itemJSON = baiduIbeath();
	itemFenShu = itemJSON.fenshu;
	if (itemFenShu < 10 && itemFenShu > 0) {
		itemFenShu = "0" + itemFenShu;
	} else if (itemFenShu === 0) {
		itemFenShu = "00.0";
	}
	itemPaiMing = itemJSON.paiming;
	itemDuanZi = itemJSON.duanzi;
	itemJianYi = itemJSON.jianyi;
	breat = gasFun(78, 16.4, 4.63, 0.03, 0.94);
	breatArr = [breat.n2, breat.o2, breat.co2, breat.h2o, breat.other];
	qtArray = new Array(["N2", breatArr[0], "#83c1fc"], ["O2", breatArr[1], "#98cf7b"], ["CO2", breatArr[2], "#ddc676"], ["H2O", breatArr[3], "#3399ff"], ["Other", breatArr[4], "#cc66ff"]);
	$(".health-number-wrap i").html("").css("top", 0);
}
//重力感应
window.addEventListener("deviceorientation", function(e) {
	if (lock) {
		return;
	}
	var alpha = Math.floor(e.alpha);
	var beta = Math.floor(e.beta);
	var gamma = Math.floor(e.gamma);
	if (beta > 90) {
		beta = 90;
	} else if (beta < -90) {
		beta = -90;
	}
	if (gamma > 90) {
		gamma = 90;
	} else if (gamma < -90) {
		gamma = -90;
	}
	var x = -(gamma / 90) * 83;
	var y = -(beta / 90) * 83;
	var z = Math.sqrt(x * x + y * y);
	if (z > 59) {
		x = x * 59 / z;
		y = y * 59 / z;
	}
	x = x + 120;
	y = y + 114;
	canvasBall(x, y);
}, false);
var num = 0;


//画球
function canvasBall(x, y) {
	var canvas1 = document.getElementById("canvas-ball");
	var context1 = canvas1.getContext('2d');
	//var timer = 0;
	var color;
	context1.clearRect(0, 0, 240, 240);
	if (x > 110.14 && x < 130 && y > 106.5 && y < 124.4) {
		num++;
		if (num > 30) {
			$(".tip-bottom").html("<strong>校准成功</strong><br />继续端平手机");
		}
		if (num > 50) {
			lock = true;
			num = 0;

			context1.clearRect(0, 0, 240, 240);
			$(".step-1").fadeOut(300, function() {
				$(".step-2").fadeIn(300);
				$("#canvas-btn").fadeIn(300);
				$(".bottom li").eq(1).addClass('active').siblings('li').removeClass('active');
				$(".bottom .step").animate({
					width: 50 + "%"
				})
				context1.clearRect(0, 0, 240, 240);
				//$(".canvas-box").html('<canvas width="240" height="240" id="canvas-ball" class="canvas-ball" style=" background-color: #000"></canvas>');
				//alert("clear");

			});
		}
		color = "#FFFF66";
	} else {
		num = 0;
		color = "#FFF";
		$(".tip-bottom").html("<strong>平衡校准中</strong><br />请端平手机 &bull; 保持姿势");
	}
	if (0 <= num && num <= 50) {
		context1.globalAlpha = 1;
		context1.beginPath();
		context1.arc(120, 114, 30, 1.1 * Math.PI, 1.9 * Math.PI, false);
		context1.strokeStyle = color;
		context1.lineWidth = 3;
		context1.stroke();

		context1.beginPath();
		context1.arc(120, 114, 30, 0.1 * Math.PI, 0.9 * Math.PI, false);
		context1.strokeStyle = color;
		context1.lineWidth = 3;
		context1.stroke();

		context1.beginPath();
		context1.moveTo(x, y);
		context1.arc(x, y, 20, 0, 2 * Math.PI, false);
		context1.closePath();
		context1.fillStyle = "#FFF";
		context1.globalAlpha = 1;
		context1.fill();
	} else {
		//alert(lock);
	}

}



var imgload = false;
if (document.getElementById('imgprocess').complete) {
	imgload = true;
}
document.getElementById('imgprocess').onload = function() {
	imgload = true;
};


//进度
function TimeProcess() {
	if (!imgload) {
		return;
	}
	if (processValue > 400) {
		clearTimeout(processTime); //加载完成后
		return;
	}
	var text = processValue + "%";
	var process = processValue;
	context.clearRect(0, 0, 240, 240);
	context.globalAlpha = 1;
	//加载灰色进度条图片
	var img = document.getElementById("imgprocess");
	context.drawImage(img, 0, 0);
	context.globalCompositeOperation = "destination-out";

	//加载进度
	context.beginPath();
	context.moveTo(120, 120);
	context.arc(120, 120, 192, Math.PI * 1.5, Math.PI * 1.5 + Math.PI * 2 * process / 400, false);
	context.closePath();
	context.fillStyle = "#ccc";
	context.globalAlpha = 1;
	context.fill();

	context.globalCompositeOperation = "source-over";

	//输出数字
	context.font = "bold 4rem Arial";
	context.fillStyle = '#adaeb2';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.moveTo(120, 120);
	context.globalAlpha = 1;
	context.fillText(parseInt(processValue / 4), 120, 110);
	context.font = "normal 1rem Arial";
	context.fillText("%", 120, 150);
	processValue += 1;
}
var thisstaus = 0;
var tanhao = false;
// 倒计时
function drawProcess() {
	if (!imgload) {
		return;
	}
	if (processValue > 400) {
		clearTimeout(processTime); //加载完成后
		return;
	}
	var text = processValue + "%";
	var process = processValue;
	context.clearRect(0, 0, 240, 240);
	context.globalAlpha = 1;
	//加载灰色进度条图片
	var img = document.getElementById("imgprocess");
	context.drawImage(img, 0, 0);
	context.globalCompositeOperation = "destination-out";

	//加载进度
	context.beginPath();
	context.moveTo(120, 120);
	context.arc(120, 120, 192, Math.PI * 1.5, Math.PI * 1.5 + Math.PI * 2 * process / 400, false);
	context.closePath();
	context.fillStyle = "#ccc";
	context.globalAlpha = 1;
	context.fill();

	context.globalCompositeOperation = "source-over";

	//输出数字
	context.font = "bold 4rem Arial";
	context.fillStyle = '#adaeb2';
	// context.shadowBlur=20;
	// context.shadowColor="#FFF";
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.moveTo(120, 120);
	context.globalAlpha = 1;
	if (tanhao) {
		context.fillText("!!", 120, 110);
	} else {
		context.fillText(Math.abs(parseInt((processSpeed * processValue) / 1000) - 8), 120, 110);
	}
	context.font = "normal 1rem Arial";
	context.fillText("sec", 120, 150);
	processValue += 1;
}
var processValue = 0; //开始进度
var endValue = 100; //停止进度
var processSpeed = 20; //速度控制
var canvas = document.getElementById("canvas-process");
var context = canvas.getContext('2d');

var handTime = null;
var handi = 0;

var btnImg = false;
if (document.getElementById('startBtn').complete) {
	btnImg = true;
	canvasBtn(1);
}
document.getElementById('startBtn').onload = function() {
	btnImg = true;
	canvasBtn(1);
};


function canvasBtn(active) {
	var canvas = document.getElementById("canvas-btn");
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, 300, 200);
	context.globalAlpha = 1;
	if (active === 1) {
		var img = document.getElementById("startBtn");
	} else {
		var img = document.getElementById("startBtnClick");
	}
	context.drawImage(img, 0, 0);

}
var skipstart = false;
$("#canvas-btn").on("touchstart", function() {
	canvasBtn(2);
	thisstaus = 1;
	$("#hand-message").text("准备开始")
	processValue = 0;
	var $this = $(this);
	if (skipstart == false) {
		handi = 0;
	} else {
		handi = 50;
	}

	clearInterval(handTime);
	handTime = setInterval(function() {
		handi++;
		if (handi === 1 && skipstart == false) {
			$(".step-2").fadeOut(300, function() {
				$(".step-3").fadeIn(300, function() {
					$(".bottom li").eq(2).addClass('active').siblings('li').removeClass('active')
					$(".bottom .step").animate({
						width: 75 + "%"
					})
				});
			});
		}
		if (handi > 50 && handi <= 450) {
			skipstart = true;
			tanhao = false;
			drawProcess();
			$("#hand-message").text("按住按钮，持续吹气");
		}
		if (handi > 450) {
			tanhao = false;
			$("#hand-message").text("完成");
			$("#canvas-btn").hide();
			clearInterval(handTime);
			handi = 0;
			processOpen();
		}
	}, 20)
	$("#canvas-btn").on("touchend", function(e) {
		if (thisstaus != 1) {
			return;
		}
		canvasBtn(1);
		$("#hand-message").text("按钮已松开，请重新吹气");
		tanhao = true;
		drawProcess();
		processValue = 0;
		handi = 0;
		clearInterval(handTime);
	})
})
//$(".warp").show();
//processOpen();

function processOpen() {
	var timePro = null;
	var timep = 0;
	processValue = 0;
	thisstaus = 2;
	$("#hand-message").text("测试完成，大数据分析中");
	timePro = setInterval(function() {
		timep++;
		TimeProcess();
		if (timep > 400) {
			clearInterval(timePro);
			$(".step-3").fadeOut(300, function() {
				$(".step-4").fadeIn(300, function() {
					context.clearRect(0, 0, 240, 240);
					$(".bottom li").eq(3).addClass('active').siblings('li').removeClass('active');
					$(".gray-bg").css("position", "fixed");
					//写入随即气体值
					appBreat();
					// 排名
					$(".health-steer").html("您打败了全国<strong style='font-size:2.2rem;'> " + itemPaiMing + "% </strong>的人");
					//健康状态
					$(".health-body-text").text(itemDuanZi);
					//数字动画
					numberStrat();
					//写入健康建议
					healthItem();
					//画入饼图
					canvasPie();
					$(".bottom .step").animate({
						width: 100 + "%"
					})
				});
			});
		}
	}, 20);
}

//产生随机数
function banduRand(low, high) {
	return Math.random() * (1 + high - low) + low;
}

var otherBreat = [
	[],
	[],
	[],
	[],
	[],
	[101.67, 5, 2], // c3h6o
	[0.32, 5, 2], // c4h80
	[0.11, 5, 2], // c5h10o
	[25.7, 5, 1], // c3h8o
	[0.15, 5, 2], // c8h7n
	[11.78, 5, 2], // h2s
	[9.7, 5, 1], // ch4s
	[4.29, 5, 2], // c2h6s
	[0.061, 5, 3], // c2h6s2
	[0.3, 5, 1] // c2h6s3
];
// randRate(a, b, c)
//写入随即气体值
function appBreat() {
	var pieItem = $(".pie-item");
	var i = 0;
	for (; i < 15; i++) {
		pieItem.find("li").eq(i).find("em").html(breatArr[i]);
		if (i > 4) {
			pieItem.find("li").eq(i).find("em").html(randRate(otherBreat[i][0], otherBreat[i][1], otherBreat[i][2]));
		}
	}
}

function numberStrat() {
	number(itemFenShu[0], 2000, '.number-ten');
	number(itemFenShu[1], 2500, '.number-bits');
	number(itemFenShu[3], 3000, '.number-dec');
	//$(".bottom").html(itemFenShu);
}

function number(number, speed, ele) {
	if (number) {
		number = parseInt(number, 10);
	}
	//alert(number);
	for (var i = 0; i <= number; i++) {
		$(ele).append("<span>" + i + "</span>");
	}
	if (number === 0) {
		$(ele).animate({
			"top": "0px"
		}, function() {
			$(ele).css("top", 0);
		});
	} else {
		$(ele).animate({
			"top": -(number * 50) + "px"
		}, speed, function() {
			$(ele).css("top", -number * 50);
		});
	}

}
// console.log(itemFenShu)
// console.log(itemDuanZi)
// console.log(itemJianYi)
//



function healthItem() {
	var html = "";
	var thisLen = itemJianYi.length;
	for (var i = 0; i < thisLen; i++) {
		html += "<li><span>" + (i + 1) + ".</span>" + itemJianYi[i] + "</li>";
	}
	$(".health-anyl-item").empty().append(html);
}



function canvasPie() {
	var canvas = document.getElementById("canvas-pie");
	var context = canvas.getContext('2d');
	var starPI = 0; //开始弧度
	var middlePI = 0; //弧度中点
	var middlex = 0; //弧度中点x坐标
	var middley = 0; //弧度中点y坐标
	var movex = 0;
	var movey = 0;
	var movexx = 0;
	var ta = "";
	var linelength = 30;
	context.clearRect(0, 0, 300, 200);
	context.globalAlpha = 1;
	for (i = 0; i < qtArray.length; i++) {
		//加载进度
		context.beginPath();
		context.moveTo(150, 100);
		context.arc(150, 100, 80, Math.PI * 2 * starPI / 100, Math.PI * 2 * (starPI + qtArray[i][1]) / 100, false);
		context.closePath();
		context.fillStyle = qtArray[i][2];
		context.fill();

		//输出名称数字
		context.beginPath();
		context.font = "bold 12px Arial";
		context.fillStyle = '#fff';
		//找到弧线中点
		middlePI = Math.PI * 2 * starPI / 100 + Math.PI * 2 * qtArray[i][1] / 200;
		middlex = Math.round(Math.cos(middlePI) * 80 + 150);
		middley = Math.round(Math.sin(middlePI) * 80 + 100);
		context.arc(middlex, middley, 2, 0, Math.PI * 2, false);
		context.fillStyle = "#999";
		context.closePath();
		context.fill();

		//判断画线方向
		if (0 < middlePI && middlePI <= Math.PI / 2) //右下半部
		{
			movex = 10;
			movey = 10;
			movexx = linelength;
			ta = "right";

		}
		if (Math.PI / 2 < middlePI && middlePI <= Math.PI) //左下半部
		{
			movex = -10;
			movey = 10;
			movexx = -linelength;
			ta = "left";
		}
		if (Math.PI < middlePI && middlePI <= 1.5 * Math.PI) //左上半部
		{
			movex = -10;
			movey = -10;
			movexx = -linelength;
			ta = "left";
		}
		if (1.5 * Math.PI < middlePI && middlePI <= 2 * Math.PI) //右上半部
		{
			movex = 10;
			movey = -10;
			movexx = linelength;
			ta = "right";
		}
		if (i == 4) {
			movex = 10;
			movey = 10;
			movexx = linelength;
			ta = "right";
		}
		if (i == 2) {
			movex = 10;
			movey = -20;
			movexx = linelength;
			ta = "right";
		}
		context.beginPath();
		context.moveTo(middlex, middley);
		context.lineTo(middlex + movex, middley + movey);
		context.lineTo(middlex + movex + movexx, middley + movey);

		//context.closePath();
		context.font = "normal 0.6rem Arial";
		//context.fillStyle = '#adaeb2';
		context.textAlign = "center";
		//context.textBaseline = 'middle';
		context.fillText(qtArray[i][0] + ":" + qtArray[i][1] + "%", middlex + movex + movexx, middley + movey - 2);
		context.strokeStyle = "#999";
		context.stroke();

		//计算下一个起始点
		starPI += qtArray[i][1];
	}
}


//产生随机数
function banduRand(low, high) {
	return Math.random() * (high - low) + low;
}

function baiduIbeath() {
	var score = [
		[1, 40, 1],
		[41, 69, 20],
		[70, 85, 40],
		[86, 95, 30],
		[96, 100, 9]
	];
	var rank = [
		[1, 40],
		[41, 69],
		[70, 85],
		[86, 95],
		[96, 100]
	];

	var duanzi = [
		['肺部感染或存癌变可能，先救救你的呼吸道吧！', '各项指数显示出你的内脏已近枯竭，准备身边后面的事情吧！'],
		['二甲基硫和丙酮等微量元素过多，显示出你的胃病极其严重！', '你的身体出现红牌，氮和硫化氢含量超标，可能会导致心脏衰竭。', '厚德载雾，自强不吸！二氧化碳和未知元素量大，肺粘膜上应该有东东！'],
		['氨基酸和酮酸等元素较少，建议睡前减少床上运动，加强腰部锻炼即可！', '反映出缺少红细胞生成素、碳酸钙等，可能气血两虚，建议去看下中医！', '严重缺乏微量元素，触发心血管疾病可能性较大，请加强锻炼和食补', '一氧化氮吸入过多，健康状况略有危机，面色枯槁，强烈建议赶紧就医检查！', '综合指数表现良好，身体素质不错，但要少吃垃圾食品哦。', '甲醛吸入过多，健康存在隐患，同时肝脏负担过重，注意劳逸结合哦。'],
		['综合指数表现良好，您的健康状况不错，但是要注意胃部保养哦。', '矮油，微量元素平衡，你的健康状况良好，各关节生龙活虎，继续保持。', '氧气需求量大，脑神经有些衰弱, 需要加强睡眠质量，保持心情愉悦！', '小伙伴恭喜你哦，你的身体好的出奇，没啥大毛病！ ', '似您这般标致的健美人儿，得多少人为您倾倒啊', '你的身体倍儿棒，略微缺钙，多喝牛奶，还要注意牙齿保健。'],
		['撒花，健康指数爆表啦，但注意表经常熬夜哦，外星人也是人！', '您爱吃菠菜吗？比大力水手还强壮！可以永远远离白大褂！']
	];
	var jianyi = [
		'睡眠变差了吧？容易疲倦了吧？不知道了吧？快看，一大波粉尘正在逼近，吸了这么多雾霾粉尘，不排毒怎么行？医生伯伯说，萝卜可是肺脏排毒的最佳食品。萝卜、大肠和肺可是最佳排毒搭档哦，萝卜能助大肠排泄宿便，而大肠通畅利于肺排出毒素。', '雾霾天气怎么破？有木有空气清洁神器？重推居室里清洁“法宝”——苔藓植物。医师团建议，多买些苔藓植物，放在浴室、厨房等阴湿环境中。你造么？一盆苔癣植物竟然等于九台生物空气清洁器。用它来吸附灰尘，杀灭空气中的有害微生物，都不是问题，这样你的身体才能更健康。', '无论身体状况如何，平时的细心呵护才是关键！医师团建议，平时要多多关心自己的身体。不要经常熬夜，长期晚睡会老的很快；不要经常吃辛辣的食物，会对肠胃造成伤害。另外，不要太宅，适当的去户外做做运动，对身体健康很有帮助。', '让毛孔酣畅淋漓的进行大呼吸吧！汗液也是有效的排毒方式哦，可以选择在宽敞的室内来一场激情劲爆的拉丁，又或者放些轻音乐，做一场瑜伽，使汗液分泌的更畅快，排除身体深处毒素，史上最时尚的排毒方法哟。', '防霾有神功，葵花点穴手。手背上，第1、2掌骨间，当第2掌骨桡侧的中点处可是排毒穴位哦，按压此处可以更有效的清除体内毒素，早按早轻松哦。', '皮肤越来越差，赘肉越来越多，免疫力低下，视力变得模糊，这都是熬夜惹的祸，研究指出熬夜是引起亚健康的重要因素。长期熬夜还会慢慢地出现失眠、健忘、易怒、焦虑不安等神经、精神症状。年轻人熬夜后一定要进行及时的补救措施，补充睡眠，多吃豆类，鱼肉等健脑的食品，别让熬夜吞噬了你的生活哦。', '雾天见不到太阳肿么办，这可会影响维生素D的获取从而导致缺钙。那么，多吃点豆腐来补充维生素D吧。记住，此豆腐非彼豆腐哦。', '屌丝们都不知道吧？女神最钟爱的百合可是有抗毒功能的哟。雾霾天的时候，给你心爱的他（她）煮一碗爱心满满的百合粥吧，既能滋阴养肺，又能美颜抗毒哦。', '雾霾天还敢毫无忌口？不要命了么？雾天的饮食一定要选择清淡易消化且富含维生素的食物哦，还要大口大口的喝水，这样不仅可补充各种维生素和无机盐，还能起到润肺除燥、祛痰止咳、健脾补肾的作用哟。', '树木是PM2.5的天敌，在树木众多的环境下做运动，可使紧张的神经顿觉轻松，疲劳也会随之消失。医师团建议，早上不要睡懒觉，早起可去附近公园多多锻炼下，做做保健操，或者跳跳广场舞，慢跑也可以，呼吸新鲜空气，每日坚持半个小时，对健康养生帮助很大。', '每个人有不同程度的睡眠障碍，其中有一个原因被很多人忽视了，床摆放的位置与方向不对，会影响睡眠和人体健康。首先，床头不宜东西朝向，尽量采用南北向睡姿，另外，每天倒立10分钟利用地磁力净化血液，可防止内脏下垂，滋养头脑的松果体和脑垂体，防止头部的甘露被胃火消化，能很好的滋养面容，延缓衰老！', '深深深呼吸，每次正常呼吸时，肺部都有残余的废气无法排出，久而久之，形成大患。所以，每间隔几个小时，进行一次深度呼吸，给你满满PM2.5的肺来一次大扫除吧！', '美剧中，无论疯狂主妇、黑道家族或者少男少女，因满月时人性欲亢奋加情绪错乱上演了最疯狂故事。医师团建议，为了预防满月之时的情绪波动，尽量绿色出行，最好是乘坐公共交通工具，这样就可以让身体习惯与宇宙产生了共鸣，身体自由舒展，缓解疲劳，缓解负能量的发生，还防霾霾。', '已经雾霾中毒了肿么办？不要慌，快去找雾霾克星---青菜吧。专家表示雾霾之所以会“中毒”在于一部分细颗粒物会直接进入肺部，甚至是血液，造成氧化应激损伤。而青菜中富含维生素C、类黄酮等多种抗氧化物，对抗这种损伤简直是手到擒来哦。', '秋裤是神马？时尚男女们可不要小瞧秋裤哦，医生伯伯说过哦，户外运动时一定要穿秋裤哦，因为运动时散发的热量会与秋裤材质相结合，形成微磁场，让PM2.5和你银河两隔哟。'
	];
	//产生1个段子
	function getDuanzi(index) {
		var dz = duanzi[index];
		//console.log(dz);
		var pos = parseInt(banduRand(0, dz.length - 1));

		return dz[pos];
	}
	//产生3个建议
	function getJianyi() {
		var poss = [],
			result = [];
		while (poss.length < 3) {
			var pos = parseInt(banduRand(0, jianyi.length - 1));
			//判断是否重复
			if (poss.indexOf(pos) == -1) {
				poss.push(pos);
			}
		}
		//
		for (var i = 0; i < poss.length; i++) {
			result.push(jianyi[poss[i]]);
		}
		return result;
	}
	//产生排名 m=分数 s=概率区间
	function getRanking(m, s) {
		//概率段
		var sr = score[s];
		//分数段
		var rk = rank[s];
		var low = rk[0],
			high = rk[1];
		//
		if (high < 100) {
			high += 1;
		}

		var ranking = 0;
		for (var i = 0; i < s; i++) {
			ranking += score[i][2];
		}
		//console.log(s,m, low, high, sr[2], ranking,((m - low) * sr[2] / (high - low)) + ranking);
		return (((m - low) * sr[2] / (high - low)) + ranking).toFixed(1);
	}
	//随机数
	var r = parseInt(banduRand(1, 100));
	//概率区间
	var section = (function() {
		for (var i = 0; i < score.length; i++) {
			var sr = score[i];

			//if (sr.indexOf(r) > -1) {
			//    return i;
			//}
			if (r >= sr[0] && r <= sr[1]) {
				return i;
			}
		}
	})()
	//在指定的概率区间产生一个随机分数
	var mark = banduRand(rank[section][0], rank[section][1]).toFixed(1);
	//switch (section) {
	//    case 0:
	//        mark = banduRand(1, 40).toFixed(1);
	//        break;
	//    case 1:
	//        mark = banduRand(41, 69).toFixed(1);
	//        break;
	//    case 2:
	//        mark = banduRand(70, 85).toFixed(1);
	//        break;
	//    case 3:
	//        mark = banduRand(86, 95).toFixed(1);
	//        break;
	//    case 4:
	//        mark = banduRand(96, 99).toFixed(1);
	//        break;
	//}
	//
	return {
		fenshu: mark,
		paiming: getRanking(mark, section),
		duanzi: getDuanzi(section),
		jianyi: getJianyi()
	};
}

//a:基数;b:浮动率;c:小数位数
function randRate(a, b, c) {
	if (isNaN(a) || isNaN(b) || isNaN(c)) return 0;

	var low = a * (100 - b) / 100;
	var high = a * (100 + b) / 100;
	var result = parseFloat(banduRand(low, high).toFixed(c));

	while (result > high || result < low) {
		result = parseFloat(banduRand(low, high).toFixed(c));
	}
	//console.log(low, high, result);
	return result;
}

function gasFun(n2, o2, co2, h2o, other) {
	o2 = randRate(o2, 3, 2);
	co2 = randRate(co2, 3, 2);
	h2o = randRate(h2o, 3, 2);
	other = randRate(other, 3, 2);
	n2 = parseFloat((100 - o2 - co2 - h2o - other).toFixed(2));

	return {
		n2: n2,
		o2: o2,
		co2: co2,
		h2o: h2o,
		other: other
	};
}