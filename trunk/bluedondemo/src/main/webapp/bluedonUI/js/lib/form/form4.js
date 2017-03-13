// JavaScript Document

        var index=1;
        function addTime(id){
            var hours=$("#hours").html();
            var minutes=$("#minutes").html();
            var html='<div id="d_'+index+'" style="margin:5px 0px;">';
            html+='<select name="name" id="id" class=" hours" >'+hours+'</select>时 ';
            html+='<select name="name" id="id" class=" minutes" >'+minutes+'</select>分 ';
            html+='<span class="gray" style="margin:5px;">-</span> ';
            html+='<select name="name" id="id" class=" hours" >'+hours+'</select>时 ';
            html+='<select name="name" id="id" class=" minutes" >'+minutes+'</select>分 ';
            html+='<input type="button" class="add_but" value="- 删除" style="position: absolute;" onclick="delTime('+index+')">';
            html+='</div>';
            $("#d_"+id).append(html);
            index++;
        }
        function delTime(idx){
            $("#d_"+idx).remove();
        }
        $(document).ready(function(){
            var hours=$("#hours").html();
            var minutes=$("#minutes").html();
            $("#form_id .hours").html(hours);
            $("#form_id .minutes").html(minutes);
            var id=$("#id").val();
            if(id!=''){
                var dialog = top.getDialog();
                var data = dialog.hData;
                var days=['tab1','tab2','tab3'];
                for(var i=0;i<days.length;i++){
                    var sVal=data[days[i]];
                    if(sVal!='') {
                        var aVal=sVal.substr(1,sVal.length-2).split(",");
                        for(var m=0;m<aVal.length;m++){
                            var idx=0;
                            if(m>0){
                                addTime(days[i]);
                                idx=parseInt(index)-1;
                            }
                            var aTime= aVal[m].substr(1,aVal[m].length-2).split("-");
                            var aTimeS=aTime[0].split(":");
                            var aTimeE=aTime[1].split(":");
                            $("#"+days[i]+'_S_hours_'+idx).val(aTimeS[0]);
                            $("#"+days[i]+'_S_minutes_'+idx).val(aTimeS[1]);
                            $("#"+days[i]+'_E_hours_'+idx).val(aTimeE[0]);
                            $("#"+days[i]+'_E_minutes_'+idx).val(aTimeE[1]);
                        }
                    }

                }
            }
        });