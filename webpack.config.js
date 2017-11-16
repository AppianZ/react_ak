/**
 * Created by appian on 2017/10/9.
 */
var path = require('path');
var nodeEnv = process.env.NODE_ENV;
var webpack = require('webpack');

console.log(nodeEnv + '  _____env_____ ' + (nodeEnv === 'production')) ;

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
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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