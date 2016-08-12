'use strict'

const CurryN = (originalFunction, n) => {

  if ( typeof n !== 'number' ) n = originalFunction.length

  const newFunction = (prevFunction) => {

    return (arg) => {
      let args = prevFunction.concat(arg)
      if ( args.length < n ) return newFunction(args)
      return originalFunction.apply(this, args)
    }
  }

  return newFunction([])
}

module.exports = CurryN
