import store from ".."
import Cookie from 'js-cookie'
// import router from "@/router"

export default {
    state: {
        //导航折叠功能
        isCollapse: false,
        //导航面包屑 在CommonHeader和CommonTag 组件中使用
        tabList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        //需要确认一下这个有啥用
        currentMenu: null,
        //Login页面会使用
        menu: []
    },
    mutations: {
        //导航折叠功能 在CommonHeader 组件中使用
        COLLAPSEMENU(state) {
            state.isCollapse = !state.isCollapse
        },
        //CommonAside 导航组件
        SELECTMENU(state, vol) {
            if (vol.name !== 'home') {
                state.currentMenu = vol
                //如果tablist不存在这个页面，那么增加这个页面
                const result = state.tabList.findIndex(item => item.name === vol.name)
                if (result === -1) {
                    state.tabList.push(vol)
                }
            } else {
                store.currentMenu = null
            }
        },
        //CommonTag 标签组件
        CLOSETAG(state, vol) {
            //获取目标索引
            const result = state.tabList.findIndex(item => item.name === vol.name)
            //剔除目标并更新原tabList
            state.tabList.splice(result, 1)
        },
        SETMENU(state, vol) {
            state.menu = vol
            Cookie.set('menu', JSON.stringify(vol))
        },
        CLEARMENU(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        //给用户的权限添加component
        ADDMENU(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            //每一个路径的component
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)    
                } else {
                    item.component = () =>import(`@/views/${item.url}`)
                    menuArray.push(item)
                }
            });

            //路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main',item)
            });

            console.log('ADDMENU', menuArray)
        }

    },
    actions: {
        //导航折叠功能 CommonHeader 组件
        collapseMenu({ commit }) {
            commit('COLLAPSEMENU')
        },
        //CommonAside 导航组件
        selectMenu({ commit }, vol) {
            commit('SELECTMENU', vol)
        },
        //标签 CommonTag 标签组件
        closeTag({ commit }, vol) {
            commit('CLOSETAG', vol)
        }

    }
}