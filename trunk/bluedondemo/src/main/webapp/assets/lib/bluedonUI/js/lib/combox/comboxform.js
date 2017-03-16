// JavaScript Document
;(function($){
	
$(function ()
    {    
		 function getGridOptions(){
		   var ht = '<div class="grid"></div>';
		   var arr=[];
		   $(".l-box-select-inner").html('');
		   $(".l-box-select-inner").html(ht);
		  var GridTable = $.BDGrid({
				sColumnsUrl: '../../js/lib/ligerUI/js/testHeader.json',
				ajax: {
					url: '../../js/lib/ligerUI/js/test.json',
					type: 'POST'
				},
				el:'.grid',
				dataAction:'local',
				showSitting:false,//是否需要操作列
				showLock:false,//是否需要解锁和锁定状态栏
				isSelectR:true,//复选按钮是否选中
				width:'500px',
				height:'200px',
				checkbox: true,
				isScroll:true
			 });
		  	$(".grid").on('click',"tr.l-grid-hd-row",function(){
				var selectAll = $(this).hasClass("l-checked");
				var infoTr = $("table.l-grid-body-table tr");
				 var font2= infoTr.children("td:nth-child(2)").children(".l-grid-row-cell-inner");
				if(!selectAll){
					arr = [];
					for(var i=0;i<infoTr.length;i++){
						arr[i] = font2.eq(i).html();
					}
				   }else{
					  arr = []; 
				}
				$("#select").val(arr);
			});
			$(".grid").on('click',"tr.l-grid-row",function(){
			  var $this = $(this);
			  var selected = $this.hasClass("l-selected");
			  var html = $this.children("td:nth-child(2)").children(".l-grid-row-cell-inner").html();
			  var rowdata = $.grid.getSelectedRow();
			   if(!selected){
					arr.push(html);
			   }else{
				   arr.splice($.inArray(html,arr),1);
				}
				$("#select").val(arr);
		   });
		  
		 }
		 $(".l-grid-row:odd").css("background-color","#f9f9f9");
         $("#select").ligerComboBox({
            width: 172,
            slide: false,
            selectBoxWidth: 450,
            selectBoxHeight: 200, valueField: 'CustomerID', textField: 'CustomerID', 
			grid: getGridOptions()
          });
		  $(".l-text-combobox").on('click',function(){
			   getGridOptions();	 
		  });
		  
    });
	
})(jQuery);