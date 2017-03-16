/**
 * Created by Lulu on 15-7-31.
 */
;(function ($) {
    $(document).ready(function () {
        //初始化数据
        var dialog =    top.getDialog();
        var data =  dialog.hData;
        if( data){
            var fields = $("form.edit_form").serializeArray();
            jQuery.each(fields, function (i, field) { //jquery根据name属性查 找
                $(":input[name='" + field.name + "']").val(data[field.name]);
            });
        }
        dialog.DOM.wrap.on('ok', function (e) {
            e.preventDefault();
            $("form.edit_form").submit();
        });
		
        $("form.edit_form").validationEngine({
            promptPosition:'centerRight: 0, -4',scroll: false , binded: true ,maxErrorsPerField:true,'custom_error_messages': {
                // Custom Error Messages for Validation Types
                'required': {
                    'message': '* 该项必须填写！'
                }
            },
            validationEventTriggers:"keyup blur",  //will validate on keyup and blur
            ajaxFormValidation: true,
            ajaxFormValidationMethod: 'post',
            ajaxFormValidationURL:'../../js/data/result.json',
            onBeforeAjaxFormValidation: function () {
            },
            onAjaxFormComplete: function(status, form, json, options){
                if(json.success == false) {
                    $.Layer.confirm({
                        msg: json.msg, fn: function () {
					
                        }
                    });
                }else{
					parent.Val_Iframe = json.data[0];
					parent.ValIFRAM();
                    dialog.hGrid.loadData();
                    dialog.close();
                }
            }

        });

    });
})(jQuery);