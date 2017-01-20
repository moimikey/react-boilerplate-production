module.exports = require('base-webpack')({
  entry: {
    app: [
      './src'
    ]
  },
  plugins: [
    new (require('webpack/lib/LoaderOptionsPlugin'))({
      options: {
        context: require('path').resolve(__dirname, 'packages/web'),
        minimize: true,
        debug: true,
        postcss: {
          debug: true,
          plugins: [
            require('postcss-cssnext')()
          ]
        }
      }
    }),
    new (require('html-webpack-plugin'))({
      appMountId: 'root',
      baseHref: '/',
      hash: true,
      inject: false,
      meta: {
        title: 'App',
        description: 'Something something darkside.'
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      template: './index.ejs',
      unsupportedBrowser: true
    }),
    new (require('extract-text-webpack-plugin'))({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),
    // new (require('webpack/lib/optimize/UglifyJsPlugin'))({
    //   sourceMap: true,
    //   compress: {
    //     unused: true,
    //     dead_code: true,
    //     warnings: true,
    //     screw_ie8: true
    //   }
    // })
  ],
  resolve: {
    extensions: [
      '.js',
      '.ejs',
      '.css',
      '.json'
    ]
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: require('extract-text-webpack-plugin').extract({
        loader: [
          'css-loader?modules&importLoaders=1&sourceMap',
          'postcss-loader?sourceMap'
        ]
      })
    }, {
      test: /\.ejs$/,
      use: ['ejs-loader']
    }]
  }
})
