
function echartOption(typecharts,jsonUrl,tabID,trigger,width,height,openWin,isWhat){
	require.config({
        paths : {  
            echarts : '../../js/lib/echarts'
        }  
    });  
    require([ 'echarts', 'echarts/chart/'+typecharts]);
	$(tabID).BDChats.defaults = {
			iWidth:width,
			iHeight:height,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
	};
	switch(isWhat){
		case 'bar1'://柱体
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var Url =new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonUrl, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				for(var y in jsonArray.title){
					titleName[y] = jsonArray.title[y];
				};
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					Url[key] = jsonArray.seriesList[key].url;
					seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:typecharts,name:jsonArray.seriesList[key].name};
				};
			}); 
			lineOrbar(typecharts,tabID,trigger,openWin,isWhat,titleName,xAxisData,seriesData,Url,tt);	//柱体调用option函数
			break;
		case 'bar2'://柱体
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var Url =new Array() ;
			var color =new Array() ;
			var dataSer = new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonUrl, function (jsonArray) { 
				for(var y in jsonArray.title){
					titleName[y] = jsonArray.title[y];
				};
				for(var key in jsonArray.seriesList){
					xAxisData[key] = jsonArray.seriesList[key].name;
					tt[key] = jsonArray.seriesList[key].name;
					color[key] = jsonArray.seriesList[key].color;
					Url[key] = jsonArray.seriesList[key].url;
					dataSer[key] = jsonArray.seriesList[key].dataNumber;
					
				};
				seriesData[0] ={name: titleName,type: typecharts,
					  itemStyle: {
							normal: {   
									label: {
									show: true,
									position: 'top',
									formatter: '{b}\n{c}'
								},
								 color: function(params) {
									var colorList = color;
									return colorList[params.dataIndex]
								}
							}
						},
						 data: dataSer
					};
			}); 
			lineOrbar(typecharts,tabID,trigger,openWin,isWhat,titleName,xAxisData,seriesData,Url,tt);			
			break;
			
		case 'line1'://有背景虚线
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var Url =new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonUrl, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				for(var y in jsonArray.title){
					titleName[y] = jsonArray.title[y];
				};
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					Url[key] = jsonArray.seriesList[key].url;
					seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:typecharts,smooth:true,itemStyle: {normal: {areaStyle: {type: 'default'}}},name:jsonArray.seriesList[key].name};
				};
			}); 
			lineOrbar(typecharts,tabID,trigger,openWin,isWhat,titleName,xAxisData,seriesData,Url,tt);	
			break;
			
		case 'line2'://无背景虚线
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var Url =new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonUrl, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				for(var y in jsonArray.title){
					titleName[y] = jsonArray.title[y];
				};
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					Url[key] = jsonArray.seriesList[key].url;
					seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:typecharts,name:jsonArray.seriesList[key].name};
				};
			}); 
			
			lineOrbar(typecharts,tabID,trigger,openWin,isWhat,titleName,xAxisData,seriesData,Url,tt);		
			break;
			
		case 'pie1'://实心饼图
				var legend = new Array();
				var titleName = new Array();
				var seriesData =new Array() ;
				var showTitle =new Array() ;
				var iframeUrl = new Array() ;
				$.ajaxSettings.async = false;
				$.getJSON(jsonUrl, function (jsonArray) { 
					for(var x in jsonArray.seriesList){
						legend[x] = jsonArray.seriesList[x].name;
						showTitle[x] = jsonArray.seriesList[x].title;
						seriesData[x] = {value:jsonArray.seriesList[x].dataNumber, name:jsonArray.seriesList[x].name};
						iframeUrl[x] = jsonArray.seriesList[x].url;
					};
					for(var y in jsonArray.title){
						titleName[y] = jsonArray.title[y];
					};
				});
				pieEchart(typecharts,tabID,trigger,openWin,isWhat,legend,titleName,seriesData,showTitle,iframeUrl); 		
			break;
			
		case 'pie2'://空心饼图
				var labelTop = {
						normal : {
							label : {
								show : true,
								position : 'center',
								formatter : '{b}',
								rotate:'90',
								textStyle: {
									baseline : 'bottom'
								}
							},
							labelLine : {
								show : false
							}
						}
					};
				var labelFromatter = {
					normal : {
						label : {
							formatter : function (a,b,c){return 100 - c + '%'},
							textStyle: {
								baseline : 'center',
								fontSize:16
							}
						}
					}
				}
				var labelBottom = {
					normal : {
						color: '#ccc',
						label : {
							show : true,
							position : 'center'
						},
						labelLine : {
							show : false
						}
					},
					emphasis: {
						color: 'rgba(0,0,0,0)'
					}
				};
				var radius = [45, 65];
				var seriesData =new Array();
				var iframeUrl = new Array();
				
				$.ajaxSettings.async = false;
				$.getJSON(jsonUrl, function (jsonArray) { 
					for(var x in jsonArray.seriesList){
					iframeUrl[x] = jsonArray.seriesList[x].url;
					};
					seriesData[0] = {value:jsonArray.seriesList[0].dataNumber, name:jsonArray.seriesList[0].name,itemStyle:labelBottom};
					seriesData[1] = {value:jsonArray.seriesList[1].dataNumber, name:jsonArray.seriesList[1].name,itemStyle:labelTop};
				});
				console.log(seriesData);
				pieEchart_o(typecharts,tabID,trigger,openWin,isWhat,seriesData,iframeUrl,labelTop,labelFromatter,labelBottom,radius); 		
			break;
			
		 case 'gauge1'://仪表
				var titleName = new Array();
				var gvalue = new Array();
				var gname = new Array();
				var color1 = new Array();
				var color=[];
				$.ajaxSettings.async = false;
				$.getJSON(jsonUrl, function (jsonArray) {
					for(var x in jsonArray.title){
						titleName[x] = jsonArray.title[x];
					};
					for(var key in jsonArray.seriesList){
						gvalue[key] = jsonArray.seriesList[key].dataNumber;
						gname[key] = jsonArray.seriesList[key].name;
						color[key] = jsonArray.seriesList[key].color;	
					};
					
				});
				//color =  eval(color1);
				console.log(typeof color);
				$("#testid").html(color);
				gauge(typecharts,tabID,trigger,openWin,isWhat,titleName,gvalue,gname,color); 		
			break;
			
		 case 'event1': //柱状图
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var Url =new Array() ;
			var seriesColor = new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonUrl, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				for(var y in jsonArray.title){
					titleName[y] = jsonArray.title[y];
				};
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					Url[key] = jsonArray.seriesList[key].url;
					seriesData[key] = {
							name: titleName[0]+'>'+jsonArray.seriesList[key].name,
							   type:typecharts,
							   stack: '攻击',
							   itemStyle: {
									normal: {
										color: jsonArray.seriesList[key].color
									}
								},
							   tooltip : {trigger: 'item'},
							   data:jsonArray.seriesList[key].value						};
					};
			}); 
			lineOrbar(typecharts,tabID,trigger,openWin,isWhat,titleName,xAxisData,seriesData,Url,tt);			
			break;
	}
	
	
	
	
}
//线，柱体显示
function lineOrbar(typecharts,tabID,trigger,openWin,isWhat,titleName,xAxisData,seriesData,Url,tt){
		
		 $(tabID).BDChats({
			noAjax:true,
			openUrl:openWin,
			title : {
					text: titleName,
					textStyle :{fontSize:14,color:'#555'}
			},
			tooltip : {
				trigger: trigger
			},
			legend: {
				data:tt,
				textStyle :{fontSize:12,color:'#555'}
			},
			calculable: false,
			grid:{
					x:40,
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
					type: 'value'
				}
			],
			series:seriesData,
			optUrl:function(params){
				var dialog = $.Layer.iframe(
					{
						title: '查看详情',
						url: Url[params.dataIndex],
						width: 900,
						height: 550,
						button:false
					});		
				}				
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
};
//饼图显示
function pieEchart(typecharts,tabID,trigger,openWin,isWhat,legend,titleName,seriesData,showTitle,iframeUrl){
		 $(tabID).BDChats({
			noAjax:true,
			openUrl:openWin,
			title : {
					text:titleName,
					textStyle :{fontSize:14,color:'#555'}
			},
			tooltip : {
				trigger: trigger,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				textStyle :{fontSize:12,color:'#555'},
				x : 'center',
				data:legend
			},
			calculable : false,
			series : [
				{
					name:showTitle[0],
					type:'pie',
					radius :['0','60%'],
					center: ['50%', '50%'],
					data:seriesData
				}
			],
			optUrl:function(params){
				var dialog = $.Layer.iframe(
					{
						title: '查看详情',
						url: iframeUrl[params.dataIndex],
						width: 900,
						height: 550,
						button:false
					});		
				}
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
	}

//空心饼图显示
function pieEchart_o(typecharts,tabID,trigger,openWin,isWhat,seriesData,iframeUrl,labelTop,labelFromatter,labelBottom,radius){
		 
		$(tabID).BDChats({
			noAjax:true,
			openUrl:openWin,
			series : [
			{
				type :typecharts,
				center : ['50%', '50%'],
				radius : radius,
				itemStyle : labelFromatter,
				data :seriesData
				}
			],
			optUrl:function(params){
				var dialog = $.Layer.iframe(
					{
						title: '查看详情',
						url: iframeUrl[params.dataIndex],
						width: 900,
						height: 550,
						button:false
					});		
				}
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
	}

//仪表显示
function gauge(typecharts,tabID,trigger,openWin,isWhat,titleName,gvalue,gname,color){
		
		$(tabID).BDChats({
			noAjax:true,
			openUrl:openWin,
			tooltip : {
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				show : true,
				feature : {
				mark : {show: true},
				restore : {show: true},
				saveAsImage : {show: true}
				}
			},
			series:[
				{
					name:titleName,
					type:typecharts,
					radius :[0,'100%'],
					data:[{value: gvalue, name: gname}],
					detail : {formatter:'{value}%'},
					//data: seriesData,
					
					axisLine:{show: true,
						 lineStyle: {
							 color: color, 
							 width: 13
						 }
					},
					axisTick :{
						show: true, 
						splitNumber: 5, 
						length :3, 
						lineStyle: {
							color: '#ececec',
							width: 1,
							type: 'solid'
						}
					} ,
					axisLabel :{
						show: true,
						formatter: null,
						textStyle: {
							color: 'auto',
							fontFamily:'Arial'
									
							}				
					},
					splitLine:{
						show: true,
						length :7, 
						lineStyle: { 
							color: '#ececec',
							width: 1,
							type: 'solid'
						}
		
					},
					pointer :{
						length : '75%',
						width : 4,
						color : 'auto'
		
					
					},
					title :{
						 show : true,
						offsetCenter: [0, '-30%'],
						textStyle: {
							color: '#999'
						}
				   },
					detail : {
						formatter:'{value}%',
						textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							color: 'auto',
							fontSize:16
						}
					}		     
				}
			],
			optUrl:function(params){
				var dialog = $.Layer.iframe(
					{
						title: '查看详情',
						url: iframeUrl[params.dataIndex],
						width: 900,
						height: 550,
						button:false
					});		
				}
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
	}
/*;(function($){

$(document).ready(function () {
function initEchartsBar(json, reportName) {  
	var chart_path = "../../js/lib/echarts";
	var map_path = "../../js/lib/echarts_map";
    require.config({
        paths : {  
            echarts : chart_path,  
            'echarts/chart/bar' : chart_path,
            'echarts/chart/line' : chart_path,  
            'echarts/chart/pie' : chart_path,
			'echarts/chart/map' : map_path  
        }  
    });  
    require([ 'echarts', 'echarts/chart/bar']);  
}  
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
})(jQuery);*/
function getOptionByArray(json, reportName) {  
    var option = {  
        title : {  
            text: reportName,  
            x:'center'  
        },  
        tooltip : {  
            trigger: 'item',  
            formatter: "{a} <br/>{b} : {c} ({d}%)"  
        },  
        legend: {  
            orient : 'vertical',  
            x : 'left',  
            data:json.getText  
        },  
        toolbox: {  
            show : true,  
            feature : {  
                mark : {show: true},  
                dataView : {show: true, readOnly: false},  
                restore : {show: true},  
                saveAsImage : {show: true}  
            }  
        },  
        calculable : true,  
        series : [  
            {  
                name:json.getText,  
                type:'pie',  
                radius : '55%',  
                center: ['50%', '60%'],  
                data:json.getValue  
            }  
        ]  
    };  
        return option;  
}
