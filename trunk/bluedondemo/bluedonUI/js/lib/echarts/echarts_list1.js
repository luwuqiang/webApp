var ECharts={
	
ChartConfig: function (container, option) {
        var chart_path = "../../js/lib/echarts";
        var map_path = "../../js/lib/echarts-map";
        require.config({
            paths: {
                echarts: chart_path,
                'echarts/chart/bar': chart_path,
                'echarts/chart/pie': chart_path,
                'echarts/chart/line': chart_path,
                'echarts/chart/map': map_path
            }
 
        });
        this.option = { chart: {}, option: option, container: container };
        return this.option;
},
ChartDataFormate:{
	
	FormateNOGroupData: function (data) {//data的格式如上的Result1，这种格式的数据，多用于饼图、单一的柱形图的数据源
 
            var categories = [];
 
            var datas = [];
 
            for (var i = 0; i < data.length; i++) {
 
                categories.push(data[i].name || "");
 
                datas.push({ name: data[i].name, value: data[i].value || 0 });
 
            }
 
            return { category: categories, data: datas };
 
        },
 
        FormateGroupData: function (data, type, is_stack) {//data的格式如上的Result2，type为要渲染的图表类型：可以为line，bar，is_stack表示为是否是堆积图，这种格式的数据多用于展示多条折线图、分组的柱图
 
            var chart_type = 'line';
 
            if (type)
 
                chart_type = type || 'line';
 
            var xAxis = [];
 
            var group = [];
 
            var series = [];
 
            for (var i = 0; i < data.length; i++) {
 
                for (var j = 0; j < xAxis.length && xAxis[j] != data[i].name; j++);
 
                if (j == xAxis.length)
 
                    xAxis.push(data[i].name);
 
                for (var k = 0; k < group.length && group[k] != data[i].group; k++);
 
                if (k == group.length)
 
                    group.push(data[i].group);
 
            }
            for (var i = 0; i < group.length; i++) {
                var temp = [];
                for (var j = 0; j < data.length; j++) {
                    if (group[i] == data[j].group) {
                        if (type == "map")
                            temp.push({ name: data[j].name, value: data[i].value });
                        else
                            temp.push(data[j].value);
                    }
                }
                switch (type) {
                    case 'bar'://柱状图
                        var series_temp = { name: group[i], data: temp, type: chart_type };
                        if (is_stack)
                            series_temp = $.extend({}, { stack: 'stack' }, series_temp);
                        break;
                    case 'map'://地图
                        var series_temp = {
                            name: group[i], type: chart_type, mapType: 'china', selectedMode: 'single',
                            itemStyle: {
                                normal: { label: { show: true} },
                                emphasis: { label: { show: true} }
                            },
                            data: temp
                        };
                        break;
                    case 'line'://折线
                        var series_temp = { name: group[i], data: temp, type: chart_type };
                        if (is_stack)
                            series_temp = $.extend({}, { stack: 'stack' }, series_temp);
                        break;
				    case 'pie'://饼图
                        var series_temp = { name: group[i], data: temp, type: chart_type };
                        if (is_stack)
                            series_temp = $.extend({}, { stack: 'stack' }, series_temp);
                        break;
                    default:
                        var series_temp = { name: group[i], data: temp, type: chart_type };
 
                }
                series.push(series_temp);
            }
            return { category: group, xAxis: xAxis, series: series };
        },
},
ChartOptionTemplates:{
	CommonOption: {//通用的图表基本配置
            tooltip: {
                trigger: 'axis'//tooltip触发方式:axis以X轴线触发,item以每一个数据项触发
            },
            toolbox: {
                show: true, //是否显示工具栏
                feature: {
 
                    mark: true,
 
                    dataView: { readOnly: false }, //数据预览
 
                    restore: true, //复原
 
                    saveAsImage: true //是否保存图片
 
                }
 
            }
 
        },
 
        CommonLineOption: {//通用的折线图表的基本配置
            tooltip: {
                trigger: 'axis'
            },
 
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false }, //数据预览
                    restore: true, //复原
                    saveAsImage: true, //是否保存图片
                    magicType: ['line', 'bar']//支持柱形图和折线图的切换
                }
            }
        },
 
Pie: function (data, name) {//data:数据格式：{name:xxx,value:xxx}...
 
            var pie_datas = ECharts.ChartDataFormate.FormateNOGroupData(data);
 
            var option = {
 
                tooltip: {
 
                    trigger: 'item',
 
                    formatter: '{b} : {c} ({d}/%)',
 
                    show: true
 
                },
 
                legend: {
 
                    orient: 'vertical',
 
                    x: 'left',
 
                    data: pie_datas.category
 
                },
 
                series: [
 
                    {
 
                        name: name || "",
 
                        type: 'pie',
 
                        radius: '65%',
 
                        center: ['50%', '50%'],
 
                        data: pie_datas.data
 
                    }
 
                ]
 
            };
 
            return $.extend({}, ECharts.ChartOptionTemplates.CommonOption, option);
 
        },
 
Lines: function (data, name, is_stack) { //data:数据格式：{name:xxx,group:xxx,value:xxx}...
 
            var stackline_datas = ECharts.ChartDataFormate.FormateGroupData(data, 'line', is_stack);
 
            var option = {
 
                legend: {
 
                    data: stackline_datas.category
 
                },
 
                xAxis: [{
 
                    type: 'category', //X轴均为category，Y轴均为value
 
                    data: stackline_datas.xAxis,
 
                    boundaryGap: false//数值轴两端的空白策略
 
                }],
 
                yAxis: [{
 
                    name: name || '',
 
                    type: 'value',
 
                    splitArea: { show: true }
 
                }],
 
                series: stackline_datas.series
 
            };
 
            return $.extend({}, ECharts.ChartOptionTemplates.CommonLineOption, option);
 
        },
 
Bars: function (data, name, is_stack) {//data:数据格式：{name：xxx,group:xxx,value:xxx}...
 
            var bars_dates = ECharts.ChartDataFormate.FormateGroupData(data, 'bar', is_stack); 
            var option = { 
                legend: bars_dates.category, 
                xAxis: [{ 
                    type: 'category', 
                    data: bars_dates.xAxis, 
                    axisLabel: { 
                        show: true, 
                        interval: 'auto',
                        rotate: 0,
                        margion: 8
                    }
                }],
 
                yAxis: [{
                     type: 'value', 
                    name: name || '', 
                    splitArea: { show: true }
                }],
                series: bars_dates.series
            };
            return $.extend({}, ECharts.ChartOptionTemplates.CommonLineOption, option);
 
        },
},//初始化常用的图表类型
 
Charts:{
	
	RenderChart: function (option) {
 
            require([
 
                'echarts',
 
                'echarts/chart/line',
 
                'echarts/chart/bar',
 
                'echarts/chart/pie',
 
                'echarts/chart/k',
 
                'echarts/chart/scatter',
 
                'echarts/chart/radar',
 
                'echarts/chart/chord',
 
                'echarts/chart/force',
 
                'echarts/chart/map'
 
              ],
 
              function (ec) {
 
                  echarts = ec;
 
                  if (option.chart && option.chart.dispose)
 
                      option.chart.dispose();
 
                  option.chart = echarts.init(option.container);
 
                  window.onresize = option.chart.resize;
 
                  option.chart.setOption(option.option, true);
 
              });
 
        },

},//渲染图表
 
RenderMap:function(option){
	
}//渲染地图 
};


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
    require([ 'echarts',  
    'echarts/chart/bar', ]);  
}  


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