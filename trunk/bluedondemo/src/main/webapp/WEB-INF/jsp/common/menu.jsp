<%@page contentType="text/html" pageEncoding="utf-8" session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="menu">
    <ul id="documents">
        <c:forEach items="${authModule.children}" var="item">
            <c:if test="${not empty item.functions || not empty item.children}">
                <div class="accordionHeader">
                    <h2><span>Folder</span>${item.qwModule.name}</h2>
                </div>
                <div class="accordionContent">
                    <tags:admin-auth-module functions="${item.functions}" children="${item.children}"
                                            ulClassName="tree treeFolder" qwModule="${item.qwModule}"/>
                </div>
            </c:if>
        </c:forEach>
        <li><a link="cxtj.html" rel="cxtj" target="right" class="select"><span class="menu_icon cxtj"></span>
            <p>查询统计</p><span class="menu_s"></span></a></li>
        <li><a><span class="menu_icon xtgl"></span>
            <p>系统管理</p><span class="menu_s menu_small_icon"></span></a>
            <ul>
                <li><a><span class="menu_sicon menu_small_icon"></span>
                    <p>配置管理</p><span class="menu_s menu_small_icon"></span></a>
                    <ul>
                        <li><a link="list_htfw.html" rel="list_htfw" target="right" class="select"><span
                                class="menu_sicon menu_small_icon"></span>
                            <p>后台服务器管理</p></a></li>
                        <li><a link="list_gjfwq.html" rel="list_gjfwq" target="right" class="select"><span
                                class="menu_sicon menu_small_icon"></span>
                            <p>告警服务器设置</p></a></li>
                    </ul>
                </li>
                <li><a link="list_admin.html" rel="list_admin" target="right" class="select"><span
                        class="menu_sicon menu_small_icon"></span>
                    <p>用户管理</p></a></li>
                <li><a link="list_xtsj.html" rel="list_xtsj" target="right" class="select"><span
                        class="menu_sicon menu_small_icon"></span>
                    <p>系统升级</p></a></li>
                <li><a link="list_fwkz.html" rel="list_fwkz" target="right" class="select"><span
                        class="menu_sicon menu_small_icon"></span>
                    <p>访问控制</p></a></li>
            </ul>
        </li>
    </ul>
</div>
<!--left hidden-->
<div class="left_h">
    <div class="l_icon hidden_i"></div>
</div>
