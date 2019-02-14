function isQueryValid (str) {
  return /[^\".*\"$]||^\[.*\]$/s.test(str)
}

module.exports = isQueryValid
