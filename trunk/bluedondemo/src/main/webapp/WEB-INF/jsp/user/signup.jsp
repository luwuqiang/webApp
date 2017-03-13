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
    <form class="form-horizontal col-lg-offset-9 col-lg-6 col-md-offset-7 col-md-8 col-sm-offset-6 col-sm-10" role="form" action="/user/signup" method="post">
        <h4 class="text-center">用户注册</h4>
        <div class="form-group">
            <div>
                <input  type="text" name="phone" class="form-control" placeholder="手机号码" value="" required>
            </div>
        </div>
        <div class="form-group">
            <div>
                <input type="text" name="nickname" class="form-control" placeholder="昵称" required>
            </div>
        </div>
        <div class="form-group">
            <div>
                <input type="text" name="password" class="form-control" placeholder="密码" required>
            </div>
        </div>
        <div class="form-group">
            <div>
                <button class="btn btn-primary btn-block" type="submit">提交</button>
            </div>
        </div>
    </form>
</div>
<%@ include file="../common/footer.jsp" %>
<script>
    var fn;
    require(['test/add'], function (add) {
        fn = add;
        fn.init();
    });
</script>
</body>
</html>
