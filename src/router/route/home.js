/**
 * 首页路由
 */
const Home = r => require.ensure([], require => r(require('@/containers/home/index.vue')), 'home')

export default {
  'fyb/house': {
    name: 'home',
    component: Home
  }
}
