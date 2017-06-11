/**
 * EventEmit
 */

import EventEmitter from 'events'
import log from './log'

const events = new EventEmitter()

events.on('log', (options) => {
  switch (options.type) {
    case 'basic':
      log._send()
      break
    default:
      log.clickTrigger(options)
      break
  }
})

export default events
