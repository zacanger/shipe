#!/usr/bin/env node

const id = (a) => a
const script = eval(process.argv[2]) || id

const handle = (handlers) => {
  process.stdin.resume()
  process.stdin.on('data', (d) => {
    process.stdout.write(handlers(d.toString()))
    process.stdout.write('\n')
  })
  process.stdout.on('error', function epipeFilter(err) {
    if (err.code === 'EPIPE') return process.exit()
    if (process.stdout.listeners('error').length <= 1) {
      process.stdout.removeAllListeners()
      process.stdout.emit('error', err)
      process.stdout.on('error', epipeFilter)
    }
  })
}

const main = () => {
  handle(script)
}

if (!module.parent) main()
