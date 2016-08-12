const DuckCount = (...arguments) => arguments.reduce((count, object) =>
  Object.prototype.hasOwnProperty.call(object, 'quack')
    ? count + 1
    : count
, 0)

module.exports = DuckCount
