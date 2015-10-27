/*!
 *  Item: 996手机游戏
 *  Copyright:  Teiron Network Technology Co.,Ltd
 *  Author: Joel
 *  Update: 
 */
 
 
/* =======================================
 * 必须开发的功能
 *   •……………………
 *   •……………………
 *   •……………………
 *
 * 必须解决的问题
 *   •……………………
 *   •……………………
 *   •……………………
 *
 * 需要配合的工作
 *   •……………………
 *   •……………………
 *   •……………………
 *
 * 预期可改进方案
 *   •……………………
 *   •……………………
 *   •……………………
 *
 * ======================================= */
var loginStatus = 0;

 
//=====================================
(function(){	//模块闭包开始，必须添加
//=====================================

//页面加载完成后执行以下函数 (模块开关)
$(function(){
	//微博分享
	//wbshare();
	//搜索
	searchRes(); 
	//导航定位
	nav_init();
	//登陆状态
	isLogin();
	
    //登陆框
    login();
	//收藏
	collect();
    $('#login_wrap').floatObj({id : $id('login_wrap'), alignCenter : true, closeBtn : $('#closeLogin')});

    $('#layer_wrap').floatObj({id : $id('layer_wrap'), alignCenter : true, closeBtn : $id('closeLayer'), layerDec : $id('layer_dec')});
    $('#login_comment').click(function(){
    	//暂停异步登录
        //$id('login_wrap').show();
        //return false;
    });

    // 二维码显示
	showTowCode();
});
    
//登陆框
function login(){
	var username = $id('username'),
	 	loginTips = $id("loginTips"),
		password = $id('password'),
		bindEventFocus = function(obj){
		var _this = obj, val;
		_this.onfocus = function(){
			val = this.value;
			if(this.id == 'password'){
				val.indexOf('请输入密码') > -1 ? this.value = '' : null;
				this.type = 'password';
			}else{
				val.indexOf('请输入用户名') > -1 ? this.value = '' : null;
			}
		};
		_this.onblur = function(){
			val = this.value;
			if(this.id == 'password'){
				if(val == '请输入密码' || val == ''){
					this.value = '请输入密码';
					this.type = 'text';
				}
			}else{
				val != '请输入用户名' && val != '' ? null : this.value = '请输入用户名';
			}
		};
	};
	bindEventFocus(username);
	bindEventFocus(password);
	$('#login_wrap .submit_btn').click(function(){
		checkLogin();
		return;
	});
	$('#login_wrap input').keydown(function(e){
	    if(!e) e = window.event;//火狐中是 window.event
	    if((e.keyCode || e.which) == 13){
	    	checkLogin();
	    	return;
	    }
	});
}


function checkLogin(){
	var autoLogin = $("#autoLogin").is(":checked") ? 1 : 0,
		username = $("#username").val(),
		password = $("#password").val(),
		url = "http://u.996.com/user/login_verify",
		goToUrlz = window.location.href,
		data = {name:username,password:password,autoLogin:autoLogin};
		if(username == '请输入用户名' || username == ''){
			loginTips.innerHTML = '请填写用户名！';  
            loginTips.style.color = "red";
            loginTips.style.display = "block";
            return false;
		}
		if(password == '请输入密码' || password == ''){
			loginTips.innerHTML = '请填写密码！';  
            loginTips.style.color = "red";
            loginTips.style.display = "block";
            return false;
		}
	$.ajax({url:url,data:data , type:"GET", dataType:"jsonp", success:function (jsonp){
		if(jsonp.msg == 1){
			window.location = "http://u.996.com/user/getToUrl?urla=" + goToUrlz;
			//window.location = goToUrlz;
		}else{
			loginTips.innerHTML = jsonp.msg;  
            loginTips.style.color = "red";
            loginTips.style.display = "block";
            return false;
		}
	}});
}

    
function collect(){
	var sethome_btn = document.getElementById('setHome'),
		addFavorite_btn = document.getElementById('addFavorite'),
		toDesktop_btn = document.getElementById('toDesktop');
	
	toDesktop_btn.onclick = function(){
		toDesktop(window.location,'996手机第一门户网站');	
		return false;
	}
	
	sethome_btn.onclick = function(){
		sethome(this,window.location);
		return false;	
	}
	addFavorite_btn.onclick = function(){
		AddFavorite(window.location,document.title);
		return false;	
	}
	
	//把996添加到桌面 
	function toDesktop(sUrl,sName){
		try{ 
			var WshShell = new ActiveXObject("WScript.Shell"); 
			var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url"); 
			oUrlLink.TargetPath = sUrl; 
			oUrlLink.Save(); 
		}catch(e){   
			alert("当前IE安全级别不允许操作！");   
		}
	}
	
	//加入收藏夹  
	function AddFavorite(sURL, sTitle) {   
	    try{   
	        window.external.addFavorite(sURL, sTitle);   
	    }catch(e){   
	        try{   
	        	window.sidebar.addPanel(sTitle, sURL, "");   
	        }catch(e){   
	            alert("加入收藏失败，请使用Ctrl+D进行添加");   
	        }   
	    }   
	}   

	//设置为首页   
	function sethome(obj, vrl) {   
		try {   
			obj.style.behavior = 'url(#default#homepage)';   
			obj.sethomepage(vrl);   
		}catch(e){   
			if (window.netscape) {   
				try{   
					netscape.security.privilegemanager.enableprivilege("universalxpconnect");   
				}catch(e){   
					alert("此操作被浏览器拒绝！n请在浏览器地址栏输入about:config并回车,然后将 [signed.applets.codebase_principal_support]的值设置为 'true',双击即可。");   
				}   
				var prefs = components.classes['@mozilla.org/preferences-service;1'].getservice(components.interfaces.nsiprefbranch);   
				prefs.setcharpref('browser.startup.homepage', vrl);   
			}
		}
	} 
}
//导航定位
function nav_init() {

    var siteNav = $('.top .menu .list'),
        nav = siteNav.children('ul'),
        navLi = nav.find('li'),
        link = navLi.children('a'),
        location = window.location.toString();

    for(var i = 0,len = navLi.length; i<len;i++){
        link[i].index = i;
        var flag = link[i].getAttribute('flag');

        //alert(location.indexOf(flag))
        if(location.indexOf(flag) != -1) {
           link.removeClass('on');
           link[i].className += ' on'; 
        }
    }
}

//登陆状态
function isLogin() {
    var burl = encodeURIComponent(window.location.href); 
    if("undefined" == typeof(api_host))  api_host = 'http://api.996.com';  
    api_host = 'http://api.996.com';  
    $.getJSON(api_host+"/index.php?c=member&m=userInfo&burl="+burl+"&n="+Math.random()+"&callback=?",
	function(data){ // 往后台传递的参数1;
	 	if(data.login_url && data.register_url){
	 		var html = '<a hidefocus="true" class="fb" href="'+data.login_url+'">登录</a><a hidefocus="true" href="'+data.register_url+'">注册</a>';
	        $('#userLogin').html(html);  //调用用来显示内容的div
	        $(".fb").click(function(){
	            //$id('login_wrap').show();
	            //return false;
	        });
	        $('.setScore').attr('loginAfter','0');
	        loginStatus = 0;
	    }else{
	     	var html = '<span class="user"><a target="_blank" href="http://bbs.996.com/home.php?mod=spacecp"><img src="'+data.avatar_img_url+'" /></a><a target="_blank" href="http://bbs.996.com/home.php?mod=spacecp"><i>'+data.username+'</i></a>|</span><span class="quit"><a hidefocus="true" href="'+data.quit_url+'">退出</a></span>';
	        $('#userAfter').html(html).show();  //调用用来显示内容的div
	        $('.setScore').attr('loginAfter','1');
	        loginStatus = 1;
	    }
	});
}

//搜索
function searchRes(){
	
	//按enter键提交
	$('.search input.keyword').onkeydown = function(e){
	    if(!e) e = window.event;//火狐中是 window.event
	    if((e.keyCode || e.which) == 13){
	        if($('form[name=searchForm]') != 'undefined')$('form[name=searchForm]').submit();
	    }
	}

	$('.search a.btn').click(function(){
		var keyword = $('.search input[name=keyword]').val();
		if($.trim(keyword) == "" && $(".searchTag").length > 0){
			keyword = $(".searchTag").text();
		}
		if(keyword != ''){
			$('.search a.btn').attr('href','/search/index.html?keyword='+keyword) ;
		}else{
			return false;
		}
	});

	var val;
	$(".keyword").bind({
		focus: function(){
			$(".searchTag").hide();
		},
		blur: function(){
			val = $(".keyword").val();
			if($.trim(val) == ""){
				$(".keyword").val("");
				$(".searchTag").show();
			}
		},
		keypress: function(event){
			if(event.keyCode==13){
				$('.search a.btn').click();
			}
		}
	});
}

// function wbshare(){
// 	var sina_share = $('.sina_share .wb_name').eq(0),
// 		qq_share = $('.qq_share .wb_name').eq(0),
// 		qzone_share = $('.qzone_share .wb_name').eq(0);	
// 	sina_share.bind('click',function(){shareToApp.tSinaWb();});
// 	qq_share.bind('click',function(){shareToApp.tQQWb();});
// 	qzone_share.bind('click',function(){shareToApp.tQQZone();});
// }

//星星展示效果（父元素为目标对象，picName为图片名拼接的字符串，01是亮，02是暗，图片格式路径可自行修改）
lightUpStar = function(parent, picName, sorceTxt){
	var imgurl = $('#images-url').val();
	var img = parent[0].getElementsByTagName('img'), currIndex;
	$(img).mouseover(function(){
		currIndex = $(this).index();
		//alert(currIndex)
		!sorceTxt ? '' : sorceTxt[0].innerHTML = (currIndex+1)*2;
		if(currIndex >= 0){
			for(var i=0; i<=currIndex; i++){
				img.item(i).setAttribute('src',imgurl + '/style/images/' + picName +'01.jpg');
			}
			if(currIndex + 1 >= img.length) return false;
			else{
				for(var j=currIndex+1; j<img.length; j++){
					img.item(j).setAttribute('src',imgurl + '/style/images/' + picName +'02.jpg');	
				}	
			}
		}
	});
}


//分享到新浪微博、腾讯微博、QQ空间、人人网
shareToApp = {
	tSinaWb : function() {
		var param = {
			url:location.href,
			appkey:'', /**您申请的应用appkey,显示分享来源(可选)*/
			title:shareText, /**分享的文字内容(可选，默认为所在页面的title)*/
			pic:'', /**分享图片的路径(可选)*/
			ralateUid:'' /**关联用户的UID，分享微博会@该用户(可选)*/
		}
		var temp = [];
		for( var p in param ){
			temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
		}
		window.open("http://service.weibo.com/share/share.php?" + temp.join('&'), "_blank", "width=615,height=505");
	},
	tQQWb : function() { 
        var t = encodeURI(shareText); 
        var url = encodeURIComponent(location.href); 
        var appkey = encodeURI("appkey");  
        var site = "";  
        var u = 'http://v.t.qq.com/share/share.php?title=' + t + '&url=' + url + '&appkey=' + appkey + '&site=' + site; 
        window.open(u, '转播到腾讯微博', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no'); 
    },
	tQQZone : function() {
        var url = encodeURIComponent(location.href); 
		var u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url;
		window.open(u);
	},
	tRR : function() {
        var t = encodeURI(shareText); 
        var url = encodeURIComponent(location.href); 
		var u = "http://share.renren.com/share/buttonshare.do?link=" + url + "&title=" + t;
        window.open(u, "分享到人人网", "width=600,height=450"); 
	}
}

 //eashing插件缓动效果
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});



// 二维码显示
function showTowCode(){
	$(".weixin").bind({
		mouseenter:function(){
			$(".two-code").show();
		},
		mouseleave:function(){
			$(".two-code").hide();
		}
	})
}
//=====================================
})();	//模块闭包结束，必须添加
//=====================================