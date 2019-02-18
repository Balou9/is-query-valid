module.exports = isQueryValid = (str, cb) => {
  if (typeof str != 'string') throw new TypeError('first argument is a string')
  cb(null, /(^(\[\w*\]\n){1}(\,\[\w*\]\n)*$)|(^(\"\w*\"\n){1}(\,\"\w*\"\n)*$)/.test(str))
}
