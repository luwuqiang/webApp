// JavaScript Document
$(function ()
{
	$("#test1").ligerComboBox({ 
		isShowCheckBox: true, 
		isMultiSelect: true,
		data: [
			{ text: '张三', id: '1' },
			{ text: '李四', id: '2' },
			{ text: '赵武', id: '44' }
		]
	}); 
});
function clickee()
{
	alert($("#test3").val());
}