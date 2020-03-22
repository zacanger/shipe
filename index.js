#!/usr/bin/env node

const handle = (handlers) => {
  process.stdin.resume()
  process.stdin.on('data', (d) => {
    process.stdout.write(handlers(d.toString()))
  })

  process.stdout.on('error', function errorHandler(err) {
    if (err.code === 'EPIPE') {
      // eslint-disable-next-line no-process-exit
      return process.exit()
    }
    if (process.stdout.listeners('error').length <= 1) {
      process.stdout.removeAllListeners()
      process.stdout.emit('error', err)
      process.stdout.on('error', errorHandler)
    }
  })
}

if (!module.parent) {
  // eslint-disable-next-line no-eval
  handle(eval(process.argv[2]) || ((a) => a))
}
