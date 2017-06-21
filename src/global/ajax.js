axios.defaults.timeout = 20000

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
  return res.data
}, function (error) {
  return Promise.resolve({
    status: error.response.status,
    msg: '服务器开小差了，请稍候再试',
    errorMsg: error.message
  })
})

export default axios
