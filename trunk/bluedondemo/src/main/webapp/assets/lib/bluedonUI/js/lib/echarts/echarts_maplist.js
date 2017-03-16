$.fn.chartsMap = function(option){
	var setting = {
		jsonUrl:null,         //报表的JSON文件路径
		tabID:null,           //调用报表的ID
		width:'98%',          //报表显示宽度
		height:240,           //报表显示高度
		isWhat :null,         //报表所用的格式
		echartsAdd:null       //echarts文件路径
	};
	option = $.extend(setting, option);    //合并参数
	var jsonA = option.jsonUrl;
	var ID = option.tabID;
	require.config({
        paths : {  
            echarts : option.echartsAdd
        }  
    }); 
	require([ 'echarts','echarts/chart/map',
						'echarts/chart/bar',
						'echarts/chart/pie',
						'echarts/chart/line']);
	$(ID).BDChats.defaults = {
			iWidth:option.width,
			iHeight:option.height,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
	};
	switch(option.isWhat){
		case 'china'://国内地图
			var geoCoord = new Array();
			var seriesData = new Array();
			var color = new Array();
			var serData = new Array();
			
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) {
				for(var key in jsonArray.geoCoord){
					geoCoord[0] = {
								name: '全国',
								type: 'map',
								mapType: 'china',
								itemStyle:{
									normal:{
										borderColor:'rgba(138,207,242,1)',
										borderWidth:0.5,
										areaStyle:{
											color: 'rgba(76,157,220,1)'
										}
									}
								},
								data:[],
								geoCoord:jsonArray.geoCoord[0]
					};
				};
				//console.log(jsonArray.geoCoord[0]);
				for(var n in jsonArray.seriesData){
					color[n] = jsonArray.seriesData[n].color
					seriesData[n] = {
							name: jsonArray.seriesData[n].name,
							type: 'map',
							mapType: 'china',
							data:[],
							markLine : {
								smooth:true,
								effect : {
									show: true,
									scaleSize: 1,
									period: 30,
									color: '#fff',
									shadowBlur: 10
								},
								itemStyle : {
									normal: {
										borderWidth:1,
										lineStyle: {
											type: 'solid',
											shadowBlur: 10
										}
									}
								},
								data :jsonArray.seriesData[n].value
						}
				};	
				}
			});
			
			serData = geoCoord.concat(seriesData);
			chinamap(ID,serData,color);	//map调用option函数
			break;
		
		case 'world'://世界地图
			var geoCoord = new Array();
			var markLine = new Array();
			var markPoint = new Array();
			var titleAll = new Array();
			var color = new Array();
			var title = new Array();
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) {
				geoCoord = jsonArray.series[0].geoCoord[0];
				markLine = jsonArray.series[0].markLine;
				markPoint = jsonArray.series[0].markPoint;
				title = jsonArray.series[0].title;
				titleAll = jsonArray.title;
				color = jsonArray.color
			});
			//console.log(titleAll);
			$("#testHTml").html(markPoint);
			worldmap(ID,geoCoord,markLine,markPoint,titleAll,title,color);	//map调用option函数
			break;
		
		case 'mix': //混合图表
			var xAxisData = new Array();
			var t_id = new Array();
			var lenged0 = new Array();
			var lenged1 = new Array();
			var lenged2 = new Array();
			var lenged3 = new Array();
			var dataPie = new Array();
			var seriesData0 =new Array();
			var seriesData1 =new Array();
			var seriesData2 =new Array();
			var seriesData2_1 =new Array();
			var seriesData3 =new Array();
			var pieVal = new Array();
			var tit;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				lenged0[0] = jsonArray.firstList[0].name;
				seriesData0[0] = {name:jsonArray.firstList[0].name,type:'bar',data:jsonArray.firstList[0].dataNumber};
				for(var key in jsonArray.seriesList){
					lenged1[key] = jsonArray.seriesList[key].name;
					seriesData1[key] = {data:jsonArray.seriesList[key].dataNumber, stack: '广告',tooltip : {trigger: 'item'},type:'bar',name:jsonArray.seriesList[key].name};
				};
				lenged3[0] = jsonArray.LineList[0].name;
				seriesData3[0] = {data:jsonArray.LineList[0].dataNumber,type:'line',name:jsonArray.LineList[0].name};
				for(var m in jsonArray.pieList){
					lenged2[m] = jsonArray.pieList[m].title;
					seriesData2_1 = jsonArray.pieList;
					pieVal[m] = jsonArray.pieList[m].value;
				};	
			}); 
			
				seriesData2 = {data:[{value:1048, name:'百度'},
					{value:251, name:'谷歌'},
					{value:147, name:'必应'},
					{value:102, name:'其他'}],
						type:'pie',
						tooltip : {
							trigger: 'item',
							formatter: '{a} <br/>{b} : {c} ({d}%)'
						},
						center: [198,80],
						radius : [0, 30],
						itemStyle :　{
							normal : {
								 labelLine : {
									length : 10
								}
							}
						},name:tit};
			
			lenged0 = lenged0.concat(lenged1,lenged3,lenged2);
			seriesData0 = seriesData0.concat(seriesData1,seriesData3,seriesData2);
			
			mixShow(ID,xAxisData,lenged0,seriesData0);			
			break;
	}
 
}


//国内地图
function chinamap(ID,serData,color){
		 $(ID).BDChats({
			noAjax:true,
			openUrl:false,
			color: color,
			tooltip : {
				trigger: 'item',
				formatter: '{b}'
			},
			series:serData
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
};


//世界地图
function worldmap(ID,geoCoord,markLine,markPoint,titleAll,title,color){
		 var addMarkpdiv = {
				symbol:'emptyCircle',
				symbolSize : 3,
				effect: {
					show: true,
					shadowBlur : 0,
					type:'scale',
					period:15//运动周期，值越大就越慢
				},
				data: markPoint	
			};
		 $(ID).BDChats({
			noAjax:true,
			openUrl:false,
			isWorld:true,
			addWorldmark:addMarkpdiv,
			color: color,
			title : {
				text: titleAll,
				x:'left',
				padding:20,
				textStyle : {
					color: '#ddd',
					fontSize:'22'		
				}
			},
			tooltip : {
				trigger: 'item',
				formatter: '{b}'
			},
			dataRange: {
				show:false,
				min : 0,
				max : 100,
				calculable : true,
				color: color,
				textStyle:{
					color:'#fff'
				}
			},
			series : [
			{
				name: title,
				type: 'map',
				roam: true,
				hoverable: false,
				mapType: 'world',
				data:[],
				itemStyle:{
					normal:{
						borderColor:'rgba(100,149,237,1)',
						borderWidth:0.5,
						areaStyle:{
							color: '#000000'
						},
					},
				
				},
			   geoCoord:geoCoord,
			   markLine:{
						smooth:true,
						symbol: ['none', 'circle'],  
						symbolSize : 1,
						effect : {
							show: true,
							scaleSize: 2,
							period: 10,
							color: '#fff',
							shadowBlur: 12
						},
						data:markLine,
						itemStyle : {
								normal: {
									label:{show:false,
									position:'bottom',
									formatter : function(s) {
									return s.name.split(":")[1];
									},
									 textStyle : {
										fontSize:'14'		
									}
									},
									borderWidth:1,
									lineStyle: {
										type: 'solid',
										shadowBlur: 5
									}
								}
							}
			   		},
			   markPoint:{
							symbol:'emptyCircle',
							symbolSize : 3,
							itemStyle:{
								normal:{
									label:{
										show:true,
										position:'left',
										formatter : function(d) {
											return d.name;
										},
										 textStyle : {
											fontSize:'16'		
										}
									}
									
								}
								
							},
						   data:markPoint
			   }
			}]
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
};


//混合图表
function mixShow(ID,xAxisData,lenged0,seriesData0){
		$(ID).BDChats({
			noAjax:true,
			openUrl:false,
			tooltip : {
					trigger: 'axis'
			},
			calculable : false,
			legend: {
				data:lenged0
			},
			xAxis : [
				{
					type : 'category',
					splitLine : {show : false},
					data : xAxisData
				}
			],
			yAxis : [
				{
					type : 'value',
					position: 'left'
				}
			],
			series : seriesData0
			}).on('afterrender', function (e, charts, el,option) {
				$('body').delegate('.reload','click',function(e){
				});
			});	
		 

}