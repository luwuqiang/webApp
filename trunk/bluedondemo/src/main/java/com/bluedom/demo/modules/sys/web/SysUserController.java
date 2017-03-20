package com.bluedom.demo.modules.sys.web;

import com.bluedom.demo.modules.common.annotation.AuthRequest;
import com.bluedom.demo.modules.sys.model.SysUser;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lynch.liu on 2017/3/20.
 */
@Controller
@RequestMapping("/sys/user/")
public class SysUserController {

    @AuthRequest(funcIds = 1)
    @RequestMapping(value = "/list")
    public String list(HttpServletRequest request, HttpServletResponse response) {
        return "/sys/user/list";
    }

    @AuthRequest(funcIds = 1)
    @RequestMapping(value = "/search")
    public ResponseEntity<ModelMap> search(HttpServletRequest request, HttpServletResponse response) {

        ModelMap modelMap = new ModelMap();

        List<SysUser> list = new ArrayList<SysUser>();
        SysUser sysUser = new SysUser();
        sysUser.setId(1100);
        sysUser.setAccount("");
        sysUser.setPassword("123sss");
        sysUser.setName("测试");
        list.add(sysUser);
        list.add(sysUser);
        list.add(sysUser);
        modelMap.put("data", list);
        modelMap.put("Total", 3);

        return ResponseEntity.ok(modelMap);
    }

    @AuthRequest(funcIds = 1)
    @RequestMapping(value = "/create")
    public String showCreate(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("编码乱码。。。+++");
        return "/sys/user/create";
    }

    @AuthRequest(funcIds = 1)
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("编码乱码。。。+++");
        return "/site/index";
    }
}
