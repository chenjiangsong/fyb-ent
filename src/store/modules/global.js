/**
 * 全局 模块
 */
const state = {
  // 路由方向 前进forward 后退 reverse
  routerDirect: 'forward'
}

const getters = {
  renderStatus (state) {
    return state.newPage && state.reqSending
  }
}

const mutations = {
  updateDirect (state, { direct }) {
    state.routerDirect = direct
  },
  updateReqSendStatus (state, { reqSending }) {
    state.reqSending = reqSending
  },
  updateNewPage (state, { newPage }) {
    state.newPage = newPage
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
