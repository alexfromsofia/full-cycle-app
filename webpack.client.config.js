const path = require("path")
const { merge } = require("webpack-merge")
const sharedConfig = require("./webpack.shared.config.js")

const port = process.env.CLIENT_PORT || 8080
const origin = process.env.ORIGIN || "localhost"

const config = {
  target: "web",

  entry: "./src/client/index.tsx",

  output: {
    path: path.join(__dirname, "./build/client"),
    filename: "bundle.js",
    publicPath: `http://${origin}:${port}/`,
  },

  devServer: {
    port,
    liveReload: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
}

module.exports = merge(sharedConfig, config)
