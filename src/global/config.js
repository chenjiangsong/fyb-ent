/**
 * 阿里iconfont.css地址，每次新增icon重新配置
 */
export const iconfontCDN = '//at.alicdn.com/t/font_ozwejidwlixry66r.css'

/**
 * home 首页 tabbar配置
 */
export const homeTabList = [
  {
    text: '找房',
    page: 'houseSearch',
    iconClass: 'icon-message'
  },
  {
    text: '发房',
    page: 'housePublish',
    iconClass: 'icon-tab_add',
    defaultSelected: true
  },
  {
    text: '联盟',
    page: 'houseLeague',
    iconClass: 'icon-share_label',
    url: window.pageConfig.siteUrl + 'fyb/house/league'
  },
  {
    text: '我的',
    page: 'houseMy',
    iconClass: 'icon-tab_account'
  }
]
