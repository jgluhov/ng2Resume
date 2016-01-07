/**
 * Created by jgluhov on 07/01/16.
 */
var CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
  entry: './src/ts/bootstrap',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ])
  ],
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  }
};