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
		}/*,
		callback: {
			beforeCheck: beforeCheck,
			onCheck: onCheck
		}*/
	};

	/*var code, log, className = "dark";
	function beforeCheck(treeId, treeNode) {
		className = (className === "dark" ? "":"dark");
		showLog("[ "+getTime()+" beforeCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
		return (treeNode.doCheck !== false);
	}
	function onCheck(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
	}		
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 6) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}*/
	/*function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}*/

	/*function checkNode(e) {
		var zTree = $.fn.zTree.getZTreeObj(ObjID),
		type = e.data.type,
		nodes = zTree.getSelectedNodes();
		if (type.indexOf("All")<0 && nodes.length == 0) {
			alert("请先选择一个节点");
		}

		if (type == "checkAllTrue") {
			zTree.checkAllNodes(true);
		} else if (type == "checkAllFalse") {
			zTree.checkAllNodes(false);
		} else {
			var callbackFlag = $("#callbackTrigger").attr("checked");
			for (var i=0, l=nodes.length; i<l; i++) {
				if (type == "checkTrue") {
					zTree.checkNode(nodes[i], true, false, callbackFlag);
				} else if (type == "checkFalse") {
					zTree.checkNode(nodes[i], false, false, callbackFlag);
				} else if (type == "toggle") {
					zTree.checkNode(nodes[i], null, false, callbackFlag);
				}else if (type == "checkTruePS") {
					zTree.checkNode(nodes[i], true, true, callbackFlag);
				} else if (type == "checkFalsePS") {
					zTree.checkNode(nodes[i], false, true, callbackFlag);
				} else if (type == "togglePS") {
					zTree.checkNode(nodes[i], null, true, callbackFlag);
				}
			}
		}
	}*/

function setAutoTrigger(e) {
	var zTree = $.fn.zTree.getZTreeObj(ObjID);
	zTree.setting.check.autoCheckTrigger = $("#autoCallbackTrigger").attr("checked");
	$("#autoCheckTriggerValue").html(zTree.setting.check.autoCheckTrigger ? "true" : "false");
}

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
$("#autoCallbackTrigger").bind("change", {}, setAutoTrigger);

}