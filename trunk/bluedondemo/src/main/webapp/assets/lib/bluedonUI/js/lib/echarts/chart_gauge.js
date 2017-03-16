// JavaScript Document
        // 使用
        require(
            [
                'echarts',
				'echarts/chart/gauge' // 使用仪表盘就加载gauge模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart_ram = ec.init(document.getElementById('chart_ram')); 
				var myChart_cpu = ec.init(document.getElementById('chart_cpu')); 
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChart_ram.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChart_ram.resize();}); 
				} 
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChart_cpu.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChart_cpu.resize();}); 
				} 
//内存				
  option_ram = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    
    series : [
        {
            name:'内存利用率',
            type:'gauge',
			radius :[0,'100%'],
            detail : {formatter:'{value}%'},
            data:[{value: 80, name: '内存'}],
			axisLine:{show: true,
   				 lineStyle: {
       				 color: [
							[0.2, '#228b22'],
							[0.8, '#48b'],
							[1, '#ff4500']
        				], 
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
    ]
};

//CPU				
  option_cpu = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    
    series : [
        {
            name:'CPU利用率',
            type:'gauge',
			radius :[0,'100%'],
            detail : {formatter:'{value}%'},
            data:[{value: 30, name: 'CPU'}],
			axisLine:{show: true,
   				 lineStyle: {
       				 color: [
							[0.8, '#228b22'],
							[0.8, '#48b'],
							[1, '#ff4500']
        				], 
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
    ]
};

																													
				myChart_ram.setOption(option_ram); 
				myChart_cpu.setOption(option_cpu); 
			
 });
		
		
		
