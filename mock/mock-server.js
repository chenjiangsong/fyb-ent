const express = require('express')
const app = express()
const Mock = require('mockjs')
const util = require('./util')
const co = require('co')
const config = require('./config')

require('./schedule')

app.get('/fybWeixinEnt/main/getSign', function (req, res) {
  co(function* () {
    const noncestr = util.createNoncestr()
    const timestamp = util.getTimeStamp()
    
    const params = {
      noncestr: noncestr,
      timestamp: timestamp,
      url: req.query.currentUrl
    }

    const signature = yield util.getSignature(params)

    res.send({
      status: 1,
      msg: 'ok',
      data: {
        appId: config.appid,
        timestamp: timestamp,
        nonceStr: noncestr,
        signature: signature
      }
    })

  })


})

app.get('/fybWeixinEnt/*', (req, res) => {
  const time = Math.floor(Math.random() * 1000)
  setTimeout(function() {
    res.send({
      url: req.url
    })
  }, time)
})

const mockServer = app.listen(8081)

// module.exports = mockServer