(function() {
	// var $backToTopTxt = "返回顶部",
	var	$backToTopEle = $('<div class="backToTop"><a class="opinion" href="" title="意见反馈"></a><a class="gotop"href="javascript:void(0);">返回顶部</span></div>').appendTo($("body"));
		$backToTopEle.find(".gotop").click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop(),
			winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });
})();