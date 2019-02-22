var tape = require('tape')
var isQueryValid = require('./index.js')
var sample = require('./lib/sample.js')

tape('isQueryValid - brackets', (t) => {
  isQueryValid(sample.brackets, (err, isTrue) => {
    if (err) t.end(err)
    t.true(isTrue === true, 'brackets query is valid')
  })
  t.end()
})

tape('isQueryValid - brackets2', (t) => {
  isQueryValid(sample.brackets2, (err, isTrue) => {
    if (err) t.end(err)
    t.true(isTrue === true, 'query length greater than one is valid')
  })
  t.end()
})

tape('isQueryValid - doubleQuote', (t) => {
  isQueryValid(sample.doubleQuote, (err, isTrue) => {
    if (err) t.end(err)
    t.true(isTrue === true, 'double quote query is valid')
  })
  t.end()
})

tape('isQueryValid - doubleQuote2', (t) => {
  isQueryValid(sample.doubleQuote2, (err, isTrue) => {
    if (err) t.end(err)
    t.true(isTrue === true, 'double quote query length greater than one is valid')
  })
  t.end()
})

tape('isQueryValid - some', (t) => {
  isQueryValid(sample.some, (err, isFalse) => {
    if (err) t.end(err)
    t.true(isFalse === false, 'simple text is not valid')
  })
  t.end()
})


tape('isQueryValid - someMix', (t) => {
  isQueryValid(sample.someMix, (err, isFalse) => {
    if (err) t.end(err)
    t.true(isFalse === false, 'mixed query is not valid')
  })
  t.end()
})
