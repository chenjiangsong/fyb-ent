import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
console.log(Routes)
Vue.use(VueRouter)

export default new VueRouter({
  base: '/fybWeixinEnt/',
  mode: 'history',
  routes: Routes
})
