// JavaScript Document
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
				var myChartForce1 = ec.init(document.getElementById('chart_force1'));
				if (typeof window.addEventListener != "undefined") { 
				window.addEventListener('resize',function(){myChartForce1.resize();},false); 
				} else { 
				window.attachEvent("onresize",function(){myChartForce1.resize();}); 
				} 
 

option= {
    //color: ['gold','aqua','lime'],
    series : [
        {
            type:'force',
            name : "总网络",
            ribbonType: false,
			categories : [
                {
                    name: '总网络',
                    itemStyle: {
                        normal: {
                            color : '#ff7f50'
                        }
                    }
                },
                {
                    name: '分支1',
                    itemStyle: {
                        normal: {
                            color : '#87cdfa'
                        }
                    }
                },
                {
                    name:'分支2',
                    itemStyle: {
                        normal: {
                            color : '#9acd32'
                        }
                    }
                }
            ],
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
            nodes:[
                {category:0, name: '总网络', label: '总网络'},
                {category:1, name: '172.16.2.254',zjn:'路由1',dkh:'80'},
                {category:1, name: '172.16.1.253',zjn:'路由2',dkh:'90'},
                {category:1, name: '172.16.3.254',zjn:'路由3',dkh:'880'},
                {category:1, name: '172.16.5.250',zjn:'路由4',dkh:'66'},
                {category:2, name: '172.16.2.11',zjn:'PC1',dkh:'66'},
                {category:2, name: '172.16.2.15',zjn:'PC2',dkh:'66'},
                {category:2, name: '172.16.1.20',zjn:'PC4',dkh:'66'},
                {category:2, name: '172.16.1.89',zjn:'PC3',dkh:'66'},
                {category:2, name: '172.16.3.79',zjn:'PC7',dkh:'66'},
                {category:2, name: '172.16.3.99',zjn:'PC8',dkh:'66'},
                {category:2, name: '172.16.5.66',zjn:'PC5',dkh:'66'},
                {category:2, name: '172.16.5.44',zjn:'PC6',dkh:'66'}
            ],
            links : [
                {source : '172.16.2.254', target : '总网络', weight : 1, name: '分支1'},
                {source : '172.16.1.253', target : '总网络', weight : 1, name: '分支2'},
                {source : '172.16.3.254', target : '总网络', weight : 1, name: '分支3'},
                {source : '172.16.5.250', target : '总网络', weight : 1, name: '分支4'},
                {source : '172.16.2.11', target : '172.16.2.254', weight : 1},
                {source : '172.16.2.15', target : '172.16.2.254', weight : 1},
                {source : '172.16.1.20', target : '172.16.1.253', weight : 1},
                {source : '172.16.1.89', target : '172.16.1.253', weight : 1},
                {source : '172.16.3.79', target : '172.16.3.254', weight : 1},
                {source : '172.16.3.99', target : '172.16.3.254', weight : 1},
                {source : '172.16.5.66', target : '172.16.5.250', weight : 1},
                {source : '172.16.5.44', target : '172.16.5.250', weight : 1}
            ]
        }
    ]
};

//var ecConfig = require('echarts/config');
//function eConsole(param) {
//	var i =param.dataIndex;
//	if(i>0){
//	switch (i) {
//	 	
//            case i:    //柱子1
//            
//			var dialog = $.Layer.iframe(
//			{
//				title: '添加需漏扫IP',
//				url:'bjip.html',
//				width: 340,
//				height: 400,
//				button: [{
//					name: '确认',
//					callback: function () {
//						$d.DOM.wrap.trigger('ok');
//						return false;
//					},
//					disabled: false,
//					className: 'bt_sub',
//					focus: true
//           		 }
//			] 
//			});
//
//                break;
//				
//            default:
//                break;
//               
//        }
//	}
//
//}
//			myChartForce1.on(ecConfig.EVENT.CLICK, eConsole);
					                            
			// 为echarts对象加载数据 
			myChartForce1.setOption(option);
			
    }
   );
		
		
