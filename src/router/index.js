import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import events from '../global/events'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/fybWeixinEnt/',
  mode: 'history',
  routes: Routes
})

router.beforeEach((to, from, next) => {
  // 每个页面进行埋点
  events.emit('log', {
    type: 'basic'
  })
  next()
})

export default router
