// JavaScript Document
(function ($) {
  $.fn.formBox = function(options) {
	 var dft = {
		 cpBy: "dafi",
		 url: "http://www.dafi.cn",
		 size: "12px",
		 align: "left"
	 };
	 var ops = $.extend(dft,options);
	 var style = 'style="font-size:' + ops.size + ';text-align:' + ops.align + ';"'; //调用默认的样式
	 var cpTxt = '<p' + ' ' + style + '>此文章版权归<a target="_blank" href="' + ops.url + '">' + ops.cpBy + '</a>所有</p>'; //生成版权文字的代码
	 $(this).append(cpTxt); //把版权文字加入到想显示的div
	 }
})(jQuery);

function Validation(name){
	var t = $(input[name^= ''+ name +'' ]);
	for (var i = 0; i < t.length; i++){
		if (t[i].value == null || t[i].value ==''){ 
			t[i].focus(); t[i].select(); myMsg(不能为空); return false; break;} 
		else { 
			switch (t[i].name){ 
			case name+English: 
				if (isEnglish(t[i].value) == false){ 
					t[i].focus(); t[i].select(); alert(请输入英文); return false; 
				} 
				break; 
			case name+Chinese: 
				if (isChinese(t[i].value) == false){ 
					t[i].focus(); t[i].select(); alert(请输入中文); return false; 
				} 
				break; 
			case name+Phone: 
				if (isPhone(t[i].value) == false){ 
					t[i].focus(); t[i].select(); alert(请输入正确的手机号); return false; 
				} 
				break; 
			case name+Url: 
				if (isUrl(t[i].value)==false){ 
					t[i].focus(); t[i].select(); alert(请输入正确的url地址); return false; 
				} 
			default: }
		}
	}
}
