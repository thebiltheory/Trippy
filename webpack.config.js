const webpack = require('webpack');
// const nodeEnv = process.env.NODE.ENV || 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const html-loader = require('html-loader');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: ['./src/js/index.js', './src/scss/main.scss', './src/index.html'],
  },
  output: {
    path: `${__dirname}/docs`,
    filename: 'trippy.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|test)/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            // minimize: true,
          },
        }],
      },
      {
        test: /\bresponse.json/,
        loader: 'file-loader',
        options: {
          name: 'response.json',
        }
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('trippy.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};
