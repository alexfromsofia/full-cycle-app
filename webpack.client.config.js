const path = require("path")
const { merge } = require("webpack-merge")
const sharedConfig = require("./webpack.shared.config.js")

const clientPort = 8080

const config = {
  target: "web",

  entry: "./src/client/index.js",

  output: {
    path: path.join(__dirname, "./build/client"),
    filename: "scripts/bundle.js",
    publicPath: `http://localhost:${clientPort}/`,
  },

  devServer: {
    port: clientPort,
    liveReload: true,
  },
}

module.exports = merge(sharedConfig, config)
