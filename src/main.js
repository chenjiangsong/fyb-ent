// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import 'vux/src/styles/weui/weui.less'
import FastClick from 'fastclick'
import events from './global/events'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$events = events

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#mod-app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
