// JavaScript Document
 ;(function ($) {
   $(document).ready(function () { 
	$(".class_mod").click(function(){
		$(".bjxq input").removeAttr('disabled');
		$(".bjxq select").removeAttr('disabled');
		$(".bjxq textarea").removeAttr('disabled');
		$(this).text("保存")
		$(this).load()
	})
	 
});
})(jQuery);