/**
 * 1.类型检测与转换
 */

/**
 * 『null』 严格检测
 */
export function isNull (value) {
  return value === null
}

/**
 * 『undefined』 严格检测
 */
export function isUndefined (value) {
  return value === undefined
}

/**
 * 『未定义』检测
 */
export function isUndef (value) {
  return value === null || value === undefined
}

/**
 * 『已定义』 严格检测
 */
export function isDef (value) {
  return value !== null && value !== undefined
}
/**
 * 『true』 严格检测
 */
export function isTrue (value) {
  return value === true
}
/**
 * 『false』 严格检测
 */
export function isFalse (value) {
  return value === false
}

/**
 * 『数字或字符串』严格检测
 */
export function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * 『非空对象』 检测
 */
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

const _toString = Object.prototype.toString
/**
 * object 严格检测
 */
export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

/**
 * regExp检测
 */
export function isRegExp (RegExp) {
  return _toString.call(RegExp) === '[object RegExp]'
}

/**
 * 转换字符串
 */
export function toString (value) {
  return value == null
  ? ''
  : typeof value === 'object'
    ? JSON.stringify(value)
    : String(value)
}

/**
 * 转换数字
 */
export function toNumber (value) {
  const n = parseFloat(value)
  return isNaN(n) ? value : n
}

/**
 * 2. 数组类操作
 */

/**
 * 原数组中移出某元素
 */
export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * 去重
 */
export function unique (arr) {
  if (typeof Set !== 'undefined') {
    return [...new Set(arr)]
  }
}

/**
 * uuid
 */
export function getuuid () {
  return Math.random().toString(36).substring(3, 8)
}

/**
 *  最慢 Promise
 */
export function promiseSlow (iterable) {
  return new Promise((resolve, reject) => {
    const len = iterable.length
    let count = 0
    console.log(len)
    iterable.forEach((promise) => {
      promise.then((v) => {
        console.log('count:', count)
        count++
        if (count === len) {
          console.log('resolve')
          resolve()
        }
      }, () => {
        reject()
      })
    })
  })
}

/**
 * request collector
 */

export class Collector {
  constructor () {
    this.list = []
    this.plist = []
  }

  collect (id) {
    const p = new Promise((resolve, reject) => {
      this.list[id] = { resolve, reject }
    })

    this.plist.push(p)
    return p
  }

  reset () {
    this.list = []
    this.plist = []
  }
}
