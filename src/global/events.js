/**
 * EventEmit
 */

import EventEmitter from 'events'
import log from './log'

const eventEmitter = new EventEmitter()

eventEmitter.on('log', (options) => {
  switch (options.type) {
    case 'basic':
      log._send()
      break
    default:
      log.clickTrigger(options)
      break
  }
})

eventEmitter.emit('log', {
  type: 'basic'
})

export default eventEmitter
