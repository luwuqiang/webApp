/**
 * javascript 日程工作计划
 * 
 * 1、基于jQuery和dhtmlxscheduler
 * 2、引入js文件
 * 		codebase/dhtmlxscheduler.js
 * 3、引入css文件
 * 		codebase/dhtmlxscheduler.css
 * 4、dhtmlxscheduler在线帮助文档
 * 		http://docs.dhtmlx.com/doku.php?id=dhtmlxscheduler:toc
 * 5、下载地址
 * 		www.dhtmlx.com/x/download/regular/dhtmlxScheduler.zip
 * 
 * @author 姚秀萍 
 * @version 0.1.0
 * @date 2015-08-21
 */

/**
 * 汉化
 * 
 * 1、日期汉化
 * 2、提示语汉化
 */
scheduler.locale = {
	date:{
		month_full:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
	  	month_short:["1","2","3","4","5","6","7","8","9","10","11","12"],
	  	day_full:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
	  	day_short:["日","一","二","三","四","五","六"]
 	},
    labels:{
 		dhx_cal_today_button:"今天",
 		day_tab:"日",
 		week_tab:"周",
 		month_tab:"月",
 		//new_event:"新日程安排",
 		icon_save:"保存",
 		icon_cancel:"取消",
 		icon_details:"详细",
 		icon_edit:"编辑",
 		icon_delete:"删除",
 		confirm_closing:"",
 		confirm_deleting:"确定要删除该工作计划?",
 		section_description:"工作计划"
	}
};

/**
 * 日期显示格式配置
 */
scheduler.config.default_date = '%Y年%m月%d日';
scheduler.config.month_date = '%Y年%m月';
scheduler.config.day_date = '%Y年%m月%d日 %l';
scheduler.config.first_hour = 8
scheduler.config.last_hour = 23
/**
 * 配置弹出计划详细框
 */
scheduler.config.details_on_dblclick = true;
scheduler.config.details_on_create = true;
scheduler.config.icons_select = ["icon_details","icon_delete"];

/**
 * 设置 月视图 有工作计划 的 背景色
 * 判断一天内工作计划的类型显示不同的颜色
 */
scheduler.templates.month_date_class = function(date, today){
	var time = new Date(date).getTime();
	var from = time;
	var to = time + 86400000;
	//插件中此方法不兼容ie 要修复一下 修复代码如下
	/*
	scheduler.getEvents = function(from, to) {
		var result = [];
		for (var a in this._events) {
			try{
				var ev = this._events[a];
				var start = new Date(ev.start_date).getTime();
				var end = new Date(ev.end_date).getTime();
				if((start < to) && (end > from)){
					result.push(ev);
				}
			}catch(e){}
			//原来代码
			//if (ev && ( (!from && !to) || (ev.start_date < to && ev.end_date > from) ))
				//result.push(ev);
		}
		return result;
	};
	*/
	var evs = scheduler.getEvents(from, to);
	if(evs.length != 0){
		var type = [];
		for(var i in evs){
			var o = evs[i];
			type[i] = o.type;
		}
		type = array_unique(type);
		var css = '';
		switch(type.length){
			//送签或出签
			case 1:
				//送签
				if(type[0] == 1){
					css = 'dhx_month_day_send_signed';
				}else if(type[0] == 2){//出签
					css = 'dhx_month_day_out_signed';
				}else{//没有定义
					css = ''
				}
				break;
			//送/出签并存
			case 2:
				css = 'dhx_month_day_send_out_signed';
				break;
		}
		return css;
	}
	return "";
}

/**
 * 弹出工作计划详细信息框
 * 
 * @param int id 工作计划编号
 */
scheduler.showLightbox = function(id) {
	var ev = scheduler.getEvent(id);
	scheduler.startLightbox(id, getDataFormHtmlObject());
	
	//把数据填充到表单
	var eles = getDataFormElementsObject();
	jQuery.each(eles, function(i, o){
		o.value = (ev[o.id] || ev.text);
	});
};

/**
 * 把表单中的数据保存到scheduler的event对象中
 */
function saveFormDataToEvent() {
	var ev = scheduler.getEvent(scheduler.getState().lightbox_id);
	
	//把表单的数据填充到scheduler的event对象
	var eles = getDataFormElementsObject();
	jQuery.each(eles, function(i, o){
		//工作计划显示的标题，不能删除
		if(i == 0) ev.text = o.value;
		ev[o.id] = o.value;
	});
	
	//隐藏表单
	scheduler.endLightbox(true, getDataFormHtmlObject());
}

/**
 * 取消
 */
function closeForm() {
	//隐藏表单
	scheduler.endLightbox(false, getDataFormHtmlObject());
}

/**
 * 删除
 */
function deleteEvent() {
	if(confirm('确定要删除吗？')){
		var event_id = scheduler.getState().lightbox_id;
		scheduler.endLightbox(false, getDataFormHtmlObject());
		scheduler.deleteEvent(event_id);
	}
}

/**
 * 读取工作计划
 * 
 * 1、服务器端返回json格式的数据
 * 2、对象的属性名都是固定的，id计划编号，start_date计划开始时间，end_date计划结束时间，text计划内容，数据格式如下：
 * 	[
 * 	 {"id":1,"start_date":"04.29.2013 01:10:00","end_date":"04.29.2013 01:40:00","text":"a"},
 * 	 {"id":2,"start_date":"4.30.2013 01:10:00","end_date":"4.30.2013 01:40:00","text":"b"}
 *  ]
 * 3、注意start_date，end_date的日期格式，格式是 "月.日.年 时:分:秒"
 */
			
function loadData(){
	jQuery.ajax({
		url:'wp.php?m=read',
		data:{},
		type:'post',
		dataType:'json',
		success:function(data){
			if(data != '') scheduler.parse(data, 'json');
		}
	});
}
loadData();

/**
 * 增加工作计划
 */
scheduler.attachEvent("onEventAdded", function(event_id, event_object){
	var data = getWorkPlanData(event_object);
	var r = sendRequest('wp.php?m=add', data);
	if(!r) scheduler.detachEvent(event_id);
});

/**
 * 编辑工作计划
 */
scheduler.attachEvent("onEventChanged", function(event_id, event_object){
	var data = getWorkPlanData(event_object);
	var r = sendRequest('wp.php?m=update', data);
	if(!r) scheduler.detachEvent(event_id);
});

/**
 * 工作计划详情中的保存按钮
 * 
 * 1、可以验证数据，通过验证返回true，否则返回false
 * 2、返回true会自动触发onEventChanged事件
 */
scheduler.attachEvent("onEventSave", function(id, data, is_new_event){
	return true;
});

/**
 * 删除工作计划
 * 
 * 1、返回值boolean，true删除成功，false删除失败
 * 2、如果是true，scheduler会自动把工作计划移除
 */
scheduler.attachEvent("onBeforeEventDelete", function(event_id){
	var r = sendRequest('wp.php?m=delete', {'id':event_id});
	return r;
});

/**
 * 工作计划鼠标滑动事件
 * 鼠标滑动到工作计划上 弹出一个层
 * 层里展示工作计划的内容
 */
var detailDialog = null;
scheduler.attachEvent("onMouseMove", function (event_id, native_event_object){
    var ev = scheduler.getEvent(event_id);
    if(ev){
    	//if(detailDialog == null) detailDialog = new Dialog(); 
    	detailDialog.Width = 200;
    	detailDialog.Height = 100;
    	detailDialog.Modal = false;
    	detailDialog.Title = ev.text;
    	detailDialog.Top = native_event_object.clientY +10;
    	detailDialog.Left = native_event_object.clientX + 10;
    	var detailHtml = jQuery("#wp_data_detail").html();
    	for(var i in ev){
    		var td = jQuery("td[id='" + i + "']");
    		var v = ev[i];
    		td.html(v);
    		if(i == 'type'){
    			if(v == 1){
    				td.html('送签');
    			}else if(v == 2){
    				td.html('出签');
    			}else{
    				td.html('没有设置');
    			}
    		}
    	}
    	detailDialog.InnerHtml = detailHtml;
    	detailDialog.show();
    }else{
    	//detailDialog.close();
    	detailDialog = null;
    }
});

/**
 * 往服务器发送请求
 * 
 * 1、post请求方式
 * 
 * @param string url 请求地址
 * @param object data 请求参数
 */
function sendRequest(url, data){
	var r = false;
	jQuery.ajax({
		url:url,
		type:'post',
		data:data,
		async:false,
		dataType:'json',
		success:function(data){
			alert(data.msg);
			r = data.success;
		}
	});
	return r;
}

/**
 * 过滤数组重复元素
 * 
 * @param array data 被过滤数组
 * @returns array 过滤后的数组
 */
function array_unique(data){
	var data = data || [];
	var obj = {};
	for(var i=0,j=data.length; i<j; i++){
		var v = data[i];
		if(typeof(obj[v]) == 'undefined'){
			obj[v] = 1;
		}
	}
	data.length = 0;
	for(var i in obj){
		data[data.length] = i;
	}
	return data;
}

/**
 * 获取工作计划中所需数据
 * 
 * @param object event 工作计划数据对象
 * @returns object 对象
 */
function getWorkPlanData(event){
	var data = {};
	
	//日历固定数据，不能删除
	data.id = event.id;
	data.start_date = event.start_date;
	data.end_date = event.end_date;
	
	//获取表单中的数据
	var eles = getDataFormElementsObject();
	jQuery.each(eles, function(i, o){
		//设置日历中显示的标题，不能删除
		if(i == 0) data.text = event[o.id];
		data[o.id] = event[o.id];
	});
	
	return data;
}

/**
 * 获取表单的数据元素对象
 * 
 * @returns object 
 */
function getDataFormElementsObject(){
	return jQuery("input[type='text'], select");
}

/**
 * 获取表单html对象
 * 
 * @returns object 元素对象
 */
function getDataFormHtmlObject() { 
	return parent.jQuery("#add_kec").get(0); 
};

//初始化日历
scheduler.init('scheduler_here', null, "week");