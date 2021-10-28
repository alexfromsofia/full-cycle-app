module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
}
