import Vue from 'vue';
import Vuex from 'vuex';

import tab from '@/store/tab';
import home from '@/store/home';
import login from '@/store/loginToken/user';


//需要使用插件一次
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        tab,
        home,
        login
    }
})


//对外暴露Store类的一个实例
// export default new Vuex.Store({
    
//     state:{
//         isCollapse:false,
//         homeData:[]
//     },
//     mutations:{
//         COLLAPSEMENU(state){
//             state.isCollapse = !state.isCollapse
//         },
//         HOMEPAGEDATA(state,homeData){
//             state.homeData = homeData
//         }
//     },
//     actions:{
//         collapseMenu({commit}){
//             commit('COLLAPSEMENU')
//         },
//         async homePageData({commit}){
//             let result = await getData()
//             if(result.code == 200){
                
//                 commit('HOMEPAGEDATA',result.data)
//             }
            
//         }
//     }


// });