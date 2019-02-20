var isQueryValid = require('./index.js')
var sample = require('./lib/sample.js')

console.log(sample.brackets, isQueryValid(sample.brackets))
console.log(sample.brackets2, isQueryValid(sample.brackets2))
console.log(sample.doubleQuote, isQueryValid(sample.doubleQuote))
console.log(sample.doubleQuote2, isQueryValid(sample.doubleQuote2))
console.log(sample.someMix, isQueryValid(sample.someMix))
