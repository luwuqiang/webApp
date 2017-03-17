// JavaScript Document

var index=100;
        function addIPRange(){
            var columnHtml='<tr id="col_'+index+'">';
            columnHtml+='<td align="right" >起始IP：</td>';
            columnHtml+='<td ><input type="text" name="name" class="validate[required] text" /></td>';
            columnHtml+='<td align="right" >结束IP：</td>';
            columnHtml+='<td ><input type="text" name="name" class="validate[required] text" /></td>';
            columnHtml+='<td><input type="button" onclick="delIPRange('+index+')" value="- 删除" class="add_but"></td>';
            columnHtml+='</tr>';
            $("#ipRange").append(columnHtml);
            index++;
        }
        //删除IP段
        function delIPRange(id){
            $("#col_"+id).remove();
        }