
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
	var tt = new Array();
	var titleName = new Array();
	var seriesData =new Array() ;
	$.ajaxSettings.async = false;
	$.getJSON("../../js/data/bar1.json", function (jsonArray) { 
		for(var x in jsonArray.xAxis){
			xAxisData[x] = jsonArray.xAxis[x];
		};
		for(var y in jsonArray.title){
			titleName[y] = jsonArray.title[y];
		};
		for(var key in jsonArray.seriesList){
			tt[key] = jsonArray.seriesList[key].name;
			seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:'bar',name:jsonArray.seriesList[key].name};
		};
	}); 
	
	//获取后台JSON数据 结束
	
	$("#charts").BDChats.defaults = {
			iWidth:800,
			iHeight:240,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
		};
     $('#charts').BDChats({
            noAjax:true,
			openUrl:false,
			title : {
					text: titleName,
					textStyle :{fontSize:14,color:'#555'}
			},
         	tooltip : {
				trigger: 'axis'
			},
  			
			calculable: false,
			grid:{
					x:60,
					y:40,
					x2:30,
					y2:30,
					borderColor: '#fafafa'
				},
			xAxis: [
				{
					type: 'category',
					data: xAxisData
				}
			],
			yAxis: [
				{
					type: 'value',
				}
			],
			series:seriesData,
			optUrl:function(){
				var dialog = $.Layer.iframe(
					{
						title: '查看详情1',
						url:'list_zjxw.html',
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