function BDtabTree(ObjID,JsonUrl){
	var setting = {
		view: {
			selectedMulti: false
		},
		check: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true	
			}
		}
	};


//luoxiaohong ADD
var zNodes = new Array();
var NodeList = function(){
	var result = '';
	$.ajaxSettings.async = false;
	$.getJSON(JsonUrl,function(data){
		result = eval(data);
	}); 
	return result;
}
zNodes = NodeList();

$.fn.zTree.init($(ObjID), setting, zNodes);
//$("#autoCallbackTrigger").bind("change", {}, setAutoTrigger);

}