import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/suborigin',
    name: 'suborigin',
    component: Layout,
    children: [
      {
        path: 'suborigin',
        name: 'suborigin/suborigin',
        component: () => import('@/views/suborigin/suborigin')
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()

export default router
