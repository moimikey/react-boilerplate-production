module.exports = function(target = {
  entry: {},
  module: {},
  output: {},
  plugins: {},
  resolve: {},
}) {
  return {
    entry: {...target.entry},
    module: {
      ...target.module,
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['eslint-loader']
      }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'webpack-module-hot-accept'
      ]}, ...target.module.rules]
    },
    output: {...target.output},
    plugins: [
      new (require('webpack/lib/NamedModulesPlugin'))(),
      new (require('webpack/lib/LoaderOptionsPlugin'))({
        devtool: 'source-map'
      }),
      ...target.plugins
    ],
    resolve: {...target.resolve}
  }
}
