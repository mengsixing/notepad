const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  mode: "production",

  entry: "./src/index",

  output: {
    // publicPath:'http://p872n14z4.bkt.clouddn.com/',
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash:8].js"
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      use:[
        'babel-loader',
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [ tsImportPluginFactory({ style: 'css' }) ]
            }),
            compilerOptions: {
              module: 'es2015'
            }
          },
        }
      ],
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
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true
  },
  optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks:'all'
		},
	}
};
