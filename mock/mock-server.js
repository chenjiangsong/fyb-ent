const express = require('express')
const app = express()
const Mock = require('mockjs')
const util = require('./util')

app.get('/fybWeixinEnt/main/getSign', async function (req, res) {
  const params = {
    noncestr: util.createNoncestr(),
    timestamp: util.getTimeStamp(),
    url: req.query.url
  }
  const a = await util.getToken()
  console.log(a)
  // console.log(11)
  util.getToken()
  res.send({
    url: req.query.url
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