const path = require("path")
const webpackNodeExternals = require("webpack-node-externals")
const { merge } = require("webpack-merge")
const sharedConfig = require("./webpack.shared.config.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")

let config = {
  target: "node",

  entry: "./src/server/index.js",

  output: {
    path: path.join(__dirname, "./build/server"),
    filename: "bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: false,
    }),
  ],

  externals: [webpackNodeExternals()],
}

module.exports = merge(sharedConfig, config)
