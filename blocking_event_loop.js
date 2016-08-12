'use strict'

const Repeat = (operation, num) => {

  setTimeout(() => {
    if (num <= 0) return
    operation()
    Repeat(operation, --num)
  })
}

module.exports = Repeat
