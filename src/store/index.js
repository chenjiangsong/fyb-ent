import Vue from 'vue'
import Vuex from 'vuex'
import assist from './modules/assist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    assist
  }
})
