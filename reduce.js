module.exports = words => words.reduce((map, word) => {
   map[word] = (map[word] || 0) + 1
   return map
}, {})
