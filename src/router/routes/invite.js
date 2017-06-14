/**
 * 邀请注册路由
 */
const inviteHome = r => require.ensure([], require => r(require('@/containers/invite/home')), 'inviteHome')

export default [
  {
    path: '/fyb/invite',
    name: 'inviteHome',
    component: inviteHome,
    meta: {
      home: inviteHome
    }
  }
]
