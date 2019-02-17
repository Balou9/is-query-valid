function isQueryValid3 (str) {
  return /^\[\w*\]$|(^\[\w*\]){1}(\r\n\[\w*\]$){0,}|^\"\w*\"$|(^\"\w*\"){1}(\r\n\"\w*\"$){0,}/.test(str)
}

function isQueryValid2 (str) {
  return /^[\[\"]\w*[\]\"]$|(^[\[\"]\w*[\]\"]){1}(\r\n[\[\"]\w*[\]\"]$){0,}/.test(str)
}

function isQueryValid (str, cb) {
  cb(null, /^(\[\w*\])$/m.exec(str))
}

module.exports = isQueryValid
