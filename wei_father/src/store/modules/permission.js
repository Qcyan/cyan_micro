import { constantRoutes } from '@/router'

const state = {
  routes: [], // 全量路由
  addRoutes: [], // 全量动态qiankun路由，可能会重复
  addPaths: [], // 全量动态qiankunpath，不会重复，可用于主应用和子应用之前的跳转判断
  isMounting: false,
  preLoadArrSet: [] // 全量前缀
}

const mutations = {
  ADD_DYNAMIC_ROUTES: (state, routes) => {
    const routesPath = routes.map(item => {
      const children = item.children || []
      if (children[0] && children[0].path) {
        return children[0].path
      } else {
        return ''
      }
    })
    // 不重复的全量qiankun路由路径
    state.addPaths = [...new Set([...state.addPaths, ...routesPath])]
    state.addRoutes = [...state.addRoutes, ...routes]
    state.routes = constantRoutes.concat(state.addRoutes)
  },
  CHANGE_MOUNTED_STATUS: (state, isMounting) => {
    state.isMounting = isMounting
  },
  CHANGE_PRELOAD: (state, preLoadArrSet) => {
    state.preLoadArrSet = preLoadArrSet
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
