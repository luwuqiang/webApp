<%@page contentType="text/html" pageEncoding="utf-8" session="false" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>蓝盾下一代互联网接入口保密检测器日志管理中心</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <!--可以在收藏夹中显示出图标-->
    <link rel="Bookmark" href="${CXT}/assets/lib/bluedonUI/demo/favicon.ico" type="image/x-icon"/>
    <!--可以在地址栏中显示出图标-->
    <link rel="shortcut icon" href="${CXT}/assets/lib/bluedonUI/demo/favicon.ico/favicon.ico" type="image/x-icon"/>
    <link rel="icon" href="${CXT}/assets/lib/bluedonUI/demo/favicon.ico/favicon.ico" type="image/x-icon"/>

    <!--公共-->
    <link href="${CXT}/assets/lib/bluedonUI/demo/skin/blue/style/public.css" rel="stylesheet" type="text/css" />
    <link href="${CXT}/assets/lib/bluedonUI/demo/skin/blue/style/style.css" rel="stylesheet" type="text/css" />
    <script src="${CXT}/assets/lib/bluedonUI/demo/js/lib/jquery.min.js" type="text/javascript"></script>
    <!--[if IE 6]>
    <script src="${CXT}/assets/lib/bluedonUI/demo/js/lib/ie6_bug/DD_belatedPNG.js" type="text/javascript"></script>
    <script type="text/javascript">DD_belatedPNG.fix('*');</script>
    <![endif]-->

    <!--[if lt IE 7]>
    <script src="${CXT}/assets/lib/bluedonUI/demo/js/lib/lib/jqueryie6.min.js" type="text/javascript"></script>
    <![endif]-->
    <script type="text/javascript" src="${CXT}/assets/lib/bluedonUI/demo/js/lib/index.js"></script>
    <script type="text/javascript" src="${CXT}/assets/lib/bluedonUI/demo/js/lib/tab.js"></script>

    <!--dialog-->
    <link href="${CXT}/assets/lib/bluedonUI/demo/js/lib/dialog/dialog.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="${CXT}/assets/lib/bluedonUI/demo/js/lib/dialog/jquery.artDialog.source.js"></script>
    <script type="text/javascript" src="${CXT}/assets/lib/bluedonUI/demo/js/lib/dialog/iframeTools.source.js"></script>
    <script>

        $(document).ready(function(e) {

            selectTab(1);
        });

    </script>
    <!--[if IE 6]>

    <script type="text/javascript">

        $(window).resize(function(){
            h=$(window).height();
            w=$(window).width();
            mh=h-90;
            ch=h-100;
            cw=w-240;
            $(".menu").css("height",mh);
            $(".content").css("height",ch);
            $(".content").css("width",cw);
        })
        $(document).ready(function() {
            $(window).resize();
        });

    </script>
    <![endif]-->

</head>
<body>
<div id="pagewidth">
    <!--header-->
    <%@include file="/WEB-INF/jsp/common/header.jsp" %>

    <!--left-->
    <%@include file="/WEB-INF/jsp/common/menu.jsp" %>

    <!--content-->
    <div class="content">
        <div class="l-tab-links-d">
            <div class="l-tab-links">
                <ul id="tabs">

                </ul>
            </div>
            <div class="t-tab-links">
                <a link="/home">系统主页</a> <span> > <b></b></span>
            </div>
        </div>
        <div id="content" class="l-tab-content">
            <iframe  id="home_content" class="right" name="right" width="100%"  height="100%" frameborder="0"  scrolling="auto" src="/home" ></iframe>
            <!-- Tab content goes here -->
        </div>

    </div>

    <!--footer-->
    <%@include file="/WEB-INF/jsp/common/footer.jsp" %>
</div>
</body>
</html>