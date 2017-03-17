// JavaScript Document
        // 使用
        require(
            [
                'echarts',
				'echarts/chart/pie' // 使用饼状图就加载pie模块，按需加载
            ],
            function (ec,theme) {
                // 基于准备好的dom，初始化echarts图表
                var myChart_pie2 = ec.init(document.getElementById('chart_pie2'));
				
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChart_pie2.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChart_pie2.resize();}); 
				} 
				
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
				var radius = [45, 65];//半径，默认为MIN(width,height)/2-50,传数组实现环形图，[内半径，外半径]

option_pie2 = {
	series : [
	{
		type : 'pie',
		center : ['50%', '50%'],
		radius : radius,
		itemStyle : labelFromatter,
		data : [
		{name:'other', value:60, itemStyle : labelBottom},
		{name:'', value:40,itemStyle : labelTop}
				]
		}
	]
};

		myChart_pie2.setOption(option_pie2);  
			
 });
		
		
		
