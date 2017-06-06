/**
 * 辅助优化 模块
 */
const state = {
  // 路由方向 前进forward 后退 reverse
  routerDirect: 'forward',
  // 页面渲染状态
  // renderStatus: false,
  newPage: false,
  reqSending: false
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
    console.log('reqSending:', reqSending)
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
