/**
 * proxy转发区分，线上环境api接口不需要API_ROOT
 */

module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '""'
}
