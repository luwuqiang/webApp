
;(function($){

$(document).ready(function () {
	// 路径配置
	require.config({
		paths: {
			echarts: '../../js/lib/echarts'
		}
	});
	// 使用
	require(
		[
			'echarts',
			'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
		]);
	//获取后台JSON数据 开始
	var xAxisData = new Array();
	var titleName = new Array();
	var seriesColor = new Array();
	var seriesData =new Array() ;
	var uRllist = new Array();
	$.ajaxSettings.async = false;
	$.getJSON("../../js/data/event.json", function (jsonArray) { 
		for(var x in jsonArray.xAxis){
			xAxisData[x] = jsonArray.xAxis[x];
		};
		for(var key in jsonArray.serData){
			titleName[key] = jsonArray.serData[key].title;
			seriesColor[key] = jsonArray.serData[key].color;
			uRllist[key] = jsonArray.serData[key].url;
			seriesData[key] = {name: titleName[key]+'>'+jsonArray.serData[key].name,
							   type:'bar',
							   stack: '攻击',
							   itemStyle: {
									normal: {
										color: seriesColor[key]
									}
								},
							   tooltip : {trigger: 'item'},
							   data:jsonArray.serData[key].value};
		};
	}); 
	
	//获取后台JSON数据 结束
	
	$("#chart_event").BDChats.defaults = {
			iWidth:800,
			iHeight:240,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
		};
     $('#chart_event').BDChats({
            noAjax:true,
			openUrl:false,
			tooltip : {
				trigger: 'axis'
			},
			calculable : false,
			xAxis : [
				{
					type : 'category',
					data : xAxisData
				}
			],
			yAxis : [
				{
					type : 'value',
					name:'数量'
				}
			],
		  
			series : seriesData,
			optUrl:function(params){
				var dialog = $.Layer.iframe(
					{
						title: '查看详情',
						url: uRllist[params.dataIndex],
						width: 900,
						height: 550,
						button:false
					});		
				}			
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});	
		
			});
})(jQuery);

	
