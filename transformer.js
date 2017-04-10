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




// function transform(s)
