import ajax from '@/global/ajax'

import {
  myRoot
} from './urls'

/**
 *  封装axios get方法
 * @param {*} url
 * @param {*} params
 */
function get (url, params) {
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

const my = {
  getUserInfo (params) {
    return get(myRoot + '/getUserInfo', params)
  },
  getMemberInfo (params) {
    return get(myRoot + '/getMemberInfo', params)
  }
}

export {
  my
}
