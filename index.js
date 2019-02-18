module.exports = isQueryValid = (str, cb) => {
  cb(null, /(^(\[\w*\]\n){1}(\,\[\w*\]\n)*$)|(^(\"\w*\"\n){1}(\,\"\w*\"\n)*$)/.test(str))
}
