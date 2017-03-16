
$.fn.chartsObj = function(option){
	var setting = {
		typecharts:'bar',     //是什么类型的报表bar,line,pie等
		jsonUrl:null,         //报表的JSON文件路径
		tabID:null,           //调用报表的ID
		trigger:null,         //报表的trigger类型
		width:'98%',          //报表显示宽度
		height:240,           //报表显示高度
		openWin:null,         //报表是否有弹出详情页面
		openurl:null,         //报表弹出详情页面地址
		isWhat :null,         //报表所用的格式
		lineType:true,        //判断是否有背景的线形图,true为有背景的，FALSE为无背景
		echartsAdd:null       //echarts文件路径
	};
	var option = $.extend(setting, option);    //合并参数
	var tp = option.typecharts;
	var jsonA = option.jsonUrl;
	var ID = option.tabID;
	var Tg = option.trigger;
	var ou = option.openWin;
	var Url = option.openurl;
	
	require.config({
        paths : {  
            echarts : option.echartsAdd  //echarts 路径
        }  
    });  
    require([ 'echarts', 'echarts/chart/'+tp]);//调用那种echarts图表
	

	$(ID).BDChats.defaults = {
			iWidth:option.width,//图表的宽度
			iHeight:option.height,//图表的高度
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
	};
	switch(option.isWhat){ //通过isWhat参数判断是什么类型的报表
		case 'bar1'://柱体
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) {    //调用JSON数据
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				titleName = jsonArray.title;
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:tp,barMaxWidth:50,name:jsonArray.seriesList[key].name};
				};
			}); 
			lineOrbar(tp,ID,Tg,ou,titleName,xAxisData,seriesData,tt,Url);	//柱体调用option函数
			break;
		case 'bar2'://柱体
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var color =new Array() ;
			var dataSer = new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) { //调用JSON数据
				titleName = jsonArray.title;
				for(var key in jsonArray.seriesList){
					xAxisData[key] = jsonArray.seriesList[key].name;
					tt[key] = jsonArray.seriesList[key].name;
					color[key] = jsonArray.seriesList[key].color;
					dataSer[key] = jsonArray.seriesList[key].dataNumber;
					
				};
				//series 的参数赋值
				seriesData[0] ={name: titleName,type: tp,barMaxWidth:50,
					  itemStyle: {
							normal: {   
								 color: function(params) {
									var colorList = color;
									return colorList[params.dataIndex]
								}
							}
						},
						 data: dataSer
					};
			}); 
			lineOrbar(tp,ID,Tg,ou,titleName,xAxisData,seriesData,tt,Url); //柱体调用option函数
			break;
			
		case 'bar3'://柱体
			var xAxisData = new Array();
			//var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var menuTitle = new Array() ;
			var color = new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				for(var m in jsonArray.menuTitle){
					menuTitle[m] = jsonArray.menuTitle[m];
				};
				titleName = jsonArray.title;
				for(var key in jsonArray.seriesList){
					color[key] = jsonArray.seriesList[key].color;
					seriesData[key] = jsonArray.seriesList[key];
				};	
			});  
			var forMatter=function(params,ticket,callback){
					var res='',keyName = new Array();
					var obj = eval(params[0].data);
					 $.each(obj,function(ky) {   
						 keyName.push(obj[ky]);
					  });
					  keyName=eval(keyName);
					//console.log(keyName);
					for(var i = 0 ; i< menuTitle.length;i++){
						 res += '<b>'+menuTitle[i]+'：</b>' + keyName[i]+'<br />';
					}
				setTimeout(function (){
					callback(ticket, res);
				}, 800)
				return 'loading';	
			}
			lineOrbar1(tp,ID,Tg,ou,xAxisData,seriesData,color,titleName,forMatter,Url);	//柱体调用option函数
			break;
			
		case 'line1'://有背景虚线
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				titleName = jsonArray.title;
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					if(option.lineType){
						seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:typecharts,smooth:false,itemStyle: {normal: {areaStyle: {type: 'default'}}},name:jsonArray.seriesList[key].name};
						}else{
						seriesData[key] = {data:jsonArray.seriesList[key].dataNumber,type:typecharts,name:jsonArray.seriesList[key].name};
					}
				};
			}); 
			lineOrbar(tp,ID,Tg,ou,titleName,xAxisData,seriesData,tt,Url);	
			break;

		case 'pie1'://实心饼图
				var legend = new Array();
				var titleName = new Array();
				var seriesData =new Array() ;
				var showTitle =new Array() ;
				$.ajaxSettings.async = false;
				$.getJSON(jsonA, function (jsonArray) {
					//console.log(jsonArray.seriesList);
					for(var x in jsonArray.seriesList){
						legend[x] = jsonArray.seriesList[x].name;
						showTitle[x] = jsonArray.seriesList[x].title;
						seriesData[x] = {value:jsonArray.seriesList[x].dataNumber, name:jsonArray.seriesList[x].name};
					};
					titleName = jsonArray.title;	
				});
				pieEchart(tp,ID,Tg,ou,legend,titleName,seriesData,showTitle,Url); 		//实心饼图调用option函数
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
				$.ajaxSettings.async = false;
				$.getJSON(jsonA, function (jsonArray) { 
					seriesData[0] = {value:jsonArray.seriesList[0].dataNumber, name:jsonArray.seriesList[0].name,itemStyle:labelBottom};
					seriesData[1] = {value:jsonArray.seriesList[1].dataNumber, name:jsonArray.seriesList[1].name,itemStyle:labelTop};
				});
				//console.log(seriesData);
				pieEchart_o(tp,ID,Tg,ou,seriesData,labelTop,labelFromatter,labelBottom,radius,Url); 	//空心饼图调用option函数	
			break;
			
		 case 'gauge1'://仪表
				var titleName = new Array();
				var gvalue = new Array();
				var gname = new Array();
				var color1 = new Array();
				var color=[];
				$.ajaxSettings.async = false;
				$.getJSON(jsonA, function (jsonArray) {
					titleName = jsonArray.title;
					for(var key in jsonArray.seriesList){
						gvalue[key] = jsonArray.seriesList[key].dataNumber;
						gname[key] = jsonArray.seriesList[key].name;
						color[key] = jsonArray.seriesList[key].color;	
					};
					
				});
				color =  eval(color1);
				//console.log(typeof color);
				$("#testid").html(color);
				gauge(tp,ID,Tg,ou,titleName,gvalue,gname,color,Url); 		//仪表调用option函数
			break;
			
		 case 'event1': //柱状图
			var xAxisData = new Array();
			var tt = new Array();
			var titleName = new Array();
			var seriesData =new Array() ;
			var seriesColor = new Array() ;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) { 
				for(var x in jsonArray.xAxis){
					xAxisData[x] = jsonArray.xAxis[x];
				};
				titleName = jsonArray.title;
				for(var key in jsonArray.seriesList){
					tt[key] = jsonArray.seriesList[key].name;
					seriesData[key] = {
							name: titleName[0]+'>'+jsonArray.seriesList[key].name,
							   type:tp,
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
			lineOrbar(tp,ID,Tg,ou,titleName,xAxisData,seriesData,tt,Url);		//特殊柱体调用option函数	
			break;
			
		case 'force1': //网络关系图
			var categories = new Array();
			var nodes = new Array();
			var links = new Array();
			var name;
			$.ajaxSettings.async = false;
			$.getJSON(jsonA, function (jsonArray) { 
				for(var a in jsonArray.categories){
					categories[a] = {name:jsonArray.categories[a].name,
									itemStyle: {
										normal: {
											color : jsonArray.categories[a].color
										}}
                					};
				};
				for(var b in jsonArray.nodes){
					nodes[b] = jsonArray.nodes[b];
				};
				for(var c in jsonArray.links){
					links[c] = jsonArray.links[c];
				};
				name = jsonArray.categories[0].name;
			}); 
			forceShow(tp,ID,Tg,ou,categories,nodes,links,name,Url);		//网络关系图调用option函数	
			break;
	}
	
}



//线，柱体显示
function lineOrbar(tp,ID,Tg,ou,titleName,xAxisData,seriesData,tt,Url){
		 var openDiv = function(){
			console.log(Url);
			var dialog = $.Layer.iframe(
				{
					title: '查看详情',
					url: Url,
					width: 900,
					height: 550,
					button:false
				});		
		}
		 $(ID).BDChats({
			noAjax:true,
			openUrl:ou,
			title : {
					text: titleName,
					textStyle :{fontSize:14,color:'#555'}
			},
			tooltip : {
				trigger: Tg
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
					splitNumber:10,
					data: xAxisData
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series:seriesData,
			optUrl:openDiv			
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
};

function lineOrbar1(tp,ID,Tg,ou,xAxisData,seriesData,color,titleName,forMatter,Url){
		var openDiv = function(){
			var dialog = $.Layer.iframe(
				{
					title: '查看详情',
					url: Url,
					width: 900,
					height: 550,
					button:false
				});		
		}
		 $(ID).BDChats({
			noAjax:true,
			openUrl:ou,
			tooltip : {
				show: true,
				trigger: Tg,
				formatter:forMatter
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
			series:[
					{
						name: titleName,
						type: tp,
						barMaxWidth:50,
						itemStyle: {
							normal: {   
							color: function(params) {
									var colorList = color;
									return colorList[params.dataIndex]
								}
							}
						},
						 data:seriesData
					}
				],
			optUrl:openDiv			
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
};

//饼图显示
function pieEchart(tp,ID,Tg,ou,legend,titleName,seriesData,showTitle,Url){
		var openDiv = function(){
			var dialog = $.Layer.iframe(
				{
					title: '查看详情',
					url: Url,
					width: 900,
					height: 550,
					button:false
				});		
		}
		var lossrate = 0;
		var atr = { value:lossrate, name:'',itemStyle: {
					normal: {
						label: {show: function(){if (lossrate == 0)
						{ return false;}}()
						},
						labelLine: { show: function (){
							if (lossrate == 0)
							{ return false; }}()
						}
					}}
				};
		if(seriesData.length == 1){
			seriesData.push(atr);
		}
		 $(ID).BDChats({
			noAjax:true,
			openUrl:ou,
			title : {
					text:titleName,
					textStyle :{fontSize:14,color:'#555'}
			},
			tooltip : {
				trigger: Tg,
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
					value:lossrate,
					name:showTitle[0],
					type:'pie',
					radius :['0','60%'],
					center: ['50%', '50%'],
					data:seriesData
				}
			],
			optUrl:openDiv
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});	
		
	}

//空心饼图显示
function pieEchart_o(tp,ID,Tg,ou,seriesData,labelTop,labelFromatter,labelBottom,radius,Url){
		var openDiv = function(){
			var dialog = $.Layer.iframe(
				{
					title: '查看详情',
					url: Url,
					width: 900,
					height: 550,
					button:false
				});		
		}
		$(ID).BDChats({
			noAjax:true,
			openUrl:ou,
			series : [
			{
				type :tp,
				center : ['50%', '50%'],
				radius : radius,
				itemStyle : labelFromatter,
				data :seriesData
				}
			],
			optUrl:openDiv
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
	}

//仪表显示
function gauge(tp,ID,Tg,ou,titleName,gvalue,gname,color,Url){
		var openDiv = function(){
			var dialog = $.Layer.iframe(
				{
					title: '查看详情',
					url: Url,
					width: 900,
					height: 550,
					button:false
				});		
		}
		$(ID).BDChats({
			noAjax:true,
			openUrl:ou,
			tooltip : {
				formatter: "{a} <br/>{b} : {c}%"
			},
			series:[
				{
					name:titleName,
					type:tp,
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
			optUrl:openDiv
			}) .on('afterrender', function (e, charts, el,option) {
					$('body').delegate('.reload','click',function(e){
					});
				});		
	};

//关系图显示
function forceShow(tp,ID,Tg,ou,categories,nodes,links,name,Url){
		var openDiv = function(){
			var dialog = $.Layer.iframe(
				{
					title: '查看详情',
					url: Url,
					width: 900,
					height: 550,
					button:false
				});		
		}
		$(ID).BDChats({
			noAjax:true,
			openUrl:ou,
			series:[
				{
					type:tp,
					name : name,
					ribbonType: false,
					categories:categories,
					itemStyle: {
						normal: {
							label: {
								show: true,
								textStyle: {
									color: '#fff'
								}
							},
							nodeStyle : {
								brushType : 'both',
								borderColor : 'rgba(255,215,0,0.4)',
								borderWidth :5
							},
							linkStyle: {
								type: 'line'
							}
						},
						emphasis: {
							label: {
								show: false
								// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
							},
							nodeStyle : {
								//r: 30
							},
							linkStyle : {}
						}
					},
					useWorker: false,
					minRadius :35,
					maxRadius : 45,
					gravity: 1.1,
					scaling: 1.1,
					roam: 'move',
					nodes:nodes,
					links:links
				}
			],
			optUrl:openDiv
			}).on('afterrender', function (e, charts, el,option) {
				$('body').delegate('.reload','click',function(e){
				});
			});		
}
