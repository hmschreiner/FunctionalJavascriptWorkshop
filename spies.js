'use strict'

const Spy = ( target, method ) => {

  let result = {
        count: 0
      },
      originalFunction = target[ method ];

  target[ method ] = () => {
    result.count++
    return originalFunction.apply(target, arguments)
  }

  return result
}

module.exports = Spy
