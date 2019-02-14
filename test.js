var fs = require('fs')
var tape = require('tape')
var isQueryValid = require('./index.js')
var bracketsFile = './brackets.txt'
var doubleQuotedFile = './dq.txt'
var someFile = './some.txt'

tape('isQueryValid - brackets query - true', function (t) {
  fs.readFile(bracketsFile, function (err, data) {
    if (err) t.end(err)
    t.true(isQueryValid(data))
    t.end()
  })
})

tape('isQueryValid - double quoted query - true', function (t) {
  fs.readFile(doubleQuotedFile, function (err, data) {
    if (err) t.end(err)
    t.true(isQueryValid(data))
    t.end()
  })
})

tape.only('isQueryValid - list - false', function (t) {
  fs.readFile(someFile, function (err, data) {
    if (err) t.end(err)
    t.false(isQueryValid(data))
    t.end()
  })
})
