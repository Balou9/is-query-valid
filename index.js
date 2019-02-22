module.exports = isQueryValid = (arr, cb) => {
  var isValid = (cur) => cur === true
  cb(null, arr.map(each => /^(\,)?[\[\"]\w*[\]\"]$/.test(each)).every(isValid))
}
