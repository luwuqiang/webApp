(function($, window, document, undefined){  //避免全局依赖,避免第三方破坏
	
	/*opt 配置参数可以使用第三方的API，因为是继承第三方的插件，还是自定义配置参数*/
    /*默认配置参数*/
    $.BDGrid = function (opt) { 
        var me = this;
        var title  ='';// top.tabs && top.tabs.getCurrentTab().label;
        opt = $.extend({},  {
            alternatingRow: true,
            rownumbers: false,
            allowHideColumn:false,
            pageParmName :'start',
            pagesizeParmName :'length',
            root :'data',
            record :'Total',
            enabledSort:false,
            pageSize:5,
			pageSizeOptions: [5, 10, 20, 30, 40, 50],
            heightDiff:-5,
            width: '450px',height:'600px',
            frozenCheckbox:false,
            columnDefs:[],
            title:title,
			TableISelect:false,
			isSelectR:false,
        },opt);

		//console.log(me.prototype);
		
		//增加表格
		var parentEl = opt.el || 'body', sHtml = '', title = opt.title || '';
        sHtml = '<div class=\"seaBox\"><h1 class="title">' + title + '</h1><div class=\"other\"></div><div class=\"listBtn btn_box\"><div class="btn_list"></div></div></div>'
		
        $(parentEl).append('<div class="g_div_table" position="center">' + sHtml + '<div class="ligerGrid "></div></div>');
		var el = $('.ligerGrid');
        me.el = el;
        if(opt.ajax){
            opt.url = opt.ajax.url;
            opt.parms = opt.ajax.parms;
        }
		
		if(!opt.url&&!opt.sColumnsUrl){
            alert("请配置表格信息请求地址");
            return false;
        }
       var getData  = function(data){
		 	
       };
		//是否显示增、删、改按钮
		if(!opt.showSitting){
			$(".listBtn").hide();
		}
		//修改IndexListData.json文件的TableISelect值，实现翻页选中
		$(parentEl).on('click','tr.l-grid-row',function(){
			var row=$(this);
			var uncheck = row.hasClass("l-selected");
			var n = row.find("a.hideId").attr("rowid");
			$.ajaxSettings.async = false; 
			$.getJSON(opt.url, function(data) {
				$.each(data.data, function(i,item) {
					if(!uncheck){	
						data.data[n].TableISelect  = true;
					}else{
						data.data[n].TableISelect  = false;
					}
				});
				isSelectR = data.data[n].TableISelect;
			});
			$.post(opt.url,function(data) {
				data.data[n].TableISelect = isSelectR;
			},'json');
		});	
		//解锁与锁定的切换
		el.on('click', 'input.qt',function(event){
			event.stopPropagation();
			  var yes = $(this).hasClass("bt_qyan");
			
			  if(yes){
				  $(this).removeClass("bt_qyan").addClass("bt_tyan");
				  $(this).attr("title","锁定");
			   }else{
				   $(this).removeClass("bt_tyan").addClass("bt_qyan");
				   $(this).attr("title","解锁");
				} 
		});
		//增删改A标签
		$(parentEl).on('click', 'a', function () {
		   var aClass = $(this);
           var  data = me.grid.getRow($(this).attr('rowid'));
		   if(aClass.hasClass("bt_edit")){
			 el.trigger('edit', [me, me.grid, [data]]);
		    };
		   if(aClass.hasClass("bt_view")){
				el.trigger('view', [me, me.grid, [data]]);
		    };
		   if(aClass.hasClass("bt_del")){
			 el.trigger('del', [me, me.grid, [data]]);
		    };
        });
		//增删改INPUT按钮
		$(parentEl).on('click', 'input', function () {
			  var eClass = $(this);
			  if(eClass.hasClass("btnAdd")){
				 el.trigger('add', [me, me.grid]);
			  };
			  if(eClass.hasClass("btnEdit")){
				 el.trigger('edit', [me, me.grid,me.grid.getSelectedRows()]);
			  };
			  if(eClass.hasClass("btnView")){
				 el.trigger('view', [me, me.grid,me.grid.getSelectedRows()]);
			  };
			  if(eClass.hasClass("btnDel")){
				 el.trigger('del', [me, me.grid,me.grid.getSelectedRows()]);
			  };
			  if(eClass.hasClass("accurate_search")){
				 el.trigger('accurate_search', [me, me.grid]);
			  };
        });
		if (opt.sColumnsUrl) {
			$.ajax({
				url: opt.sColumnsUrl,
				type: 'POST',
				dataType: 'json',
				data: {_dc: new Date()}
			}).done(function (data){
				if(opt.columnDefs){
					$.each( opt.columnDefs,function(key,item){
						$.each( data,
							function(i,v){
								if(typeof item != "undefined" && v.sClass == item.targets){
									data[i].render = item.render;
								}
							}
						)

					});

				};
				//是否增加锁定操作
				if(opt.showLock){
					data.push({
						 display: '状态', name: 'lock',minWidth: 100, type:'int',
						  render: function (item)
							{
								var h = [];
								h.push( "<input type='button' class='qt bt_qyan' title='解锁'/>");
								return h;
							}
					});
				}
				$.each( data,function(i,v){
						switch(v.sClass){
							case 'btn_del':
								 $('<input type=\"button\" class=\"btn btnDel c_o btn_del\" value="删除">').appendTo('.g_div_table div.btn_list');
								opt.checkbox = true;
								opt.del = opt.showSitting;
							break;
							case 'btn_view':
								 $('<input type=\"button\" class=\"btn btnView c_o btn_view\" value="查看">').appendTo('.g_div_table div.btn_list');
								opt.checkbox = true;
								opt.view = opt.showSitting;
							break;
							case 'btn_edit':
								 if(v.sType ==1){
										$('<input type=\"button\" class=\"btn btnAdd c_g btn_add\" value="增加">').appendTo('.g_div_table div.btn_list');
									}else if(v.sType ==2){
										$('<input type=\"button\" class=\"btn btnEdit c_b btn_edit\" value="编辑">').appendTo('.g_div_table div.btn_list');
										opt.edit = opt.showSitting;
									}else{
										$('<input type=\"button\" class=\"btn btnAdd c_g btn_add\" value="增加">').appendTo('.g_div_table div.btn_list');
										$('<input type=\"button\" class=\"btn btnEdit c_b btn_edit\" value="编辑">').appendTo('.g_div_table div.btn_list');
										opt.edit = opt.showSitting;
									}
								opt.checkbox = false;
							break;
						}
						
						if( data[i].bVisible !=  false){
						}else{
							data[i].hide = true;
							data[i].width = -1;
						}
						if(  data[i].data){
							data[i].name =   data[i].data;
						}
						if(  data[i].sTitle){
							data[i].display =   data[i].sTitle;
						}
					}
				);
				if(opt.del == true || opt.view == true || opt.edit == true)
				{
					data.push({
						name: 'id', display: '操作',width:100,  isAllowHide: false,
						render: function (record, rowindex, value, column) {
							var html = [] ;
							if( opt.edit == true){
								html.push( "<a href='javascript:;' class='bt_edit bt_bj list-btn' rowid='"+rowindex+"'></a>");
							}
							if( opt.view == true){
								html.push( "<a href='javascript:;' class='bt_view bt_ck list-btn' rowid='"+rowindex+"'></a>");
							}
							if( opt.del == true){
								html.push( "<a  href='javascript:;' class='bt_del bt_sc list-btn' rowid='"+rowindex+"'></a>");
							}
							return html.join('&nbsp;');
						}
					});
					
				};
				if(opt.checkbox){
					data.push({
						name: 'hideId', display: '',width:1,  isAllowHide: false,
						render: function (record, rowindex, value, column) {
							var html = [] ;
							html.push( "<a href='javascript:;' class='hideId' style='display:none' rowid='"+rowindex+"'></a>");
							return html;
						}
					});	
				}
				opt.columns = data;
				
				var d =   $(parentEl+ ' .ligerGrid').ligerGrid(opt);
				me.grid = d;
				//console.log(d);
				me.el.trigger('beforerender',[d]);

				var fit = opt.fit || true;
				if(fit){
					$('.ligerGrid .l-grid-body').css('overflow-x','hidden');
				}
			}).fail(function () {
			});
		}else{ 
				var d =   $(parentEl+ ' .ligerGrid').ligerGrid(opt);
				me.grid = d;
				me.el.trigger('beforerender',[d]);
		}
		return   me.el;
		
        /*function __init__(data){
            return me.each(function() {//因为对象化可能有0个以上的实例
                $this = $(this); //转化为jQuery对象
                var grid = $this.ligerGrid($.extend({}, {
                        columns:data, pageSize: 10,
                        width: '100%', height: '100%'
                    },opt
                ));
                $.extend(grid,{
                    getData : getData
                });
               
                $this.trigger('afterrender',[grid,$this]);
            });
        }
        if(opt.columns){
            __init__({});
        }else{
            $.getJSON(opt.url,opt.sColumnsUrl||{},function(data){
                return __init__(data);
            },"json");
        }*/
    };
    
})(jQuery, window, document);

