/**
 * 找房路由
 */
const searchHome = r => require.ensure([], require => r(require('@/containers/search/home')), 'searchHome')
const searchList = r => require.ensure([], require => r(require('@/containers/search/list')), 'searchList')

export default [
  {
    path: '/fyb/house/search',
    name: 'searchHome',
    component: searchHome,
    meta: {
      home: true
    }
  },
  {
    path: '/fyb/house/search/list',
    name: 'searchList',
    component: searchList
  }
]
