/**
 *  设置各api的root，方便给proxyTable来filter调用
 *  dev apiRoot 为'/api' prod 为空
 */

const apiRoot = process.env.API_ROOT
const root = window.pageConfig.siteUrl + apiRoot

/**
 * 个人中心 root
 */
const myRoot = root + 'fyb/user'

export {
  myRoot
}
