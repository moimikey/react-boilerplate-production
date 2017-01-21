module.exports = function(target) {
  return require('merge-deep')({
    entry: {},
    plugins: [],
    resolve: {},
    module: {}
  }, target)
}
