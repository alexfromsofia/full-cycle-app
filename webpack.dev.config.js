const { merge } = require("webpack-merge")
const sharedConfig = require("./webpack.shared.config.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const port = process.env.CLIENT_PORT || 3000
const config = {
  target: "web",

  entry: "./src/client/index.tsx",

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: true,
    }),
  ],

  devServer: {
    port,
    liveReload: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
}

module.exports = merge(sharedConfig, config)
