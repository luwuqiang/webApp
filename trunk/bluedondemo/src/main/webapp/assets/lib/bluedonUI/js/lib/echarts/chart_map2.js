// JavaScript Document
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/map2' // 使用柱状图就加载map2模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
				var myChartmap = ec.init(document.getElementById('chart_map'));
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChartmap.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChartmap.resize();}); 
				} 
				
				
option = {
    //backgroundColor: '#000000',
    //color: ['gold','aqua','lime'],
    title : {
        text: '"蓝盾杯"安全大赛',
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
        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
        textStyle:{
            color:'#fff'
        }
    },
	
    series : [

        {
            name: '城市态势图',
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
          //获取经纬度值，可从地球在线http://www.earthol.com/获取
           geoCoord: {
			   //亚洲
                '李二': [116.3910,39.9169],
				'李子': [113.2707,23.1345],
				'李好': [121.4802,31.2375],
				'宋安': [139.657341,35.81953],
				'首尔': [126.926412,37.644562],
				'河内': [105.8203,20.76433],
				'班农': [102.8182,20.10184],
				'永珍': [102.6329,17.9747],
				'曼谷': [100.5036,13.7522],
				'吉隆坡': [101.6925,3.1178],
				'新加坡':[103.8568,1.2805],
				'雅加达': [106.8458,-6.2238],
				'巴里岛': [115.0904,-8.3481],
				'格兰努': [125.4402,-8.7350],
				'门迪': [143.6514,-6.1834],
				'马莱':[121.9397,11.91298],
				'加拉干达': [73.1137,49.7695],
				'喀什': [75.9808,39.4259],
				'拉萨':[91.1639,29.6049],
				'周华': [-118.2405,34.0083],
				'周明': [-122.9870,49.2650],
				'墨西哥': [-99.2269,19.4953],
				'多伦多': [-79.43149,43.67593],
				'休士顿': [-95.22,29.46],
				'纽约':[-74.0066,40.7164],
				'哈瓦那': [-82.22,23.08],
				'危地马拉': [-90.31,14.38],
				'利马': [-77.03,-12.03],
				'太子港': [-72.20,18.32],
				'马那瓜': [-86.17,12.09],
				'罗索': [-61.24,15.18],
				'梅洛': [-54.1646,-32.3840],
				'坦迪尔': [-59.1435,-37.3603],
				'科海丘': [-72.0552,-45.6053],
				'雅典':[23.43,37.58], 
				'威尼斯':[12.21,45.27],
				'伦敦':[0.10,51.30],
				'卢森堡':[6.09,49.36],
				'牛津':[-1.15, 51.46],
				'都柏林':[-6.15,53.20],
				'巴黎':[2.20,48.52],
				'穆村':[-345.8537,66.3154],
				'普勒文':[-415.6141,72.3482],
				'坎帕拉':[32.25,0.19], 
				'拉巴特':[-6.51,34.02],
				'阿克拉':[-0.15,5.33],
				'开普敦':[18.28,-35.56],
				'德班':[-328.9781,-29.8592],
				'奧克蘭':[174.45,-36.53], 
				'墨爾本':[144.58,-37.49],
				'霍尼亞拉':[159.57,-9.27],
				'蘇瓦':[178.25,-18.08],
				'莫斯科':[37.35,55.45], 
				'喀山':[49.08,55.45],
				'明斯克':[27.34,53.54],
				'基輔':[30.31,50.26],
				'张小华':[24.55,59.25]
				
            },
			
          //绘线
            markLine : {
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
				
                data : [
                    [{name:'李二'}, {name:'纽约',value:95}],
					[{name:'纽约'}, {name:'李二',value:15}],
					[{name:'莫斯科'}, {name:'李二',value:90}],
					[{name:'利马'}, {name:'李二',value:90}],
                    [{name:'李二'}, {name:'巴黎',value:90}],
					[{name:'周明'}, {name:'周华',value:50}],
                    [{name:'李二'}, {name:'李子',value:30}],
                    [{name:'李好'}, {name:'墨西哥',value:60}],
					[{name:'李好'}, {name:'马莱',value:80}],
					[{name:'李好'}, {name:'宋安',value:20}],
					[{name:'李子'}, {name:'永珍',value:80}],
					[{name:'李子'}, {name:'河内',value:60}],
					[{name:'李子'}, {name:'曼谷',value:30}],
					[{name:'利马'}, {name:'坎帕拉',value:90}],
					[{name:'莫斯科'}, {name:'都柏林',value:90}],
					[{name:'莫斯科'}, {name:'伦敦',value:30}],
					[{name:'纽约'}, {name:'拉巴特',value:30}],
					[{name:'马那瓜'}, {name:'利马',value:30}],
					[{name:'梅洛'}, {name:'开普敦',value:30}],
					[{name:'穆村'}, {name:'普勒文',value:30}]

                ],
				 
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
           //锚点闪光
            markPoint : {
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
				
				/******显示所有data.name的数据和data.value，value值代表攻击强度，markPoint的data.value要与markline的data.value值一致*******/
                data : [
				    {name:'穆村',value:75},
                    {name:'李二',value:75},
                    {name:'周明',value:90},
                    {name:'莫斯科',value:30},
					{name:'李子',value:30},
					{name:'李好',value:60},
					{name:'纽约',value:95},
					{name:'马那瓜',value:60},
					{name:'梅洛',value:30},
					{name:'开普敦',value:30},
					{name:'张小华',value:30},
					{name:'墨爾本',value:30},
					{name:'巴黎',value:90},
					{name:'周华',value:50},
					{name:'墨西哥',value:60},
					{name:'马莱',value:80},
					{name:'宋安',value:20},
					{name:'永珍',value:80},
					{name:'河内',value:60},
					{name:'曼谷',value:30},
					{name:'坎帕拉',value:90},
					{name:'都柏林',value:90},
					{name:'拉巴特',value:30},
					{name:'利马',value:30},
					{name:'普勒文',value:30},
					{name:'利马',value:30},
					{name:'伦敦',value:30}
                ]
            },
			
			
        }
    ]
};
                                                                 
	 
	                                    
					                            
			// 为echarts对象加载数据 
			myChartmap.setOption(option);

			/*myChartmap.on(ecConfig.EVENT.RESIZE, function(){
				//alert(111);
				window.location.href=window.location.href;
			});*/
			//锚点闪光
			myChartmap.addMarkPoint(0, {
                    symbol:'emptyCircle',
               		symbolSize : 3,//当前环的大小
                    effect: {
                        show: true,
                        shadowBlur : 0,
						type:'scale',//放在效果
						period:10//运动周期，值越大就越慢
                    },
                    data: [
 						{name:'穆村',value:75},
						{name:'李二',value:75},
						{name:'周明',value:90},
						{name:'莫斯科',value:30},
						{name:'李子',value:30},
						{name:'李好',value:60},
						{name:'纽约',value:95},
						{name:'马那瓜',value:60},
						{name:'梅洛',value:30},
						{name:'开普敦',value:30},
						{name:'张小华',value:30},
						{name:'墨爾本',value:30},
						{name:'巴黎',value:90},
						{name:'周华',value:50},
						{name:'墨西哥',value:60},
						{name:'马莱',value:80},
						{name:'宋安',value:20},
						{name:'永珍',value:80},
						{name:'河内',value:60},
						{name:'曼谷',value:30},
						{name:'坎帕拉',value:90},
						{name:'都柏林',value:90},
						{name:'拉巴特',value:30},
						{name:'利马',value:30},
						{name:'普勒文',value:30},
						{name:'利马',value:30},
						{name:'伦敦',value:30}
                    ]
                });
			
    }
   );
		
		
