/**
 *  设置各api的root，方便给proxyTable来filter调用
 */

const apiRoot = process.env.API_ROOT
const root = window.pageConfig.siteUrl + apiRoot
const myRoot = root + 'fyb/user'

export {
  myRoot
}
