var fs = require('fs')
var tape = require('tape')
var isQueryValid = require('./index.js')
var bracketsFile = './brackets.txt'
var doubleQuotedFile = './dq.txt'
var someFile = './some.txt'

tape('isQueryValid - str - true', function (t) {
  t.true(isQueryValid('[Mikey]'), 'single brackets true')
  t.true(isQueryValid(['[Mikey]', ',[Rondo]']), 'multi brackets true')
  t.true(isQueryValid('"Mikey"'), 'single double quotes true')
  t.true(isQueryValid(['"Mikey"', ',"Rondo"']), 'multi double quotes true')
  t.end()
})

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
    data = data.toString()
//  console.log(JSON.parse(data).data)
    console.log(data)
    t.true(isQueryValid(data))
    t.end()
  })
})

tape('isQueryValid - list - false', function (t) {
  fs.readFile(someFile, function (err, data) {
    if (err) t.end(err)
    console.log(data)
    t.false(isQueryValid(data), 'check true')
    t.end()
  })
})
