import {getData} from '@/api';

export default {
    state:{
        
        homeData:[]
    },
    mutations:{
        
        HOMEPAGEDATA(state,homeData){
            state.homeData = homeData
        }
    },
    actions:{
        
        async homePageData({commit}){
            let result = await getData()
            if(result.code == 200){
                
                commit('HOMEPAGEDATA',result.data)
            }
            
        }
    }
}