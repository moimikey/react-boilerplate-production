export default function(target = {
  entry: {},
  plugins: {},
  output: {},
  resolve: {},
  module: {}
}) {
  return {
    entry: {...target.entry},
    plugins: [
      new (require('webpack/lib/LoaderOptionsPlugin'))({
        options: {}
      }),
      ...target.plugins
    ],
    output: {...target.output},
    resolve: {...target.resolve},
    module: {...target.module}
  }
}
