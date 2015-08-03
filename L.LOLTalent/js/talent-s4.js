// LOL.Replays.Net 天赋系统 by Adang 2013-11-27;
(function($){
	// 天赋
	Talent = {};
	// 天赋数据;
	Talent.info = {
		data  : null,
		list : null,  // 对象
		rest : null,
		Max : [30,30],
		Val : [0,0,0],
		ValCN : ['攻击','防御','通用'],
		url : location.hash.substring(1) || location.search.substring(1)
	};
	// 加载天赋数据;
	Talent.ajax = function(){
		$.ajax({
			url: "../ajax/demo.json?" + Math.random(),
			dataType: "json",
			success: function( data ){
				Talent.info.data = data;
				Talent.init();
			},
			error: function( e ){
				//console.log( e );
			}
		});
	};
	// 取得数据后执行;
	Talent.init = function(){

		// 【note】this.info 存储起来
		var obj = this.info;
		obj.list = $("#Talent-list");
		obj.rest = $("#Rest");

		this.list();
		//console.log( Talent.info.data.length );
		//alert(Talent.info.data.responseText);
	};
	// 输出列表;
	Talent.list = function(){
		var obj = this.info, uls = obj.list.find('ul');
		uls.html('');
		for(var i = 0; i < obj.data.length; i++){
			// k列位置，tr第几行
			var thas = obj.data[i], id = thas.ID,  k = id.substring(0, 1), tr = id.substring(1, 2), cla = id.substring(1, 3), gray = "", replays = "";
			console.log(id, k, tr, cla, obj.Val[k], tr*4);
			// todo why?
			if( obj.Val[k] < (tr * 4) ){
				gray = 'class="gray"';
				replays = 'class="s3"'
			}
			var Max = '<span ' + replays + '>0/' + thas.Max + '</span>';
			uls.eq(k).append('<li data-id="' + id + '" class="li-' + cla + '"><s ' + gray + '></s> ' + Max + '</li>');
		}

		Talent.onList();  // 给列表事件;
		if(obj.url){
			Talent.Share.Given(obj.url);  // 读取分享值;
		}else{
			Talent.output(); // 更新统计;
		}
	};
	// 获取当前数据;
	Talent.getThisData = function(val){
		var d = Talent.info.data, i = 0, l = d.length;
		for ( ; i < l; i++ ) {
			if(d[i].ID == val){
				return d[i];
			}
		}
	};
	// 点击列表;
	Talent.onList = function(){
		var obj = this.info, lis = obj.list.find('li'), self = this;
		lis.mouseup(function(e){
			document.body.oncontextmenu = function(){ return false; };  // 禁用右击;
			var $this = $(this), id = $this.attr('data-id'), k = id.substring(0, 1), tr = id.substring(1, 2), $span = $this.find('span'), val = parseInt($span.text()), tData = self.getThisData(id);
			var bMeet = true;
			if(tData.Meet != ""){
				bMeet = Talent.ifMeet(tData.Meet);
			}
			// IE7 8 下面值为1;
			if(e.button == 0 || e.button == 1){
				// 添加值;
				if( bMeet && val < tData.Max && obj.Val[k] >= (tr * 4) &&  obj.Max[0] > 0){
					$span.html((val + 1) + "/" + tData.Max);
					if((val + 1) == tData.Max){ $span.addClass('max');}
					obj.Val[k]++;   // 当前分类++;
					obj.Max[0]--;   // 总值--;
				}
			}else if(e.button == 2){
				// 减值;
				var q = Talent.ifMinu($this);
				if( bMeet && val > 0 && q){
					$span.html(( val - 1) + "/" + tData.Max);
					if((val - 1) < tData.Max){ $span.removeClass('max');}
					obj.Val[k]--;   // 当前分类++;
					obj.Max[0]++;   // 总值--;
				}
			}
			Talent.hoverBox.show($this, e); // 更新浮层数据;
			Talent.output();  // 更新统计;
			Talent.newList(); // 更新技能树;
		});

		// 移上去显示属性;
		lis.mousemove(function(e){
			Talent.hoverBox.show($(this), e);
		});
		lis.mouseout(function(){
			Talent.hoverBox.hide();
		});

	};
	// 判断是否能减;
	Talent.ifMinu = function(t){
		var nextAll = t.nextAll();

		//console.log( val );
		for(var i = 0; i < nextAll.length; i++){
			var v = parseInt(nextAll.eq(i).find('span').text()), val = 0;
			for(var j = i; j < nextAll.length; j++){
				val += parseInt(nextAll.eq(j).find('span').text());
			}
			if(v == 0){ continue;}
			var obj = this.info, id = nextAll.eq(i).attr('data-id'), k = id.substring(0, 1), tr = id.substring(1, 2);
			//console.log( [(obj.Val[k] - val),(tr * 4), (obj.Val[k] - v)]);
			// 总值 - 后面的总值 或 总值 - 当前值  == 条件一 ;
			if((obj.Val[k] - val) == (tr * 4) || (obj.Val[k] - v) == (tr * 4)){
				return false;
			}
		}
		return true;
		//console.log( nextAll.length );
	};
	// 移上去显示属性;
	Talent.hoverBox = {
		show : function(t, e){
			var obj = Talent.info, id = t.attr('data-id'), k = id.substring(0, 1), tr = id.substring(1, 2), tData = Talent.getThisData(id), arr = [], lv = parseInt(t.find('span').text()), arrText = tData.CN.split('|'), Text = [];
			if(lv == 0){
				Text = ['<p>' + arrText[0] +  '</p>'];
			}else{
				Text = ['<p>' + arrText[lv - 1] +  '</p>'];
			}
			if(lv > 0 && lv != tData.Max){
				Text.push('<p><i>下一级：</i>' + arrText[lv] + '</p>');
			}
			arr.push('<dl>');
			arr.push('<dt class="dt-' + k + '">' + tData.Name + '</dt>');
			arr.push('<dd class="lv">等级：' + lv + '/' + tData.Max + '</dd>');
			arr.push('<dd class="text">' + Text.join('') + '</dd>');

			var term = ['<dd class="if">'], meet = tData.Meet.split("=");
			if(obj.Val[k] < (tr * 4)){
				// 基础点数;
				term.push('<p>需要在' + obj.ValCN[k] + '天赋至少分配' + (tr * 4) + '点。</p>');
			}
			if(meet.length > 1 && meet[1] != 0){
				var meetData = Talent.getThisData(meet[0]);
				if(meet[1] != parseInt(obj.list.find('li[data-id="' + meet[0] + '"]').text())){
					term.push('<p>需要在' + meetData.Name + '天赋至少分配' + meet[1] + '点。</p>');
				}
			}
			if(term.length > 1){
				term.push('</dd>');
				// 添加条件;
				arr.push(term.join(''));
			}


			arr.push('</dl>');
			if(!$(".Talent-pop-type").html()){
				$("body").append('<div class="Talent-pop-type"></div>');
			}
			var elems = $(".Talent-pop-type");
			elems.html(arr.join('')).show();
			elems.css({left:e.pageX + 20,top:e.pageY + 20});
		},
		hide : function(){
			$(".Talent-pop-type").hide();
		}
	};
	// 判读条件;
	Talent.ifMeet = function(val){
		var obj = this.info, val = val.split('='), v = parseInt(obj.list.find('li[data-id="' + val[0] + '"]').text());
		return (parseInt(val[1]) == v);
	};
	// 更新技能树;
	Talent.newList = function(){
		var obj = this.info, lis = obj.list.find('li'), thas = this;
		for(var i = 0; i < lis.length; i++){
			var t = lis.eq(i), id = t.attr('data-id'), k = id.substring(0, 1), tr = id.substring(1, 2), s = t.find('s'), tData = thas.getThisData(id), m = true, span = t.find("span");
			// 是否有其它条件;
			if(tData.Meet != ""){
				m = Talent.ifMeet(tData.Meet);
			}
			// 变亮或变暗;
			if( (m || tData.Meet.split('=')[1] == 0) && obj.Val[k] >= (tr * 4) ){
				s.removeClass('gray');
				span.removeClass('s3');
			}else{
				s.addClass('gray');
				span.addClass('s3');
			}
			// 没有技能点;
			if(obj.Max[0] == 0 && parseInt(t.find('span').text()) == 0 ){
				s.addClass('gray');
				span.addClass('s3');
			}

		}

	};


	var RN = this.RN || {};
	RN.Share = {
		init : function(fv){
			if(navigator.appVersion.match(/\bMSIE\b/)){
				window.clipboardData.setData( 'text', Talent.Share.data );
				if(Talent.Share.data){
					this.copy();
				}
			}else{
				document['Copy'].setText( Talent.Share.data );
			}
		},
		copy : function(val){
			alert('复制成功；现在您可以分享您的天赋加点了！');
			Talent.Share.Close();
		}
	};

	// 统计;
	Talent.output = function(){
		var obj = this.info, strong = obj.list.find('strong');
		strong.html(function(index,html){
			$(this).html(obj.Val[index]);
			$(".Talent-footer li").eq(index).html(obj.Val[index]);
			$(".Talent-addup li").eq(index).html(obj.Val[index]);
		});
		obj.rest.html(obj.Max.join('/'));
	};
	// 重置;
	Talent.Reset = function(){
		var obj = this.info;
		obj.Max = [30,30];
		obj.Val = [0,0,0];
		obj.url = null;
		Talent.list();
		//Talent.output();
	};

})(jQuery);

$(document).ready(function(){
	Talent.ajax();
});