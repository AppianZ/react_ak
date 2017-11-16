/**
 * Created by appian on 2017/10/9.
 */
var path = require('path');
var nodeEnv = process.env.NODE_ENV;
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

console.log(nodeEnv + '  _____env_____ ' + (nodeEnv === 'production')) ;

var plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

if(nodeEnv === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true,
      }
    }))
  /*plugins.push(new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    threshold: 10240,
    minRatio: 0.8
  }));*/
}

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
  devtool: nodeEnv === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: './',
    port: 3200,
   /* historyApiFallback: {
      rewrites: [
        { from: /./, to: '/views/404.html' }
      ]
    },*/
    inline: nodeEnv !== 'production',
    hotOnly: nodeEnv !== 'production',
    compress: nodeEnv === 'production',
    hot: nodeEnv !== 'production',
  },
}