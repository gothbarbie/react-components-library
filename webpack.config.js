var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var TransferWebpackPlugin = require('transfer-webpack-plugin')
var LiveReloadPlugin

var DEV = (process.env.NODE_ENV === 'development')

if (DEV) LiveReloadPlugin = require('webpack-livereload-plugin')

var plugins = [
  new TransferWebpackPlugin([
    { from: 'assets', to: './' }
  ], path.join(__dirname, 'src'))
]
if (DEV) {
  plugins = plugins.concat(
    [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new LiveReloadPlugin()
    ]
  )
} else {
  plugins = plugins.concat(
    [
      new ExtractTextPlugin('style.css', { allChunks: true }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
    ]
  )
}

module.exports = {
  devtool: DEV ? 'eval' : 'source-map',
  entry: DEV ?
  [
    'webpack-hot-middleware/client',
    './src/index'
  ]
  :
  [ './src/index' ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: plugins,
  postcss: [
    require('postcss-import')({
      from: 'src'
    }),
    require('postcss-css-variables'),
    require('postcss-each'),
    require('postcss-for'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({
      zindex: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: DEV ? null : ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
        loaders: DEV ? [
          'style?singleton',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ] : []
      },
      {
       test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
