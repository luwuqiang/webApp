package com.bluedom.demo.modules.common.frame;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import com.bluedom.demo.modules.common.utils.MyLog;

public class ExceptionHandler implements HandlerExceptionResolver {

	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
		MyLog.error(ex);
		request.setAttribute("errorInfo", ex.getClass().getSimpleName());
		return new ModelAndView("/common/error");
	}
}