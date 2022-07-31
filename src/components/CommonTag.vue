<template>
  <!-- 公共组件 Tag标签-->
  <div class="tabs">
      <el-tag v-for="(item, index) in tabList" 
      :key="item.name" size="small" 
      :closable="item.name != 'home'" 
      :effect="$route.name === item.name ? 'dark' : 'plain'" 
      @click="changeMenu(item)"
      @close="handleClose(item,index)"
      >

      {{item.label}}

      </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name:'CommonTag',
    data(){
        return {

        }
    },
    methods:{
        changeMenu(tag){
            this.$router.push({name:tag.name})
            // console.log(this.$route, this.$router) 无法查看历史记录的
        },
        handleClose(tag,index){
            console.log(index) 

            const length = this.tabList.length - 1
            
            this.$store.dispatch('closeTag',tag)  //这一句会更新dom  

            //如果点击删除的页面不是当前的页面 不需要改变
            if(tag.name !== this.$route.name){
                console.log("第一种情况")
                
            }
            //如果删除的是最后一个页面，往上（左）一页跳转
            
            if(index === length) {
                console.log("第二种情况")
                this.$router.push({
                    name:this.tabList[index - 1].name
                })
            }
            //如果删除的是中间某个页面，往被输出页面的右一页跳转
            else{
                console.log("第三种情况")
                console.log(this.tabList)
                this.$router.push(this.tabList[index].name)
                
            }

             
        }
    },
    computed:{
        ...mapState({
            tabList:(state)=>{
                return state.tab.tabList
            }
        })
    }
}
</script>

<style scoped>
.tabs{
    padding:20px;
}
.el-tag{
    margin-right: 15px;
    cursor: pointer;
}

</style>