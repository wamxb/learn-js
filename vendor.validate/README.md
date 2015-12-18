### 用法
```js
function checkMsg(cid) {
	var checkMsg = cid.validate({
		focusInvalid: true,
		onkeyup: false,
		errorPlacement: function(error, element){
			error.appendTo(element.parent().next());
		},
		success: function(label) {
			label.html('&nbsp;').addClass('checked');
		}
	});
	return checkMsg;
}
```

### 调用方式
* 另个一种验证方法（将所有的与验证相关的信息写到class属性中方便管理）
1. 引入一个新的jQuery插件---jquery.metadata.js(支持固定格式解析的jQuery插件)
2. 改变调用的验证方法
```js
$(document).ready(function(){  
    //将$("#commentForm").validate();  改成  
    $("#commentForm").validate({meta: "validate"});  
}); 
```
3. 将验证规则全部编写到class属性中
```html
class="{validate:{required: true, minlength: 2, messages:{required:'请输入姓名', minlength:'请至少输入两个字符'}}}"  
class="{validate:{required: true, email: true, messages:{required:'请输入电子邮件', email:'请检查电子邮件的格式'}}}"  
```

* 也可以通过name属性来关联字段和验证规则的验证写法（验证行为和HTML结构完全脱钩）
```js
$("#commentForm").validate({  
   rules: {  
      username: {  
         required: true,  
         minlength: 2  
      },  
      email: {  
         required: true,  
         email: true  
      },  
      url:"url",  
      comment: "required"  
   },  
   messages: {  
      username: {  
         required: '请输入姓名',  
         minlength: '请至少输入两个字符'  
      },  
      email: {  
         required: '请输入电子邮件',  
         email: '请检查电子邮件的格式'  
      },  
      url: '请检查网址的格式',  
      comment: '请输入您的评论'  
   }  
});
```

### 自定义一个验证方法  
```js
$.validator.addMethod(
    "formula", //验证方法名称  
    function(value, element, param) {//验证规则  
        return value == eval(param);  
    },   
    '请正确输入数学公式计算后的结果'//验证提示信息  
);
$("#commentForm").validate({
   rules: {
      username: {
         required: true,
         minlength: 2
      },
      email: {
         required: true,
         email: true
      },
      url:"url",
      comment: "required",
      valcode: {
         formula: "7+9"
      }
   },
   messages: {
      username: {
         required: '请输入姓名',
         minlength: '请至少输入两个字符'
      },
      email: {
         required: '请输入电子邮件',
         email: '请检查电子邮件的格式'
      },
      url: '请检查网址的格式',
      comment: '请输入您的评论',
      valcode: '验证码错误'
   }
});

// 中文的验证
jQuery.validator.addMethod("chinese", function(value, element) {
var chinese = /^[\u4e00-\u9fa5]+$/;
return this.optional(element) || (chinese.test(value));
}, "只能输入中文");

// 邮政编码
jQuery.validator.addMethod("isZipCode", function(value, element) {
  var zip = /^[0-9]{6}$/;
  return this.optional(element) || (zip.test(value));
}, "请正确填写您的邮政编码!");
```


### 提示设为中文
```js
jQuery.extend(jQuery.validator.messages, {
    required: "必选字段",
	remote: "请修正该字段",
	email: "请输入正确格式的电子邮件",
	url: "请输入合法的网址",
	date: "请输入合法的日期",
	dateISO: "请输入合法的日期 (ISO).",
	number: "请输入合法的数字",
	digits: "只能输入整数",
	creditcard: "请输入合法的信用卡号",
	equalTo: "请再次输入相同的值",
	accept: "请输入拥有合法后缀名的字符串",
	maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
	minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
	rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
	range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
	max: jQuery.validator.format("请输入一个最大为{0} 的值"),
	min: jQuery.validator.format("请输入一个最小为{0} 的值")
});
```

### 常用方法及注意问题
* 用其他方式替代默认的 SUBMIT
```js
$().ready(function() {
 $("#signupForm").validate({
        submitHandler:function(form){
            alert("submitted");
            form.submit();
        }
    });
});
```
使用 ajax 方式
```js
 $(".selector").validate({
 submitHandler: function(form)
   {
      $(form).ajaxSubmit();
   }
 })
```
可以设置 validate 的默认值，写法如下：
```js
 $.validator.setDefaults({
 submitHandler: function(form) { alert("submitted!");form.submit(); }
});
```
如果想提交表单, 需要使用 form.submit()，而不要使用 $(form).submit()。

* debug，只验证不提交表单
如果这个参数为true，那么表单不会提交，只进行检查，调试时十分方便。
```js
$().ready(function() {
 $("#signupForm").validate({
        debug:true
    });
});
```
如果一个页面中有多个表单都想设置成为 debug，则使用：
```js
$.validator.setDefaults({
   debug: true
})
```
* ignore：忽略某些元素不验证
`ignore: ".ignore"`

* 更改错误信息显示的位置
`errorPlacement：Callback`
指明错误放置的位置，默认情况是：error.appendTo(element.parent());即把错误信息放在验证的元素后面。
```js
errorPlacement: function(error, element) {
  error.appendTo(element.parent());
}
```

参数 | 类型 | 描述 | 默认值
-----|------|----|-----
errorClass | String | 指定错误提示的 css 类名，可以自定义错误提示的样式 | "error"
errorElement | String | 用什么标签标记错误，默认是 label，可以改成 em | "label"
errorContainer | Selector | 显示或者隐藏验证信息，可以自动实现有错误信息出现时把容器属性变为显示，无错误时隐藏，用处不大 |
errorContainer | Selector | 显示或者隐藏验证信息，可以自动实现有错误信息出现时把容器属性变为显示，无错误时隐藏，用处不大 `errorContainer: "#messageBox1, #messageBox2"`|
errorLabelContainer | Selector | 把错误信息统一放在一个容器里面。 |
wrapper | String | 用什么标签再把上边的 `errorELement` 包起来 |

> 一般这三个属性同时使用，实现在一个容器内显示所有错误提示的功能，并且没有信息时自动隐藏。
errorContainer: "div.error",
errorLabelContainer: $("#signupForm div.error"),
wrapper: "li"

* 在项目中遇到在验证用户名是否存在时，发现不支持中文输入验证。解决办法是给用户名进行encodeURIComponent编码，后台再对接受的值进行urldecode解码
```js
user:{
  remote: {
       url: "chk_user.php", //服务端验证程序
       type: "post", //提交方式
       data: { user: function() {
           return encodeURIComponent($("#user").val()); //编码数据
       }}
  }
}
```


### 每个字段验证通过执行函数
`success：String,Callback``
要验证的元素通过验证后的动作，如果跟一个字符串，会当作一个 css 类，也可跟一个函数。
```js
success: function(label) {
    // set &nbsp; as text for IE
    label.html("&nbsp;").addClass("checked");
    //label.addClass("valid").text("Ok!")
}
```
添加 "valid" 到验证元素，在 CSS 中定义的样式 <style>label.valid {}</style>。
`success: "valid"`



### 验证的触发方式修改
下面的虽然是 boolean 型的，但建议除非要改为 false，否则别乱添加。

触发方式 | 类型 | 描述 | 默认值
-----|------|----|-----
onsubmit | Boolean | 提交时验证。设置为 false 就用其他方法去验证 | true
onfocusout | Boolean | 失去焦点时验证（不包括复选框/单选按钮） | true
onkeyup | Boolean | 在 keyup 时验证 | true
onclick | Boolean | 在点击复选框和单选按钮时验证 | true
focusInvalid | Boolean | 提交表单后，未通过验证的表单（第一个或提交之前获得焦点的未通过验证的表单）会获得焦点 | true
focusCleanup | Boolean | 如果是 true 那么当未通过验证的元素获得焦点时，移除错误提示。避免和 focusInvalid 一起用 | false

// 重置表单
```js
$().ready(function() {
 var validator = $("#signupForm").validate({
        submitHandler:function(form){
            alert("submitted");
            form.submit();
        }
    });
    $("#reset").click(function() {
        validator.resetForm();
    });

});
```



### 异步验证
`remote：URL`
使用 ajax 方式进行验证，默认会提交当前验证的值到远程地址，如果需要提交其他的值，可以使用 data 选项。
```js
remote: "check-email.php"
remote: {
    url: "check-email.php",     //后台处理程序
    type: "post",               //数据发送方式
    dataType: "json",           //接受数据格式
    data: {                     //要传递的数据
        username: function() {
            return $("#username").val();
        }
    }
}
```
> 远程地址只能输出 "true" 或 "false"，不能有其他输出。



### 规则
* required:      必选字段  
* remote:        验证地址(通过ajax之类的，验证用户名是否可用之类的)  
* email:         必须输入正确格式的电子邮件。
* url:           必须输入正确格式的网址
* date:          必须输入正确格式的日期。日期校验 ie6 出错，慎用。
* dateISO:       必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。
* number:        必须输入合法的数字（负数，小数）。
* digits:        必须输入整数。
* creditcard:    必须输入合法的信用卡号。
* equalTo:"#field":       输入值必须和 #field 相同。
* accept:   输入拥有合法后缀名的字符串（上传文件的后缀）。
* maxlength:5   // 输入长度最多是 5 的字符串（汉字算一个字符）。
* minlength:10  // 输入长度最小是 10 的字符串（汉字算一个字符）。
* rangelength:[5,10]    // 输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。
* range:[5,10]  // 输入值必须介于 5 和 10 之间。
* max:5 // 输入值不能大于 5。
* min:10    // 输入值不能小于 10。


#### jQuery.validate 中文 API
http://fanshuyao.iteye.com/blog/2243580

#### 参考网址
http://blog.csdn.net/zzq58157383/article/details/7718352
http://www.helloweba.com/view-blog-53.html

#### 其它验证插件
http://validator.niceue.com/
http://validform.rjboy.cn/