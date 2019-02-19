# is-query-valid

[![build status](http://img.shields.io/travis/Balou9/is-query-valid.svg?style=flat)](http://travis-ci.org/Balou9/is-query-valid) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/is-query-valid?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/is-query-valid)

***

Performs query validation on field/variable list formatting.  
Validation includes brackets and double quotes

***

## Get it

```
npm install --save is-query-valid
```
***

## Usage
```js
var isQueryValid = require('is-query-valid')
var fs = require('fs')

fs.readFile('./lib/b2.txt', (err, isTrue) => {
  if (err) throw err
  console.log('Query validation is ' + data)
})

```

## API
### `isQueryValid(str, cb)`   

str: string  
cb: error first callback

Returns true if input string contains brackets or double quoted queries

## License

[MIT](./license.md)
