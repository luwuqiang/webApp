<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="navbar navbar-default navbar-static-top" role="navigation">
	<div class="container">
		<div class="navbar-header ">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<div class="navbar-header">
                <a href="index" style="text-align: center;font-size:20px">Header</a>
			</div>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right dropdown-hover">
				<li class="dropdown">
					<a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
                        菜单
					</a>
					<ul class="dropdown-menu dropdown-menu-left" role="menu">
						<li><a href="#">菜单1</a></li>
						<li><a href="#">菜单2</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>