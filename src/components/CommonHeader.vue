<template>
  <header>
    <div class="left-content">
      <el-button plain icon="el-icon-menu" @click="collapse"></el-button>
      <!-- <h3 style="color: #fff; padding-left: 20px">首页</h3> -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item) in tabList" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
        
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img :src="avatarImg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided @click.native="logOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "CommonHeader",
  data() {
    return {
      avatarImg: "/images/logo.jpg",
    };
  },
  methods:{
      collapse(){
          this.$store.dispatch('collapseMenu')
      },
      logOut(){
        this.$store.commit('clearToken')
        this.$store.commit('CLEARMENU')
        this.$router.push('/login')
      }
  },
  computed:{
    ...mapState({
      tabList:(state)=>{
        return state.tab.tabList
      }
    })
  }
};
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.left-content {
  display: flex;
  align-items: center;
}
.el-button {
  margin-right: 20px;
}
div.right-content img {
  width: 40px;
  height: 40;
  border-radius: 50%;
}
/* .el-breadcrumb__inner{
  color:white;
}
.el-breadcrumb__inner:last-child{
  color: skyblue;
} */
/* span{
  color:white
} */
</style>