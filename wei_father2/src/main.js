// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { initState } from '@/initQiankunState/index.js'
import { makeAllRouter } from '@/makeAllComponentRouter/index.js'
// 初始化qiankun
initState()
makeAllRouter()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
