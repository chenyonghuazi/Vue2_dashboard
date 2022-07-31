//当前这个模块：API统一管理
import requests from "./request";
//开发服务器：http://39.98.123.211


//分别暴露
//获取主页数据
export const getData = ()=>{
    //发请求
    return requests({
        url:'/home/getData',
        method:'get'
    })
}

//更新用户信息
export const updateUser = (data)=>{
    return requests({
        url:'/user/edit',
        method:'post',
        data
    })
}

//增加用户
export const addUser = (data)=>{
    return requests({
        url:'/user/add',
        method:'post',
        data
    })
}

//得到用户
export const getUser = (params)=>{
    return requests({
        url:'/user/getUser',
        method:'get',
        params
    })
}
//删除用户
export const delUser = (params)=>{
    return requests({
        url:'/user/del',
        method:'get',
        params
    })
}

//获取权限 (admin或别的用户获取的路由不相同)
export const getMenu = (data)=>{
    return requests({
        url:'/permission/getMenu',
        method:'post',
        data
    })
}
