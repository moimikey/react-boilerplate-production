module.exports = require('base-webpack')({
  entry: {
    app: [
      './src'
    ]
  },
  plugins: [
    new (require('webpack/lib/LoaderOptionsPlugin'))({
      options: {
        postcss: {
          plugins: [
            require('postcss-cssnext')({
              // customProperties: {
                // variables: require('./theme')
              // }
            })
          ]
        },
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
    new (require('webpack/lib/optimize/UglifyJsPlugin'))({
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: true,
        screw_ie8: true
      }
    }),
    new (require('extract-text-webpack-plugin'))({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
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
        ]
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: require('extract-text-webpack-plugin').extract({
          loader: [
            'css-loader?modules&importLoaders=1',
            'postcss-loader?sourceMap=inline'
          ]
        })
      }, {
        test: /\.ejs$/,
        use: ['ejs-loader'],
        exclude: /node_modules/
      }
    ]
  }
})
