<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="qw" uri="/WEB-INF/tld/qw-functions.tld" %>
<%@ taglib prefix="f" uri="/WEB-INF/tld/el-functions.tld" %>
<%@ taglib prefix="t" uri="/WEB-INF/tags/admin-tags.tld" %>
<%@taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%
    pageContext.setAttribute("CXT", application.getContextPath());
    String path = request.getContextPath();
    //String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
    String basePath = request.getScheme() + "://" + request.getHeader("Host") + path;
    request.setAttribute("HOST", basePath);
    request.setAttribute("ROOT", basePath);
%>
<c:set var="JS" value="${CXT}/assets/backend/js" scope="request"/>
<c:set var="CSS" value="${CXT}/assets/backend/css" scope="request"/>
<c:set var="IMG" value="${CXT}/assets/backend/css/img" scope="request"/>
<c:set var="IMAGES" value="${CXT}/assets/backend/images" scope="request"/>
<c:set var="LIB" value="${CXT}/assets/lib" scope="request"/>
<c:set var="DWZ" value="${LIB}/dwz" scope="request"/>
