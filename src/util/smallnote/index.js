/**
* @Author: chenjiangsong
* @Date:   2016-04-11 11:04:00
* @Email:  chenjiangsong.sh@superjia.com
* @Last modified by:   chenjiangsong
* @Last modified time: 2016-04-11 11:04:11
*/
import './style.css'
import { isPrimitive } from 'util'
import { createEl, setClass, addClass, width, on, remove } from 'util/dom'
import { isMobile } from 'util/browser'

class SmallNote {
  constructor (options) {
    console.log(options)
    // const ctx = this
    this.timer = null
    this.options = Object.assign({
      top: 0,
      time: 1000,
      pattern: null,
      text: '加载中...',
      hold: false,
      remove: false,
      mask: false,
      callback: ''
    }, options)

    const element = this.element = this._createElement()

    if (SmallNote.present) {
      clearTimeout(this.timer)
      SmallNote.present._remove()
    }

    if (!this.options.remove) {
      SmallNote.present = this
      document.body.appendChild(element)
      const marginLeft = -width(element) / 2 + 'px'
      element.style.marginLeft = marginLeft
      if (!this.options.hold) {
        this._destroy()
      }
    }
  }

  _createElement () {
    const self = this
    const dom = createEl('div')
    setClass(dom, 'mod-smallnote')
    if (isMobile) {
      addClass(dom, 'smallnote-mobile')
    }
    // 设置展示文字
    dom.innerHTML = this.options.text

    // 绑定click事件
    on(dom, 'click', function () {
      self._remove()
    })
    return dom
  }

  _addMask () {
    const dom = createEl('div')
    setClass(dom, 'mask')
    dom.id = 'mask'
    return dom
  }

  _destroy () {
    const self = this
    self.timer = setTimeout(() => {
      self._remove()
      self.options.callback && self.options.callback()
    }, self.options.time)
  }

  _remove () {
    remove(this.element)
  }

}

export function smallnote () {
  let o
  const args = [...arguments]
  if (isPrimitive(args[0])) {
    o = {
      text: args[0]
    }
  } else {
    o = args[0]
  }
  return new SmallNote(o)
}
