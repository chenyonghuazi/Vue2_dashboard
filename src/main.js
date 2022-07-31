import Vue from 'vue'
import App from './App.vue'
import {MessageBox,Message,Pagination, Button, Container, Main, Header, Aside, Radio, RadioButton, RadioGroup, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Select, Switch, Input, Option, DatePicker, Dialog } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/router';
import store from '@/store';

import '@/mock/mockServer';

Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.prototype.$message = Message  //提示弹窗
Vue.prototype.$confirm = MessageBox //提示弹窗带确认和取消

Vue.config.productionTip = false

//路由守卫（监听）
router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.login.token
  if(!token && to.name !== 'login'){ //没有token就去login界面
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }
  else{
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  created(){
    store.commit('ADDMENU',router)
  }
}).$mount('#app')
