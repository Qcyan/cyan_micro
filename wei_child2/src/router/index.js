import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/hello',
    children: [{
      path: 'hello',
      name: 'Hello',
      component: () => import('@/views/helloWorld'),
      meta: { title: '首页', icon: 'hello' }
    }]
  },
  {
    path: '/suborigin',
    component: Layout,
    children: [
      {
        path: 'suborigin',
        name: 'suborigin',
        component: () => import('@/views/suborigin/suborigin'),
        meta: { title: 'page2', icon: 'form' },
        children:[
          {
            path: 'child',
            name: 'HelloWorld',
            component: () => import('@/views/helloWorld')
          }
        ]
      }
    ]
  }
]

/*const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()*/

export default routes
