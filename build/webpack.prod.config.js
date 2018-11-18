const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const QiniuUploadPlugin = require('qiniu-upload-plugin');
const qiniuConfig = require('./qiniu.config');

module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    path: path.resolve('./dist'),
    filename: 'notepad-[name]-[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory({ style: 'css' })]
              }),
              compilerOptions: {
                module: 'es2015'
              }
            }
          }
        ]
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin('../dist'),
    new QiniuUploadPlugin(qiniuConfig)
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  }
};
