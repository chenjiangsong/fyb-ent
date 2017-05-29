var express = require('express')

var mockServer = express()

var Mock = require('mockjs')

mockServer.get('/fybWeixinEnt/*', (req, res) => {
  var data = Mock.mock({
    name: '@cname',
    'age|1-10': 1,
    date: function () {
      if (this.age > 5) {
        console.log(this.age)
        return 1
      } else{
        return 2
      }
    }
  })
  res.send(data)
})

mockServer.listen(8081)