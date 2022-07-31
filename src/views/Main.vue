<template>
  <el-container style="height:100%">
    <el-aside width="auto">
        <CommonAside/>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader/>
      </el-header>
      <CommonTag/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTag from '@/components/CommonTag.vue';

export default {
  name: "Home",
  components:{CommonAside, CommonHeader, CommonTag},
  
};
</script>

<style scoped>

.el-header{
    background-color: #333;
}
.el-main {
    padding-top: 0;
    background-color: white;
    height: 100%;
}
.el-aside{
    height: 100%;
}
</style>