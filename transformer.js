const babel = require('babel-core')
console.log('hit custom transformer')
const babelRC = {
  presets: [require('babel-preset-react-native')]
}

function transform(src, filename, options) {
  const babelClonfig = Object.assign({}, babelRC, {
    filename,
    sourceFileName: filename,
  })
  const result = babel.transform(src, babelConfig)
  return {
    ast: result.ast,
    code: result.code,
    map: result.map,
    filename: filename
  }
}

module.exports = function(data, callback) {
  let result;
  try {
    result = transform(data.sourceCode, data.filename, data.options)
  } catch (e) {
    callback(e)
    return
  }
  callback(null, result)
}




// function transform(s)
