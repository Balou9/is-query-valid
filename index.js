function isQueryValid (str) {
  return /^\[\w*\]$|(^\[\w*\]){1}(\r\n\[\w*\]$){0,}|^\"\w*\"$|(^\"\w*\"){1}(\r\n\"\w*\"$){0,}/.test(str)
}

module.exports = isQueryValid
