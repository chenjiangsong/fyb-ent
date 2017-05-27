/**
 * 联盟路由
 */
const unionHome = r => require.ensure([], require => r(require('@/containers/union/home')), 'unionHome')

export default [
  {
    path: '/fyb/house/union',
    name: 'unionHome',
    component: unionHome
  }
]
