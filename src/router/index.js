//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter)

//引入路由组件
import Main from '@/views/Main'
import User from '@/views/User'
import Mall from '@/views/mall'
import PageOne from '@/views/other/pageOne'
import PageTwo from '@/views/other/pageTwo'


let originPush = VueRouter.prototype.push //备份
let originReplace = VueRouter.prototype.replace //备份

//重新编成式路由跳转 以防止报错： Vue-router3新加入的promise报错 // Vue-router4应该没有这个问题了
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)

    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

//重新编成式路由跳转 以防止报错： Vue-router3新加入的promise报错 // Vue-router4应该没有这个问题了
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)

    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/",
            component: Main,
            name:'Main',
            redirect:'/home',
            children:[
                // {
                //     path:'/home',
                //     name:'home',
                //     component: () => import('../views/home')
                // },
                // {
                //     path:"/user",
                //     name:"user",
                //     component:User
                // },
                // {
                //     path:"/mall",
                //     name:"mall",
                //     component:Mall
                // },
                // {
                //     path:"/page1",
                //     name:"page1",
                //     component:PageOne
                // },
                // {
                //     path:"/page2",
                //     name:"page2",
                //     component:PageTwo
                // },

            ]
        },
        
        //登录页面的路由路径
        {
            path:'/login',
            name:'login',
            component: ()=> import('@/views/login')
        }
    ]
})