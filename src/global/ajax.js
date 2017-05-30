import axios from 'axios'
import store from '@/store'

const { assist } = store.state

axios.interceptors.request.use(function (config) {
  if (assist.renderStatus) {
    const uuid = Math.random().toString(36).substring(3, 8)
    config.uuid = uuid
    console.log(uuid)
    resCollect.collect(uuid)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
  const uuid = res.config.uuid
  resCollect.list[uuid].resolve()
  if (!resCollect.timer) {
    resCollect.timer = setTimeout(function () {
      slow(resCollect.promiseList).then(() => {
        store.commit('updateRenderStatus', { isRendering: false })
      })
    })
  }
  return res.data
}, function (error) {
  return Promise.reject(error)
})

const resCollect = {
  timer: null,
  list: [],
  promiseList: [],
  collect (uuid) {
    const self = this
    const p = new Promise((resolve, reject) => {
      self.list[uuid] = {
        resolve,
        reject
      }
    })
    self.promiseList.push(p)
  }
}

function slow (iterable) {
  console.log(iterable)
  return new Promise((resolve, reject) => {
    const len = iterable.length
    let count = 0

    iterable.forEach((promise) => {
      promise.then((v) => {
        count++
        if (count === len) {
          resolve()
        }
      })
    })
  })
}

export default axios
