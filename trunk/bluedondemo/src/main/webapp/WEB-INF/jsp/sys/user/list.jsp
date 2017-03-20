<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>用户列表</title>

    <%@include file="/WEB-INF/jsp/common/head-list-link.jsp" %>

    <script src="${CXT}/assets/app/sys/userList.js" type="text/javascript"></script>

    <script language="javascript">

        function display(id) {
            var traget = document.getElementById(id);
            if (traget.style.display == "none") {
                traget.style.display = "";
            } else {
                traget.style.display = "none";
            }
        }
    </script>
</head>

<body>

<div class="list_page">

    <div class="btn_box">
        <div class="btn_list">
            <input type="button" class="btn c_g btn_add" value="新增">
            <input type="button" class="btn c_o btn_del" value="删除">
        </div>
        <div class="aearch_box">
            <form action="" method="post">
                <input name="" type="text" class="keyword" placeholder="帐户">
                <input name="" type="submit" class="btn btn_search" value="查询">
                <input type="button" class="btn btn_sea" value="精确查询" onclick="display('keyword_box')"></form>
        </div>
    </div>

    <div class="keyword_box pad_top" id="keyword_box" style="display:none">
        <form action="" method="post">
            <span class="up"></span>
            <span class="close" onclick="display('keyword_box')"></span>
            <ul>
                <li><label>帐户：</label><input name="" type="text" class="text"></li>
                <li><label>角色：</label><select name="js">
                    <option>超级管理员</option>
                    <option>审计管理员</option>
                    <option>日志管理员</option>
                </select></li>
                <li><label>状态：</label>
                    <select name="lock">
                        <option>锁定</option>
                        <option>未锁定</option>
                    </select>
                </li>
                <li>
                    <input name="" type="submit" class="btn" value="查询">
                </li>
            </ul>
        </form>
    </div>

    <div id="maingrid" class="list">
    </div>
</div>
</body>
</html>
