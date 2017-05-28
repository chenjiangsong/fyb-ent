/**
 * 辅助优化 模块
 */
const state = {
  // 路由方向 前进forward 后退 reverse
  routerDirect: 'forward',
  // 页面渲染状态
  renderStatus: false
}

const getters = {}

const mutations = {
  updateDirect (state, { direct }) {
    state.routerDirect = direct
  },
  updateRenderStatus (state, { isRendering }) {
    state.renderStatus = isRendering
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
