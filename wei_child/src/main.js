import './public-path.js'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import actions from './actions.js'
import store from './store'

Vue.config.productionTip = false

let appInstance = null

function render (props = {}) {
  console.log('子子子 render-----')
  const { container, routePath, query } = props
  // routePath用于qiankun手动加载用的vue-router的abstract模式
  if (routePath) {
    window.routePathFromQianKun = routePath
  }
  if (query) {
    window.queryFromQianKun = query
  }
  // 如果有container从qiankun注入，要把dom绑定到qiankun提供的dom内。因为qiankun体系中dom是隔离状态
  appInstance = new Vue({
    el: container ? container.querySelector('#app') : '#app',
    router,
    store,
    render: (h) => h(App)
  })
}

// window.__POWERED_BY_QIANKUN__可用于判断当前项目是否由qiankun驱动
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  // 子应用加载完成后注册通信模块获取workspace下发的数据
  actions.setActions(props)
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount () {
  appInstance.$notify && appInstance.$notify.closeAll()
  console.log('[vue] unmount')
}

export async function update (props) {
  console.log('sub app updated')
}
