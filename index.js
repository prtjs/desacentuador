module.exports = function (str) {
  var chars = [
    'aaaaceeiooouu',
    'àáâãçéêíóôõúü'
  ].map(function (char) {
    return char += char.toUpperCase()
  })

  if (typeof str === 'string') {
    return str.replace(/./g, function (char) {
      if (chars[1].includes(char)) {
        return chars[0][chars[1].search(char)]
      }

      return char
    })
  }
}