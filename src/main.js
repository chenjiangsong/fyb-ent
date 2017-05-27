// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vux/src/styles/weui/weui.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mod-app',
  router,
  template: '<App/>',
  components: { App }
})
