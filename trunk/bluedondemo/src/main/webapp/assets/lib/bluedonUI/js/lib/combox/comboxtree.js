// JavaScript Document
$(function ()
{
   $("#txt2").ligerComboBox({
		width: 180,
		selectBoxWidth: 200,
		selectBoxHeight: 200,
		valueField: 'text',
		treeLeafOnly: false,
		tree: {
			url: '../../js/lib/ligerUI/js/json.txt',
			checkbox: false,
			ajaxType: 'get'
		}
	})


})