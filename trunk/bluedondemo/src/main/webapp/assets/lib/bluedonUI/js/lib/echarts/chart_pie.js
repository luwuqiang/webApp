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
			'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
		]);
	
	var legend = new Array();
	var titleName = new Array();
	var seriesData =new Array() ;
	var iframeUrl = new Array() ;
	$.ajaxSettings.async = false;
	$.getJSON("../../js/data/pie.json", function (jsonArray) { 
		for(var x in jsonArray.serData){
			legend[x] = jsonArray.serData[x].name;
			seriesData[x] = {value:jsonArray.serData[x].value, name:jsonArray.serData[x].name};
			iframeUrl[x] = jsonArray.serData[x].url;
		};
		for(var y in jsonArray.title){
			titleName[y] = jsonArray.title[y];
		};
	}); 

	$("#chart_pie").BDChats.defaults = {
			iWidth:800,
			iHeight:240,
			noAjax:true, //使用后台请求数据
			loading : true, //加载层
			hParams :{} //提交的参数
		};
     $('#chart_pie').BDChats({
            noAjax:true,
			openUrl:true,
			title : {
					text:'设备信息',
					textStyle :{fontSize:14,color:'#555'}
			},
			tooltip : {
				trigger: 'item',
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
					name:titleName,
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
		
			});
})(jQuery);


/*// JavaScript Document
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChartPie = ec.init(document.getElementById('chart_pie')); 
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChartPie.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChartPie.resize();}); 
				} 
									
option1 = {
	title : {
			text:'设备信息',
			textStyle :{fontSize:14,color:'#555'}
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
	legend: {
        textStyle :{fontSize:12,color:'#555'},
        x : 'center',
        data:['其他设备','实训设备','蓝盾实验设备']
    },
    calculable : false,
    series : [
        {
			name:'实训设备',
			type:'pie',
			radius :['0','60%'],
			center: ['50%', '50%'],
			data:[
				{value:100, name:'蓝盾实验设备'},
				{value:10, name:'实训设备'},
				{value:10, name:'其他设备'}
			]
        }
    ]
};



			// 为echarts对象加载数据 
			myChartPie.setOption(option1);
            }
        );		
		*/
