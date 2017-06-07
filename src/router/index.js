import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/fybWeixinEnt/',
  mode: 'history',
  routes: Routes
})

export default router
