import axios from 'axios'

import {
  myUrls
} from './urls'

/**
 *  封装axios get方法
 * @param {*} url
 * @param {*} params
 */
function get (url, params) {
  return axios.get(url, { params })
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
    return get(myUrls.userInfo, params)
  }
}

export {
  my
}
