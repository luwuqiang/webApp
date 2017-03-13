package com.bluedom.demo.modules.common.dao;

import java.util.List;

public interface ComBaseMapper {

    public <T> List<T> getList(T entity);

    public <T> void add(T entity);

    public <T> int save(T entity);

    public <T> int update(T entity);

    public <T> int delete(T entity);
}
