function isQueryValid (str) {
  return /^\[\w*\]$|^\"\w*\"$/.test(str)
}

module.exports = isQueryValid
