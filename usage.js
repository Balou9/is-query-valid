var fs = require('fs')
var isQueryValid = require('./index.js')
var sample = require('./lib/sample.js')

isQueryValid(sample.bracketsMulti, (err, data) => {
  if (err) throw err
  console.log(data)
})

fs.readFile('./lib/b2.txt', (err, data) => {
  if (err) throw err
  isQueryValid(data, (err, query) => {
    if (err) throw err
    console.log(query)
  })
})
