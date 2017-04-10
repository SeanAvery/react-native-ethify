const babel = require('babel-core')
console.log('hit custom transformer')
const babelRC = {
  presets: [require('babel-preset-react-native')]
}

// function transform(s)
