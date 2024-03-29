const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    compress: true,
    historyApiFallback: true,
    open: true,
    overlay: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});