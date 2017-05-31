import axios from 'axios'
import store from '@/store'
import { getuuid, promiseSlow, Collector } from 'util'

const { assist } = store.state
const collector = new Collector()
console.log(collector)
let timer = null

axios.interceptors.request.use(function (config) {
  if (assist.renderStatus) {
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
  console.log(collector.list[uuid])
  collector.list[uuid].resolve()
  if (!timer) {
    timer = setTimeout(function () {
      promiseSlow(collector.plist).then(() => {
        store.commit('updateRenderStatus', { isRendering: false })
      })
    })
  }
  return res.data
}, function (error) {
  return Promise.reject(error)
})

// const resCollect = {
//   timer: null,
//   list: [],
//   promiseList: [],
//   collect (uuid) {
//     const self = this
//     const p = new Promise((resolve, reject) => {
//       self.list[uuid] = {
//         resolve,
//         reject
//       }
//     })
//     self.promiseList.push(p)
//   }
// }

// function slow (iterable) {
//   return new Promise((resolve, reject) => {
//     const len = iterable.length
//     let count = 0

//     iterable.forEach((promise) => {
//       promise.then((v) => {
//         count++
//         if (count === len) {
//           resolve()
//         }
//       })
//     })
//   })
// }

export default axios
