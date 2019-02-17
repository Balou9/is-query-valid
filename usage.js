var isQueryValid = require('./index.js')
var sample = require('./sample.js')

isQueryValid(sample.brackets, (err, data) => {
  if (err) throw err
  console.log(data)
})
