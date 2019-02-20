var tape = require('tape')
var isQueryValid = require('./index.js')
var sample = require('./lib/sample.js')

tape('isQueryValid', (t) => {
  t.true(isQueryValid(sample.brackets) === true, 'brackets query is valid')
  t.true(isQueryValid(sample.brackets2) === true, 'brackets query length greater than one is valid')
  t.true(isQueryValid(sample.doubleQuote) === true, 'double quote query is valid')
  t.true(isQueryValid(sample.doubleQuote2) === true, 'double quote query length greater than one is valid')
  t.true(isQueryValid(sample.some) === false, 'simple text is not valid')
  t.true(isQueryValid(sample.someMix) === false, 'mixed query is not valid')
  t.end()
})
