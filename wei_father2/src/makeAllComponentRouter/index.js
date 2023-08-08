import { autoFillComponent, addAllRoutes } from '@/makeAllComponentRouter/makeComponents.js'
import { resetRouter } from '@/router/index.js'
import { splitUrl } from '@/utils/qiankunMethods.js'
import Vuex from '@/store/index'
import { prefetchApps } from 'qiankun'

// 抽出所有的tree结构的最后一层动态路由，做flat处理，然后拼装成qinakun模式。
function makePathArr(menus = []) {
  const pathArrTemp = []
  // 第一层
  for (let firstIndex = 0; firstIndex < menus.length; firstIndex++) {
    const firstElement = menus[firstIndex]
    if (firstElement.url && firstElement.id && firstElement.name) {
      pathArrTemp.push(firstElement)
    }
  }
  return pathArrTemp
}

export const makeAllRouter = function() {
  const fullRouter = []
  // const userInfo = JSON.parse(window.localStorage.getItem('allUserInfo') || '{}')

  const userInfo = {
    'name': 'steven',
    'username': 'steven',
    'authToken': '400e4386-38f1-4d56-ab63-a9b0a2694344dc',
    // 左侧渲染的子应用的菜单数据
    'menus': [
      {
        'name': '业务1来自子应用url',
        'id': 'sub_app',
        'url': 'http://192.168.3.175:8082/suborigin/suborigin'
      }
    ]
  }

  const preLoadArr = []
  if (userInfo.menus) {
    const pathArr = makePathArr(userInfo.menus)
    for (let index = 0; index < pathArr.length; index++) {
      // 拼接成qianku专属路由
      const element = pathArr[index]
      const fullSingleRouter = autoFillComponent(element)
      console.log(fullSingleRouter, 'fullSingleRouter')
      fullRouter.push(fullSingleRouter)
      // 预加载
      const pathSplit = splitUrl(element.url)
      const host = pathSplit[0]
      preLoadArr.push(host)
    }
  } else {
    console.log('未登录或者已经初始化过router')
  }
  // 除了从后端取得登录接口里的路由以外，还有存的临时路由要处理
  const tempRouteJson = window.localStorage.getItem('tempRouteJson')
  const tempRoute = tempRouteJson ? JSON.parse(tempRouteJson) : []
  if (tempRoute.length > 0) {
    for (let index = 0; index < tempRoute.length; index++) {
      const element = tempRoute[index] || {}
      const fullSingleRouter = autoFillComponent(element, true)
      fullRouter.push(fullSingleRouter)
    }
  }
  if (fullRouter.length > 0) {
    // 制造路由之前先初始化路由
    resetRouter()
    console.log('制造好的全量qiankun路由为:', fullRouter)
    addAllRoutes(fullRouter)
  } else {
    // console.log('开始执行removeToken-makeAllRouter')
    // removeToken()
    console.log('没有菜单')
  }

  // 开始预加载
  const preLoadArrSet = [...new Set(preLoadArr)]
  console.log(preLoadArrSet, 'preLoadArr')
  // 暂存到vuex
  Vuex.commit('permission/CHANGE_PRELOAD', preLoadArrSet)
  const qiankunConfigArr = preLoadArrSet.map((preLoad, index) => {
    return {
      name: `qiankunPreloadSubapp${index}`,
      entry: preLoad
    }
  })
  if (!window.hasPreloadSubApp) {
    prefetchApps(qiankunConfigArr)
    window.hasPreloadSubApp = true
  }
}

