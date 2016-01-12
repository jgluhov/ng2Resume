/**
 * Created by jgluhov on 07/01/16.
 */
var webpack = require('webpack');
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var koutoSwiss = require( "kouto-swiss" );

module.exports = {
  entry: {
    bundle: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/dev-server','./src/ts/bootstrap']
  },
  output: {
    path: __dirname + '/build',
    publicPath: "/build/",
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.jade']
  },
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),
    new ExtractTextPlugin("styles.css", {disable: process.env.NODE_ENV == 'development'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            2307 // 2307 -> Cannot find module [*.jade]
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style", "css!stylus"),
        exclude: /node_modules/
      },
      {
        test: /\.jade$/,
        loader: 'jade',
        exclude: /node_modules/
      }
    ]
  },
  stylus: {
    use: [koutoSwiss()],
    import: ['~kouto-swiss/index.styl']
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: __dirname,
    hot: true
  }
};