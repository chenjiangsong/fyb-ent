/**
 * 阿里iconfont.css地址，每次新增icon重新配置
 */
export const iconfontCDN = '//at.alicdn.com/t/font_ozwejidwlixry66r.css'

/**
 * home 首页 tabbar配置
 */
export const homeTabList = [
  {
    url: '/fyb/house/search',
    text: '找房',
    page: 'searchHome',
    iconClass: 'icon-message'
  },
  {
    url: '/fyb/house/publish',
    text: '发房',
    page: 'publishHome',
    iconClass: 'icon-tab_add',
    defaultSelected: true
  },
  {
    url: '/fyb/house/union',
    text: '联盟',
    page: 'unionHome',
    iconClass: 'icon-share_label'
    // url: window.pageConfig.siteUrl + 'fyb/house/league'
  },
  {
    url: '/fyb/house/my',
    text: '我的',
    page: 'myHome',
    iconClass: 'icon-tab_account'
  }
]
