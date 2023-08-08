import { initGlobalState } from 'qiankun'

export const initState = function() {
  // login 后
  const res = {
    'name': 'steven',
    'username': 'steven',
    'authToken': '400e4386-38f1-4d56-ab63-a9b0a2694344dc',
    'menus': [
      {
        'name': '手机业务来自子应用url',
        'id': 'sub_app',
        'url': 'http://121.5.172.29:8081/#/suborigin/suborigin'
      },
      {
        'name': '电话业务来自子应用url',
        'id': 'sub_app2',
        'url': 'http://121.5.172.29:8081/#/subattr/subattr'
      }
    ]
  }
  const result = res
  window.localStorage.setItem('allUserInfo', JSON.stringify(result))

  console.log('开始初始化state')
  const allInfoJSON = window.localStorage.getItem('allUserInfo') || '{}'
  // 没初始化过且有数据
  if (!window.actionsQiankun) {
    const allInfo = JSON.parse(allInfoJSON)
    window.actionsQiankun = initGlobalState({
      authToken: allInfo.authToken,
      appName: '',
      eventType: '',
      theme: window.localStorage.getItem('theme') || 'dark',
      routeParams: {},
      subAppOptions: {}
    })
    window.actionsQiankun.onGlobalStateChange((state, prev) => {
      console.log('子应用收到的全量state', state)
    })
  } else {
    console.log('已经初始化过state')
  }
}
