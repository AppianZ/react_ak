/**
 * Created by appian on 2017/10/9.
 */
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var nodeEnv = 'development';

module.exports = {
  entry: {
    js: './src/App.js',
    vendor: ['react', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: nodeEnv === 'production'? 'static/js/[name].[chunkhash].js':'[name].bundle.js',
    chunkFilename: nodeEnv === 'production'? 'static/js/[id].js?[chunkhash]': '[id].js?[chunkhash]',
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
        query: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    port: 3200,
    historyApiFallback: true,
    compress: nodeEnv === 'production',
    inline: nodeEnv !== 'production',
    hot: nodeEnv !== 'production',
  },
}