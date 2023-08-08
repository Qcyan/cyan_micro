import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import store from '@/store/index.js'
// import { loadMicroApp } from 'qiankun'
import Layout from '@/components/layout'

Vue.use(VueRouter)

// const identity = 'sub_app' // sub + suborigin/suborigin
// const queryForSearch = {}
// const host = 'http://192.168.3.175:8082' // 子应用的

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Layout,
    redirect: '/main/index',
    children: [
      {
        path: 'index',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          title: '首页',
          icon: 'form'
        }
      }
    ]
  }
  // {
  //   id: 'sub_app',
  //   name: '来自子应用url',
  //   path: '/suboriginsub_app',
  //   url: 'http://192.168.3.175:8082/suborigin/suborigin',
  //   meta: {
  //     title: '来自子应用url'
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       name: 'sub_app',
  //       path: '/suborigin/suborigin',
  //       meta: {
  //         qiankunConfig: {
  //           entry: host,
  //           routePath: 'suborigin/suborigin'
  //         },
  //         query: {},
  //         title: '手机业务来自子应用url',
  //         icon: 'form'
  //         // activeMenu: element.activeMenu
  //       },
  //       component: {
  //         render: function(h) {
  //           return h(
  //             'div',
  //             {
  //               attrs: {
  //                 id: identity,
  //                 class: `full-height-and-width`
  //               }
  //             },
  //             [h('div', {
  //               attrs: {
  //                 class: 'full-height-and-width-spin'
  //               }
  //             }, '加载中')]
  //           )
  //         },
  //         name: identity,
  //         data() {
  //           return {
  //             loading: false,
  //             microApp: null,
  //             routePath: '',
  //             name: '',
  //             username: ''
  //           }
  //         },
  //         activated() {
  //           console.log('activated subapp')
  //           if (this.microApp.update) {
  //             this.microApp.update({
  //               routePath: this.routePath,
  //               lifeCycle: 'onactive'
  //             })
  //           }
  //         },
  //         mounted() {
  //           console.log(this.$el, 'curent subapp mounted------------')
  //           this.initQiankunMicroApp()
  //         },
  //         methods: {
  //           initQiankunMicroApp() {
  //             this.loading = true
  //             store.commit('permission/CHANGE_MOUNTED_STATUS', this.loading)
  //             console.log('当前qiankun容器的this.$route路由为:', this.$route)
  //             const entry = this.$route.meta.qiankunConfig.entry
  //             //   如果qiankunconfig有path就从qankun获取 如果没有去 默认的path
  //             this.routePath = this.$route.meta.qiankunConfig.routePath || this.$route.path
  //             console.log('-----------entry:', entry, 'this.routePath：', this.routePath, this.$route.path, identity)

  //             this.microApp = loadMicroApp({
  //               name: identity,
  //               entry,
  //               container: `#${identity}`,
  //               props: {
  //                 routePath: this.routePath,
  //                 query: queryForSearch,
  //                 workspaceWindow: window,
  //                 loginInfo: {
  //                   platform: 'WORKSPACE',
  //                   type: '2',
  //                   // authToken: getToken()
  //                   authToken: 'tfb12345679'
  //                 }
  //               }
  //             }, {
  //               excludeAssetFilter: url => (url.includes('baidu') || url.includes('bdimg'))
  //             })

  //             this.microApp.mountPromise.then(() => {
  //               this.loading = false
  //             }).catch((err) => {
  //               console.log(err, 'mount sub app fail')
  //             }).finally(() => {
  //               this.loading = false
  //               console.log('子应用 finally')
  //               store.commit('permission/CHANGE_MOUNTED_STATUS', this.loading)
  //             })
  //           }
  //         },
  //         beforeDestroy() {
  //           console.log('beforeDestroy')
  //           store.commit('permission/CHANGE_MOUNTED_STATUS', false)
  //           if (this.microApp) {
  //             this.microApp.unmount()
  //           }
  //         }
  //       }
  //     }

  //   ]

  // }
]

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export const constantRoutes = routes

export default router
