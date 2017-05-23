import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'
Vue.use(Router)

export default new Router({
  base: '/fybWeixinEnt/',
  mode: 'history',
  routes: Routes
})
