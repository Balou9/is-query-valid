var isQueryValid = require('./index.js')
var sample = require('./lib/sample.js')

isQueryValid(sample.brackets, (err, isTrue) => {
  if (err) throw err
  console.log('Query Validator returns', isTrue)
})

isQueryValid(sample.brackets2, (err, isTrue) => {
  if (err) throw err
  console.log('Query Validator returns', isTrue)
})

isQueryValid(sample.doubleQuote, (err, isTrue) => {
  if (err) throw err
  console.log('Query Validator returns', isTrue)
})

isQueryValid(sample.doubleQuote2, (err, isTrue) => {
  if (err) throw err
  console.log('Query Validator returns', isTrue)
})

isQueryValid(sample.someMix, (err, isFalse) => {
  if (err) throw err
  console.log('Query Validator returns', isFalse)
})
