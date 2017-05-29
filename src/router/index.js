import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from '@/store'
import { toNumber } from 'util'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/fybWeixinEnt/',
  mode: 'history',
  routes: Routes
})

const history = window.sessionStorage
history.clear()
let historyCount = toNumber(history.getItem('count')) || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  store.commit('updateRenderStatus', {isRendering: true})
  if (toIndex) {
    if (!fromIndex) {
      store.commit('updateDirect', {direct: 'forward'})
    } else {
      store.commit('updateDirect', {direct: 'reverse'})
    }
  } else {
    historyCount++
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirect', {direct: 'forward'})
  }

  next()
})

router.afterEach(() => {
  store.commit('updateRenderStatus', {isRendering: false})
})

export default router
