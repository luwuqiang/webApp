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
			'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
		]);
	
	var xAxisData = new Array();
	var legend = new Array();
	//var titleName = new Array();
	var seriesData =new Array() ;
	var yAxisName = new Array() ;
	$.ajaxSettings.async = false;
	$.getJSON("../../js/data/line2.json", function (jsonArray) { 
		for(var x in jsonArray.serData){
			legend[x] = jsonArray.serData[x].name;
			seriesData[x] = {name:jsonArray.serData[x].name,type:'line'/*,itemStyle: {normal: {areaStyle: {type: 'default'}}}*/,data:jsonArray.serData[x].value};
		};
		for(var y in jsonArray.xAxis){
			xAxisData[y] = jsonArray.xAxis[y];
		};
		for(var m in jsonArray.yAxis){
			yAxisName[m] = jsonArray.yAxis[m];
		}
		
	}); 

	$("#chart_line").BDChats.defaults = {
			iWidth:800,
			iHeight:240,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
		};
     $('#chart_line').BDChats({
            noAjax:true,
			openUrl:true,
			/*title : {
				text: titleName,
				textStyle :{fontSize:14,color:'#555'}
			   
			},*/
			tooltip : {
				trigger: 'axis'
			},
			/*legend: {
				data: legend,
				textStyle :{fontSize:12,color:'#555'}
			},*/
			calculable : false,
			grid:{
				x:60,
				y:20,
				x2:35,
				y2:40,
				borderColor: '#fafafa'
				},
			xAxis : [
				{
					type : 'category',
					name:'/s',
					boundaryGap : false,
					axisLine: {onZero: false},
				   data : xAxisData
				}
			],
			yAxis : [
				{
					type : 'value',
					name:yAxisName,
           			max:1024
				}
			],
			series : seriesData	
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});	
		
			});
})(jQuery);
