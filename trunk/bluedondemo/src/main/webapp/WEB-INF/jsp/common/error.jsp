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
    <h3>发生了错误: ${msg}</h3>
</div>
<%@ include file="../common/footer.jsp" %>
<script>
    require(['common'], function () {
    });
</script>
</body>
</html>
