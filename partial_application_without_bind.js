const Logger = (namespace) => (...arguments) => console.log.apply(console, [namespace].concat(arguments))

module.exports = Logger
