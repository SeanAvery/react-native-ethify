const blacklist = require('react-native/packager/blacklist')
console.log('rn config file is loaded')
module.exports = {
  // get projectRoots() {
  //   return __dirname;
  // }

  // getBlacklistRE() {
  //   const additionalBlacklist
  // }
  getTransformModulePath() {
    return require.resolve('./transformer');
  },
}
