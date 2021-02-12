const webpack = require('webpack');
const path = require('path');
const WebpackBar = require('webpackbar');

const devConfig = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  performance: {
    hints: false,
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.resolve(__dirname, 'src/client/index.jsx'),
  ],
  node: {
    __dirname: false,
    fs: 'empty',
    Buffer: false,
    process: false
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-hot-loader',
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, 'src/styles/palette.scss'),
                path.resolve(__dirname, 'src/styles/mixins.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: [
            '@babel/transform-runtime',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader'],
      }
    ],
  },
  plugins: [new WebpackBar(), new webpack.HotModuleReplacementPlugin()],
};

module.exports = devConfig;

