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
        debug: true
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
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.ejs'
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      use: ['eslint-loader']
    }, {
      test: /\.ejs$/,
      use: ['ejs-loader']
    }, {
      test: /\.js$/,
      use: [
        'babel-loader',
        'webpack-module-hot-accept'
      ]
    }]
  }
})
