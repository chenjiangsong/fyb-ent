/**
 *  埋点
 */
/*
test: dataCollect=http://collect.iwjwtest.com/dataCollect/
beta: dataCollect=http://10.168.6.201:8112/dataCollect/
pro: dataCollect=http://10.157.128.179/dataCollect/
 */
// http://userappbeta.iwjw.com:8112/dataCollect/

import jsonp from 'jsonp'

const logUrl = pageConfig.datacollectUrl

const log = {
  _options: {},
  _logData: {},

  init (options) {
    this._options = options || {}
    this._reset()
  },

  clickTrigger (options) {
    this._reset()
    this._logData = Object.assign(this._logData, options, {
      date: new Date()
    })
    this._send()
  },

  _reset () {
    this._logData = {
      usid: '',
      url: encodeURI(location.href),
      ref: encodeURI(document.referrer),
      pf: 'fyb_weixin'
    }
  },

  _convertUrl () {
    const log = this
    let url = logUrl + 'track/user/web.do'
    Object.keys(log._logData).forEach((key, index) => {
      const value = log._logData[key]
      let param = `${key}=${value}`
      if (index === 0) {
        param = `?${param}`
      } else {
        param = `&${param}`
      }
      url = url + param
    })
    return url
  },

  _send () {
    const url = this._convertUrl()
    jsonp(url)
  }
}

log.init()

export default log
