;(function ($) {  //避免全局依赖,避免第三方破坏
    var Iconfig = window.Iconfig;
    var Iutils = window.Iutils;
    var WebApp = window.WebApp;

    // --------------------------------------------------------------------------------------------------------------------------------- //
    var RANDOM_ID = "${RANDOM_ID}";
    // --------------------------------------------------------------------------------------------------------------------------------- //
    var vModel = {};
    // --------------------------------------------------------------------------------------------------------------------------------- //

    //表格列名信息
    vModel.gridTableTile4User = [
        {"sTitle": "ID", "data": "id", "bVisible": true},
        {"sTitle": "账号", "data": "account"},
        {"sTitle": "名称", "data": "name"},
        {"sClass": "btn_edit", "bVisible": false, "data": ""},
        {"sClass": "btn_view", "bVisible": false, "data": ""},
        {"sClass": "btn_del", "bVisible": false, "data": ""}
    ];

    //方法入口
    function activate() {
        //初始化表格
        initEvent();
        //添加按钮事件
        initEvent2();
        //调整css
        initEvent3();
    }

    function initEvent() {
        console.info("initEvent++++++")
        /*调用*/
        var GridTable = $.BDGrid({
            ajax: {
                url: '/sys/user/search',
                type: 'POST'
            },
            el: '#maingrid',
            dataAction: 'local',
            showSitting: false,//是否需要操作列
            showEdit: false,
            showView: true,
            showDel: true,
            showLock: true,//是否需要解锁和锁定状态栏
            isSelectR: true,//复选按钮是否选中
            width: '99.8%',
            height: '99%',
            pageSize: 20,
            pageSizeOptions: [10, 20, 30, 40, 50, 100],
            checkbox: true,
            columns: vModel.gridTableTile4User,
            detail: {
                height: 'auto', onShowDetail: function (r, p) {
                    $(p).append($('<table cellpadding="0" cellspacing="0" style="width:95%;" class="detailtd"><tr><td align="right" class="dtd">姓名：</td><td>' + r.sFrameName + '</td><td align="right" class="dtd">部门名称：</td><td>' + r.sFrameDesc + '</td></tr><tr><td align="right" class="dtd">IP地址：</td><td>' + r.sFrameType + '</td><td align="right" class="dtd">MAC地址：</td><td>' + r.sFrameMAC + '</td></tr><tr><td align="right" class="dtd">国籍：</td><td>' + r.sFrameCount + '</td><td align="right" class="dtd">证件类型：</td><td>' + r.sFrameCARD + '</td></tr><tr><td align="right" class="dtd" >上网许可：</td><td colspan="3">' + r.sFrameNET + '</td></tr></table>').css('margin', '20px auto'));

                }
            }
        });

        GridTable.on('edit', function (e, c, table, data) {    //编辑管理员
            e.preventDefault();
            if (data.length == 1) {
                var dialog = $.Layer.iframe({
                    title: '编辑管理员',
                    url: 'add_admin.html',
                    width: 500,
                    height: 420
                });
                dialog.hData = data[0];
                dialog.hGrid = table;
            } else {
                $.Layer.confirm({
                    msg: '请选择某一行数据？', fn: function () {

                    }
                });
            }
        });
        GridTable.on('view', function (e, c, table, data) {    //查看管理员信息
            e.preventDefault();
            if (data.length == 1) {
                var dialog = $.Layer.iframe({
                    title: '查看管理员信息',
                    url: 'add_admin.html',
                    width: 500,
                    height: 420
                });
                dialog.hData = data[0];
                dialog.hGrid = table;
            } else {
                $.Layer.confirm({
                    msg: '请选择某一行数据？', fn: function () {

                    }
                });
            }
        });
    }

    function initEvent2() {
        $('.list_page').delegate('input.btn_add', 'click', function () {
            var dialog = $.Layer.iframe(
                {
                    title: '新增管理员',
                    url: 'add_admin.html',
                    width: 500,
                    height: 420

                });
        });

        //删除用户姓名
        $('.list_page').on('click', 'input.btn_del,a.bt_del', function (e) {
            e.preventDefault();
            var $this = $(this);
            var row = $.grid.getSelectedRow();
            if (!row && $this[0].tagName == 'INPUT') {
                $.Layer.confirm({
                    msg: '请选择数据？', fn: function () {
                    }
                });
                return;
            } else if (row && $this[0].tagName != 'A') {
                $.Layer.confirm({
                    msg: '是否要删除数据？', fn: function () {
                        $.grid.deleteSelectedRow();
                    }
                });
            }
            if ($this[0].tagName == 'A') {
                var rowid = $this.attr('rowid');
                $.Layer.confirm({
                    msg: '是否要删除数据？', fn: function () {
                        $.grid.deleteRow(rowid);
                    }
                });
            }
        });
    }

    function initEvent3() {
        $(".l-grid-row:odd").css("background-color", "#f9f9f9");//列表间隔行
    }

    // --------------------------------------------------------------------------------------------------------------------------------- //
    //DOM加载完成之后,再执行
    $(document).ready(function () {
        activate();
    });
})(jQuery);