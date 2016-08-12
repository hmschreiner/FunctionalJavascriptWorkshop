'use strict'

const Map = (array, cb) => {

  return array.reduce((prev, current) => {

    prev.push(cb.call(null, current))
    return prev
  }, [])
}

module.exports = Map
