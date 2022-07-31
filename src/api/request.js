//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条的CSS样式
import 'nprogress/nprogress.css'
//1. 利用axios对象的方法create，去创建一个axios实例
//2.request就是axios,只不过稍微配置一下
const requests = axios.create({

    //基础路径，发出请求的时候，路径当中会出现api
    baseURL:"/api",

    //代表请求超时的时间5s
    timeout:5000,
})


//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情 （发出请求前的前置中间件）

requests.interceptors.request.use((config)=>{
    nprogress.start(); //进度条开始动
    return config; //config是一个配置对象，对象里有一个属性很重要：headers请求头
})

//响应拦截器 （收到响应的前置中间件）
requests.interceptors.response.use((res)=>{
    //成功的回调：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    //进度条完成
    nprogress.done()
    return res.data
},(error)=>{
    //响应失败的回调
    return Promise.reject(new Error('faile'))
})



//对外暴露
export default requests