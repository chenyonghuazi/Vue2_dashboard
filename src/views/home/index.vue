<template>
  <div>
    <el-row class="home" :gutter="30">
      <!-- 左边区域 -->
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="avatarImg" alt="" />
            <div class="userInfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-04-20</span></p>
            <p>上次登录地点：<span>佛山</span></p>
          </div>
        </el-card>

        <el-card style="margin-top: 20px; height: 400px">
          <el-table :data="chartTableData.tableData">
            <el-table-column v-for="(item, index) in tableLabel" :key="index" :prop="index" :label='item'>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <!-- 右边区域 -->
      <el-col :span="16" style="margin-top: 20px;">
        <!-- 上方数字显示区域 -->
        <div class="num">
          <el-card v-for="(item) in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
            <div>
              <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
            </div>
            
            <div class="detail">
              <p class="number">￥{{item.value}}</p>
              <p class="txt">{{item.name}}</p>
            </div>
          </el-card>
        </div>
        <!-- //折线图 -->
        <el-card style="height:280px; margin-top:20px">
          <div ref="echart1" style="height:280px">

          </div>
        </el-card>
        <!-- //底下两个图 -->
        <div class="graph">
          <!-- 柱状图 -->
          <el-card style="height:260px">
            <div ref="echart2" style="height:240px"></div>
          </el-card>
          <!-- 饼图 -->
          <el-card style="height:260px">
            <div ref="echart3" style="height:240px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from 'vuex';

import {lineChart, Histogram, pieChart} from '@/echarts';

export default {
  name: "Home",
  data() {
    return {
      avatarImg: "/images/logo.jpg",
      
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData:[
        {
          name:"今日支付订单",
          value:1234,
          icon:"success",
          color:"#2ec7c9"
        },
        {
          name:"今日收藏订单",
          value:210,
          icon:"star-on",
          color:"#ffb980"
        },
        {
          name:"今日未支付订单",
          value:1234,
          icon:"s-goods",
          color:"#5ab1ef"
        },
        {
          name:"本月支付订单",
          value:1234,
          icon:"success",
          color:"#2ec7c9"
        },
        {
          name:"本月收藏订单",
          value:1234,
          icon:"star-on",
          color:"#ffb980"
        },
        {
          name:"本月未支付订单",
          value:1234,
          icon:"s-goods",
          color:"#5ab1ef"
        },
      ]
    };
  },
  mounted(){
    this.$store.dispatch('homePageData')
  },
  computed:{
    ...mapState({
      chartTableData:(state)=>{
        let data = state.home.homeData;
        
        
        return data
      }
    })
  },
  watch:{
    
    chartTableData:{
      handler(newValue,oldValue){
        
        this.$nextTick(()=>{
          lineChart(this.$refs.echart1,this.chartTableData) //制作折线图
          Histogram(this.$refs.echart2, this.chartTableData) //制作柱状图
          pieChart(this.$refs.echart3,this.chartTableData) //制作饼图
        },)
      }
    }
  }
};
</script>

<style scoped>
.user img {
  width: 100px;
  height: 100px;
  padding-right: 20px;
}
.user {
  display: flex;
  border-bottom: 1px solid black;
}
.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.userInfo p {
  margin: 0;
}
.num {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
}
.num .el-card {
  
  
  border-radius: 5px;
  height: 60px;
}
.num .el-card div:first-child{
  width: 56px;
}
.num .el-card div{
  
  
  text-align:left;
  justify-content: center;
}
.num .el-card i{
  display: block;
  width: 100%;
  height: 100%;
  text-align:center;
  justify-content: center;
}

.detail p {
  font-size: 0.5rem;
  
}

.graph{
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top:20px;
  column-gap: 10px;
}
</style>