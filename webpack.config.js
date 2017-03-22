var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'fakeVue.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [resolve('src')]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 9090,
    inline: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./example/index.html"})
  ]
};