const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')


const isProd =  process.env.NODE_ENV == 'production';


module.exports = {
  mode: process.env.NODE_ENV,

  entry: "./src/index",

  output: {
    // publicPath: isProd ? 'http://p872n14z4.bkt.clouddn.com/' : '',
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
  ],
  devServer: {
    inline: true
  },

  optimization: {
		runtimeChunk: false,
		splitChunks: {
      chunks: "all",
      minSize: 30000,
		},
	}
};
