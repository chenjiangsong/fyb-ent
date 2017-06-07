import axios from 'axios'

axios.defaults.timeout = 20000

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
  return res.data
}, function (error) {
  return Promise.reject(error)
})

export default axios
