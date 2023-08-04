
// store/modules/qiankun.js

const state = {
  authToken: ''
}

const mutations = {
  CHANGE_AUTH_TOKEN: (state, authToken) => {
    console.log(authToken, 'auth token')
    state.authToken = authToken
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

