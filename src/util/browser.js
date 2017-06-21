/**
 * 浏览器相关方法
 */
export const inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]'

const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && UA.indexOf('trident') > 0
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)

export function isMobile () {
  var phoneReg = '\\b(ip(hone|od)|android|opera m(ob|in)i' + '|windows (phone|ce)|blackberry' + '|s(ymbian|eries60|amsung)|p(laybook|alm|rofile/midp' + '|laystation portable)|nokia|fennec|htc[-_]' + '|mobile|up.browser|[1-4][0-9]{2}x[1-4][0-9]{2})\\b'

  if (new RegExp(phoneReg, 'igm').exec(UA)) {
    return true
  }
  return false
}

export function isWeixin () {
  return UA.match(/MicroMessenger/i) === 'micromessenger'
}

export function isIPhone () {
  const phoneReg = '\\b(ip(hone|od))\\b'

  if (new RegExp(phoneReg, 'igm').exec(UA)) {
    return true
  }
  return false
}
