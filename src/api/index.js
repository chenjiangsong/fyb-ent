import ajax from '@/global/ajax'

/**
 *  设置各api的root，方便给proxyTable来filter调用
 *  dev apiRoot 为'/api' prod 为空
 */

const apiRoot = process.env.API_ROOT
const root = window.pageConfig.siteUrl + apiRoot

/**
 *  封装axios get方法
 * @param {*} url
 * @param {*} params
 */
async function get (url, params) {
  return ajax.get(url, { params })
}

/**
 * 封装axios post方法
 * @param {*} url
 * @param {*} params
 */
// function post(url, params) {
//   return axios.post(url, { params })
// }

/**
 * 个人中心接口
 */
const myRoot = root + 'fyb/user'
const my = {
  getUserInfo (params) {
    return get(myRoot + '/getUserInfo', params)
  },
  getMemberInfo (params) {
    return get(myRoot + '/getMemberInfo', params)
  }
}

/**
 * wx相关接口
 */
const wxRoot = window.pageConfig.siteUrl
const wx = {
  getSign (params) {
    return get(wxRoot + 'main/getSign', params)
  }
}
export {
  my,
  wx
}
