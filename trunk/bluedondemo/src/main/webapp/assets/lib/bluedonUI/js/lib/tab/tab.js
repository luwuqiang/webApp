// JavaScript Document

$(document).ready(function() {	
	 //新增任务菜单切换
  $(".list-tab ul li").click(function(){
   	$(".list-tab ul li").removeClass();
	$(this).addClass("listcurrent");
   })
   
   $(window).resize();
})