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
    this._resetLogData()
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

  _send () {
    const log = this
    jsonp(logUrl + 'track/user/web.do', {
      params: log._logData
    })
  }
}

log.init(pageConfig)

export default log
