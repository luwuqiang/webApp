
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
			'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
			'echarts/chart/pie', // 使用饼图就加载pie模块，按需加载
			'echarts/chart/line' // 使用折线就加载line模块，按需加载
		]);
	//获取后台JSON数据 开始
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
	$.getJSON("../../js/data/mix1.json", function (jsonArray) { 
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
		tit = jsonArray.xTitle;
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
	//获取后台JSON数据 结束
	
	$("#chart_mix").BDChats.defaults = {
			iWidth:800,
			iHeight:240,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
	
		};
     $('#chart_mix').BDChats({
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
			series : seriesData0,
			
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



/*// JavaScript Document
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
				'echarts/chart/pie', // 使用饼图就加载pie模块，按需加载
				'echarts/chart/line' // 使用折线就加载line模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChartMix = ec.init(document.getElementById('chart_mix'));
				
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChartMix.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChartMix.resize();}); 
				} 

				
option = {
    tooltip : {
        trigger: 'axis'
    },

    calculable : false,
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'line',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570]
        },

        {
            name:'搜索引擎细分',
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
                        length : 20
                    }
                }
            },
            data:[
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
                    
					                            
			// 为echarts对象加载数据 
			myChartMix.setOption(option); 
			
    }
   );
		
		
*/