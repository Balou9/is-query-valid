var fs = require('fs')
var tape = require('tape')
var isQueryValid = require('./index.js')
var sample = require('./lib/sample.js')

tape('isQueryValid - pass pt1 - str brackets', (t) => {
  isQueryValid(sample.brackets, (err, data) => {
    if (err) t.end(err)
    t.true(data, 'is true')
    t.end()
  })
})

tape('isQueryValid - pass pt2 - str brackets more than one line', (t) => {
  isQueryValid(sample.bracketsMulti, (err, data) => {
    if (err) t.end(err)
    t.true(data, 'single brackets true')
    t.end()
  })
})

tape('isQueryValid - pass pt3 - file brackets', (t) => {
  fs.readFile('./lib/b.txt', (err, data) => {
    if (err) t.end(err)
    isQueryValid(data, (err, query) => {
      if (err) t.end(err)
      t.true(query, 'is true')
      t.end()
    })
  })
})

tape('isQueryValid - pass pt4 - file brackets more than one line', (t) => {
  fs.readFile('./lib/b2.txt', (err, data) => {
    if (err) t.end(err)
    isQueryValid(data, (err, query) => {
      if (err) t.end(err)
      t.true(query, 'is true')
      t.end()
    })
  })
})

tape('isQueryValid - pass pt5 - str double quotes', (t) => {
  isQueryValid(sample.doubleQuote, (err, data) => {
    if (err) t.end(err)
    t.true(data, 'is true')
    t.end()
  })
})

tape('isQueryValid - pass pt6 - str double quotes more than one line', (t) => {
  isQueryValid(sample.doubleQuoteMulti, (err, data) => {
    if (err) t.end(err)
    t.true(data, 'single brackets true')
    t.end()
  })
})

tape('isQueryValid - pass pt7 - file double quotes', (t) => {
  fs.readFile('./lib/dq.txt', (err, data) => {
    if (err) t.end(err)
    isQueryValid(data, (err, query) => {
      if (err) t.end(err)
      t.true(query, 'is true')
      t.end()
    })
  })
})

tape('isQueryValid - pass pt8 - file double quotes more than one line', (t) => {
  fs.readFile('./lib/dq2.txt', (err, data) => {
    if (err) t.end(err)
    isQueryValid(data, (err, query) => {
      if (err) t.end(err)
      t.true(query, 'is true')
      t.end()
    })
  })
})

tape('isQueryValid - fail pt1 - str some text', (t) => {
  isQueryValid(sample.some, (err, data) => {
    if (err) t.end(err)
    t.false(data, 'brackets not valid')
    t.end()
  })
})

tape('isQueryValid - fail pt2 - file some text', (t) => {
  fs.readFile('./lib/some.txt', (err, data) => {
    if (err) t.end(err)
    isQueryValid(data, (err, query) => {
      if (err) t.end(err)
      t.false(query, 'not valid')
      t.end()
    })
  })
})
