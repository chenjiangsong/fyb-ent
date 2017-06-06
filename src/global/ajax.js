import axios from 'axios'
import store from '@/store'
import { getuuid, promiseSlow, Collector } from 'util'

const { global } = store.state
const collector = new Collector()

// let timer = null

axios.interceptors.request.use(function (config) {
  if (global.newPage) {
    // config里写入uuid
    if (!global.reqSending) {
      store.commit('updateReqSendStatus', { reqSending: true })
    }
    const uuid = getuuid()
    config.uuid = uuid
    collector.collect(uuid)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
  const uuid = res.config.uuid
  if (uuid) {
    collector.list[uuid].resolve()
    // if (!timer) {
    //   timer = setTimeout(function () {
    promiseSlow(collector.plist).then(() => {
      store.commit('updateReqSendStatus', { reqSending: false })
      collector.reset()
    })
    //     timer = null
    //   })
    // }
  }
  return res.data
}, function (error) {
  store.commit('updateReqSendStatus', { reqSending: false })
  return Promise.reject(error)
})

export default axios
