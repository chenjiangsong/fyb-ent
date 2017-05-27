/**
 * 个人中心路由
 */
const myHome = r => require.ensure([], require => r(require('@/containers/my/home')), 'myHome')

export default [
  {
    path: '/fyb/house/my',
    name: 'myHome',
    component: myHome
  }
]
