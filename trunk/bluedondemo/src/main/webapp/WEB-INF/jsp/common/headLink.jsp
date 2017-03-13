<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    request.setCharacterEncoding("utf-8");
    response.setContentType("text/html;charset=utf-8");
%>
<base href="<%=basePath%>">
<script>
    var __basePath = "<%=basePath%>";
    var __js_version = "${SETTING.js_v}";
    var __res_root = "${SETTING.res_root}";
</script>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
<meta name="keywords" content="test">
<meta name="applicable-device"content="pc,mobile">

<link rel="stylesheet" href="${SETTING.res_root}css/bootstrap.min.css?${SETTING.css_v}">
<link rel="stylesheet" href="${SETTING.res_root}css/bootstrap-datetimepicker.min.css?${SETTING.css_v}">
<link rel="stylesheet" href="${SETTING.res_root}css/accrod.css?${SETTING.css_v}">
<link rel="stylesheet" href="${SETTING.res_root}css/fileinput.css?${SETTING.css_v}">

<script src="${SETTING.res_root}js/lib/jquery.min.js?${SETTING.js_v}"></script>
<!--[if lte IE 9]>
<script src="${SETTING.js_root}lib/respond.min.js"></script>
<script src="${SETTING.js_root}lib/html5shiv.min.js"></script>
<![endif]-->

