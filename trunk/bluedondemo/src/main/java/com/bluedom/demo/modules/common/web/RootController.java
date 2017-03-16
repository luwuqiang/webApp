package com.bluedom.demo.modules.common.web;

import com.bluedom.demo.modules.common.netty.probufclient.NettyClient;
import com.bluedom.demo.modules.common.protobuf.PersonProbuf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/")
public class RootController {

    @Autowired
    private NettyClient nettyClient;

    @RequestMapping(value = "error/{msg}")
    public String error(@PathVariable String msg, HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setAttribute("msg", msg);
        return "/common/error";
    }

    @RequestMapping(value = "exception")
    public String exception(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setAttribute("msg", "exception");
        return "/common/error";
    }

    @RequestMapping(value = "/test/demo")
    public void demo(HttpServletRequest request, HttpServletResponse response) {
        // TODO: 2017/3/15 需要删除这个接口
        if (nettyClient != null) {
            nettyClient.getChannel().writeAndFlush(PReq(111));
        }
        return;
    }

    @RequestMapping(value = "/index")
    public String index(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("编码乱码。。。+++");
        return "/site/index";
    }

    private static PersonProbuf.Person PReq(int id) {
        PersonProbuf.Person.Builder builder = PersonProbuf.Person.newBuilder();
        builder.setId(id);
        builder.setName("orange");
        builder.setSex("man");
        builder.setTel("999");

        return builder.build();
    }
}
