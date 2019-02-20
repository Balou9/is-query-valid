module.exports = isQueryValid = (arr) => {
  var isValid = (cur) => cur === true
  return arr.map(each => /^(\,)?[\[\"]\w*[\]\"]$/.test(each)).every(isValid)
}
