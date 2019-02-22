# is-query-valid

[![build status](http://img.shields.io/travis/Balou9/is-query-valid.svg?style=flat)](http://travis-ci.org/Balou9/is-query-valid) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/is-query-valid?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/is-query-valid)

***

Performs query validation on field/variable list.  
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
var arr = ['[absolutely]', ',[everybody]', ',[is]', ',[free]']

isQueryValid(arr, (err, isTrue) => {
  if (err) throw err
  console.log('Query Validator returns', isTrue)
})
// Query Validator returns true
```

## API
### `isQueryValid(arr)`   

`arr` string array

Returns `true` if each matches query formatting rule and `false` if not  

**Rule**: Any word is enclosed by double quotation marks or opening and closing brackets.

## License

[MIT](./license.md)
