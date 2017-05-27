/**
 * proxy转发区分，dev环境api接口需要加上'/api'
 */

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"api/"'
})
