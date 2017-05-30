var express = require('express')

var mockServer = express()

var Mock = require('mockjs')

mockServer.get('/fybWeixinEnt/*', (req, res) => {
  const time = Math.floor(Math.random() * 1000)
  setTimeout(function() {
    res.send({
      url: req.url
    })
  }, time)
})

mockServer.listen(8081)