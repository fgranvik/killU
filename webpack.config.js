const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  watch: true,
  mode: "development",
  devtool: "source-map",
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "game.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "Game",
      type: "var",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Game",
      template: "src/index.html",
    }),
  ],
};
