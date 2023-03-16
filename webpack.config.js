const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const path = require("path");

module.exports = {
  entry: ['@babel/polyfill', './server/server.js'],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    library: 'app',
    filename: "build.js"
  },
  externals: [nodeExternals()],
  externalsPresets: { node: true },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(gif|jpeg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public', 'assets'), to: path.resolve(__dirname, 'build', 'assets') },
      ],
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
}