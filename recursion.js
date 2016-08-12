const Recursion = (array, reducer, initialValue) => {

  let currentValue = initialValue
  array.map((item, index) => {
    currentValue = reducer(currentValue, array[index])
  })

  return currentValue
}

module.exports = Recursion
