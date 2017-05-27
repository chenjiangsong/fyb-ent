/**
 * 首页路由
 */
const Home = r => require.ensure([], require => r(require('@/containers/home/index')), 'home')
const Search = r => require.ensure([], require => r(require('@/containers/search/index/index')), 'search')

export default [
  {
    path: '/fyb/house',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/search',
        name: 'search',
        component: Search
      }
    ]
  }
]
