const request = require('request')
const config = require('./config')

const util = {}

util.getToken = function () {
  request.get('http://fe.iwjw.com:8888/api/fete_api/2BmE9Z/5kbe8B/mock/fybWeixinEnt/fyb/house/getUserRemark').on('response', function (res) {
    return res
  })
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