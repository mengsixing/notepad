const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",

  entry: "./src/index",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "name-[hash:8].js"
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      loader: 'babel-loader!ts-loader'
    },{
      test: /.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true
  }
};
