

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
	
	var xAxisData = new Array();
	var color = new Array();
	var titleName = new Array();
	var seriesData =new Array() ;
	var uRllist = new Array();
	$.ajaxSettings.async = false;
	$.getJSON("../../js/data/bar2.json", function (jsonArray) { 
		for(var x in jsonArray.serData){
			xAxisData[x] = jsonArray.serData[x].xAxis;
			seriesData[x] = jsonArray.serData[x].value;
			color[x] = jsonArray.serData[x].color;
			uRllist[x] = jsonArray.serData[x].url;
		};
		for(var y in jsonArray.title){
			titleName[y] = jsonArray.title[y];
		};
	}); 
	$("#chart_bar2").BDChats.defaults = {
			iWidth:800,
			iHeight:240,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
		};
     $('#chart_bar2').BDChats({
            noAjax:true,
			openUrl:true,
			title : {
				x:'center',
				text: titleName
			},
			tooltip: {
				trigger: 'item'
			},
		
			calculable : false,
			
			grid:{
					x:40,
					y:60,
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
					name: '数量'
				}
			],
			series : [
				{
				   name: titleName,
				   type: 'bar',
				   itemStyle: {
						normal: {   
								label: {
								show: true,
								position: 'top',
								formatter: '{b}\n{c}'
							},
							 color: function(params) {
								// build a color map as your need.
								var colorList = color;
								return colorList[params.dataIndex]
							}
						}
					},
					 data: seriesData
				}
			   
				
			],
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

