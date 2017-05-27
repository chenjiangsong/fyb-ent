/**
 * 发房路由
 */

const publishHome = r => require.ensure([], require => r(require('@/containers/publish/home')), 'publishHome')

export default [
  {
    path: '/fyb/house/publish',
    name: 'publishHome',
    component: publishHome
  }
]
