'use strict'

const Repeat = (operation, num) => {

  if (num > 0) {
    return () => {
      operation()
      return Repeat(operation, --num)
    }
  }
}

const Trampoline = (fn) => {
  let results = []
  while (typeof fn === 'function') {
    results.push(fn = fn())
  }

  return results
}

module.exports = (fn, num) => {

  let initFn = () => Repeat(fn, num)
  return Trampoline(initFn)
}
