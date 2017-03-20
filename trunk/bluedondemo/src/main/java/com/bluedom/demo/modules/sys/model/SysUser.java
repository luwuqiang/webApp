package com.bluedom.demo.modules.sys.model;

import java.io.Serializable;

/**
 * Created by lynch.liu on 2017/3/20.
 */
public class SysUser implements Serializable {

    private long id;
    private String account;
    private String name;
    private String password;


    private long loginAt;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getLoginAt() {
        return loginAt;
    }

    public void setLoginAt(long loginAt) {
        this.loginAt = loginAt;
    }
}
