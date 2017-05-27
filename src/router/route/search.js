/**
 * 找房路由
 */
const searchHome = r => require.ensure([], require => r(require('@/containers/search/home')), 'searchHome')

export default [
  {
    path: '/fyb/house/search',
    name: 'searchHome',
    component: searchHome
  }
]
