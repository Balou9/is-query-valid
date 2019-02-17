var fs = require('fs')
var tape = require('tape')
var isQueryValid = require('./index.js')
var sample = require('./sample.js')

// add test files to list - false to verify
tape('isQueryValid - str - true', function (t) {
  isQueryValid(sample.brackets, (err, data) => {
    if (err) t.end(err)
    console.log(data)
    t.true(data, 'single brackets true')
    t.end()
  })
})

tape('isQueryValid - str multiline - true', function (t) {
  isQueryValid(sample.bracketsMulti, (err, data) => {
    if (err) t.end(err)
    console.log(data)
    t.true(data, 'single brackets true')
    t.end()
  })
})
//
// tape('isQueryValid - brackets query - true', function (t) {
//   fs.readFile(bracketsFile, function (err, data) {
//     if (err) t.end(err)
//     t.true(isQueryValid(data))
//     t.end()
//   })
// })
//
// tape('isQueryValid - double quoted query - true', function (t) {
//   fs.readFile(doubleQuotedFile, function (err, data) {
//     if (err) t.end(err)
//     data = data.toString()
//     t.true(isQueryValid(data))
//     t.end()
//   })
// })
//
// tape('isQueryValid - list - false', function (t) {
//   fs.readFile(someFile, function (err, data) {
//     if (err) t.end(err)
//     t.false(isQueryValid(data), 'check true')
//     t.end()
//   })
// })
//
