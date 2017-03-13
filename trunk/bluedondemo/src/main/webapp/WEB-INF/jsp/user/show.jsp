<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML>
<html>
<head>
    <title>test Add</title>
    <%@ include file="../common/headLink.jsp" %>
</head>

<body>
<%@ include file="../common/header.jsp" %>
<div class="container" style="padding-top: 50px;padding-bottom: 50px">
    <div>userId: ${user.userId}</div>
    <div>昵称: ${user.nickname}</div>
    <div>电话: ${user.phone}</div>
</div>
<%@ include file="../common/footer.jsp" %>
<script>
    require(['common'], function () {

    });
</script>
</body>
</html>
