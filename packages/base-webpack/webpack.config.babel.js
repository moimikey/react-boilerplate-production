module.exports = function(target = {
  entry: {},
  module: {},
  output: {},
  plugins: {},
  resolve: {},
}) {
  return {
    entry: {...target.entry},
    module: {...target.module},
    output: {...target.output},
    plugins: [
      new (require('webpack/lib/LoaderOptionsPlugin'))({
        // ...
      }),
      ...target.plugins
    ],
    resolve: {...target.resolve}
  }
}
