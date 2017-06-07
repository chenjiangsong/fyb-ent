const rp = require('request-promise')
// const config = require('./config')

const util = {}

util.getToken = function* () {
  yield rp('http://localhost:8081/fybWeixinEnt/aaa')
}

util.getTicket = function () {

}

util.getSignature = function () {

}

util.getTimeStamp = function () {

}

util.createNoncestr = function () {

}



module.exports = util