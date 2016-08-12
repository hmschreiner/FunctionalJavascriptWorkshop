const Logger = (namespace) => () => console.log(console, namespace).bind(console)

module.exports = Logger
