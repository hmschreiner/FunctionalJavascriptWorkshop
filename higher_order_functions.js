module.exports = (operation, num) => {
  
  while (num > 0) {
    operation()
    num--
  }
}
