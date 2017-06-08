import { wx as API_WX } from 'api'
/**
 * 微信jssdk 注册url
 * @param {*} url
 */
export async function registerUrl (url) {
  const params = {
    currentUrl: url,
    app: 'fyb'
  }
  const res = await API_WX.getSign(params)
  if (res && res.status === 1) {
    const config = Object.assign({
      debug: true,
      jsApiList: [
        'hideMenuItems',
        'onMenuShareAppMessage',
        'chooseImage',
        'uploadImage',
        'previewImage',
        'onMenuShareTimeline',
        'getLocation',
        'scanQRCode'
      ]
    }, res.data)
    console.log(config)
    wx.config(config)
  }
}

/**
 *  修改微信title
 * @param {*} title
 */
export function modifyTitle (title) {
  if (navigator.userAgent.indexOf('Android') === -1) {
    const iframe = document.createElement('iframe')
    const body = document.body

    iframe.setAttribute('src', '/isLive')
    iframe.style.position = 'absolute'
    iframe.style.top = '-100000px'

    iframe.addEventListener('load', function load () {
      setTimeout(() => {
        iframe.removeEventListener('load', load)
        body.removeChild(iframe)
      })
    })

    body.appendChild(iframe)
  }
  document.title = title
}
